import paytmchecksum from "../paytm/PaytmChecksum.js";
import { paytmParams, paytmMerchantKey } from "../server.js";
import formidable from "formidable";
import https from "https";
import { log } from "console";

export const addPaymentGateway = async (req, res) => {
  const paytmCheckSum = await paytmchecksum.generateSignature(
    paytmParams,
    paytmMerchantKey
  );
  try {
    const params = {
      ...paytmParams,
      CHECKSUMHASH: paytmCheckSum,
    };
    res.status(200).json(params);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// export const paytmResponse = (req, res) => {
//   const form = new formidable.IncomingForm();
//   //   const form = formidable();

//   const paytmCheckSum = req.body.CHECKSUMHASH;
//   delete req.body.CHECKSUMHASH;

//   const isVerifySignature = paytmchecksum.verifySignature(
//     req.body,
//     "bKMfNxPPf_QdZppa",
//     paytmCheckSum
//   );
//   if (isVerifySignature) {
//     const paytmParams = {};
//     paytmParams["MID"] = req.body.MID;
//     paytmParams["ORDERID"] = req.body.ORDERID;
//     paytmParams["MID"] = req.body.MID;

//     paytmCheckSum
//       .generateSignature(paytmParams, paytmMerchantKey)
//       .then(function (checkSum) {
//         paytmParams["CHECKSUMHASH"] = checkSum;
//         const post_data = JSON.stringify(paytmParams);
//         const options = {
//           hostname: "securegw-stage.paytm.in",
//           port: 443,
//           path: "/order/status",
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             "Content-Length": post_data.length,
//           },
//         };
//         let response = "";
//         let post_req = https.request(options, function (post_res) {
//           post_res.on("data", function (chunk) {
//             response += chunk;
//           });
//           post_res.on("end", function () {
//             let result = JSON.parse(response);
//             res.redirect("http://localhost:5173/");
//           });
//         });
//         post_req.write(post_data);
//         post_req.end();
//       });
//   } else {
//     console.log("mismatch");
//   }
// };


export const paytmResponse = (req, res) => {
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Form parse error:", err);
      return res.status(500).send("Form parsing failed");
    }

    console.log("Received fields:", fields); // ✅ Debug: see what Paytm sent

    const paytmCheckSum = fields.CHECKSUMHASH;
    delete fields.CHECKSUMHASH;

    if (!paytmCheckSum) {
      console.error("❌ Missing CHECKSUMHASH");
      return res.status(400).send("Invalid Paytm response");
    }

    const isVerifySignature = paytmchecksum.verifySignature(
      fields,
      paytmMerchantKey,
      paytmCheckSum
    );

    if (isVerifySignature) {
      const paytmParams = {
        MID: fields.MID,
        ORDERID: fields.ORDERID,
      };

      const checkSum = await paytmchecksum.generateSignature(
        paytmParams,
        paytmMerchantKey
      );
      paytmParams.CHECKSUMHASH = checkSum;

      const post_data = JSON.stringify(paytmParams);

      const options = {
        hostname: "securegw-stage.paytm.in",
        port: 443,
        path: "/order/status",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": post_data.length,
        },
      };

      const post_req = https.request(options, (post_res) => {
        let response = "";
        post_res.on("data", (chunk) => (response += chunk));
        post_res.on("end", () => {
          const result = JSON.parse(response);
          console.log("✅ Paytm Status Response:", result);
          res.redirect("https://flipcart-frontend.onrender.com/");
        });
      });

      post_req.write(post_data);
      post_req.end();
    } else {
      console.error("❌ Checksum mismatch");
      res.status(400).send("Checksum mismatch");
    }
  });
};
