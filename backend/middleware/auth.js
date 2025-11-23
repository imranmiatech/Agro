import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  const token = req.headers.token;
  if (!token) {
    
    return res.json({ success: false, message: "Unauthorized access" });
  }
  try {
    const token_decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decoded.id
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authUser;
