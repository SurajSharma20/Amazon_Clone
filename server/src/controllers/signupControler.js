const userSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");

// Correct the function name to generateRandomString
function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}

const userController = {};

userController.Insert = async (req, res) => {
  console.log("post api hit", req.body);
  try {
    // Check if mobile number already exists
    const exitMobileNumber = await userSchema.findOne({
      mobile_no: req.body.mobile_no,
    });
    if (exitMobileNumber) {
      return res
        .status(409)
        .json({ status: "409", error: "Mobile number already exists" });
    }

    // Check if email already exists
    const existEmail = await userSchema.findOne({ email: req.body.email });
    if (existEmail) {
      return res
        .status(409)
        .json({ status: "409", error: "Email is already exists"});
    }

    // Generate a unique 22-character alphanumeric user ID
    const userId = generateRandomString(22);

    const newUser = new userSchema({
      user_id: userId, // Assign the generated user ID
      created_at: new Date(),
      name: req.body.name,
      email: req.body.email,
      mobile_no: req.body.mobile_no,
      country: req.body.country,
      password: req.body.password,
      c_password: req.body.c_password,
    });

    // password increpet formate code
    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRound);
    const hashedcPassword = await bcrypt.hash(req.body.c_password, saltRound);

    // After increpted we have to assign/update
    newUser.password = hashedPassword;
    newUser.c_password = hashedcPassword;

    const data = await newUser.save();

    res
      .status(200)
      .json({ status: "200", message: "Registration Successful!" });
  } catch (error) {
    // Handle other errors
    res
      .status(500)
      .json({
        status: "500",
        error: "Error occurred while saving user data.......",
      });
  }
};

// Export the userController for use in other parts of your application
module.exports = userController;
