import jwt from "jsonwebtoken";

export const requireAuth = async (req, res, next) => {
  //verify authentication
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required..." });
  }

  const token = authorization.split(" ")[1];

  try {
    if (!token) throw new Error("No token");
    jwt.verify(token, process.env.SECRET);
    next();
  } catch (error) {
    // console.log(error);
    res.status(401).json({ error: "Request is not authorized..." });
  }
};