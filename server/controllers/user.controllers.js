import User from "../model/user.model.js";

export const userSignup = async (req, res) => {
    try {

        const exist = await User.findOne({ username: req.body.username });
        if (exist) {
            return res.status(401).json("Username already exists");
        }

        const user = req.body;
        const newUser = new User(user);
        await newUser.save();
        res.status(200).json("Signup successful");
    } catch (error) {
        res.status(500).json("Error in signup");
    }
}


export const userLogin = async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const user = await User.findOne({ username: username , password: password });
        if (user) {
            return res.status(200).json({ message: "Login Successful", data: user });
        } 
        return res.status(401).json("Invalid username or password");
    } catch (error) {
        res.status(500).json("Error in login");
    }
}
