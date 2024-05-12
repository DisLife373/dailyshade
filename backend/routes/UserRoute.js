const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const UserModel = require("../models/User");

router.use(cookieParser());

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const userFromUserName = await UserModel.findOne({ username: username });
    const userFromEmail = await UserModel.findOne({ email: email });
    if (userFromUserName) {
      return res.status(400).json({ log: "Username นี้ถูกใช้งานแล้ว" });
    } else if (userFromEmail) {
      return res.status(400).json({ log: "Email นี้ถูกใช้งานแล้ว" });
    } else {
      await UserModel.create({
        username,
        email,
        password: encryptedPassword,
      });
      return res.status(201).json({ log: "สมัครสมาชิกสำเร็จ" });
    }
  } catch (err) {
    return res.status(500).json({ log: "เซิฟเวอร์ขัดข้อง" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email: email });
    const comp = await bcrypt.compare(password, user.password);
    if (comp) {
      const accessToken = jwt.sign(
        { email: user.email },
        process.env.ACC_SECRET,
        {
          expiresIn: "1d",
        }
      );
      const refreshToken = jwt.sign(
        { email: user.email },
        process.env.REF_SECRET,
        {
          expiresIn: "7d",
        }
      );
      res.cookie("accessToken", accessToken);
      res.cookie("refreshToken", refreshToken);
      return res.status(200).json({ log: "เข้าสู่ระบบ" });
    } else {
      return res.status(403).json({ log: "รหัสผ่านไม่ถูกต้อง" });
    }
  } catch (err) {
    return res
      .status(404)
      .json({ log: "ไม่พบผู้ใช้นี้ โปรดกรอก Email ให้ถูกต้อง" });
  }
});

const verifyUser = (req, res, next) => {
  const accessToken = req.cookies.accessToken;
  if (accessToken) {
    jwt.verify(accessToken, process.env.ACC_SECRET, (err, decoded) => {
      if (err) return res.status(403).json({ log: "Forbidden" });
      req.email = decoded.email;
      next();
    });
  } else {
    if (renewToken(req, res)) {
      next();
    } else {
      req.email = null;
      next();
    }
  }
};

const renewToken = (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  let exist = false;
  if (refreshToken) {
    jwt.verify(refreshToken, process.env.REF_SECRET, (err, decoded) => {
      if (err) return res.status(403).json({ log: "Forbidden" });
      const accessToken = jwt.sign(
        { email: decoded.email },
        process.env.ACC_SECRET,
        {
          expiresIn: "1d",
        }
      );
      res.cookie("accessToken", accessToken);
      exist = true;
    });
  } else {
    res.json({ log: "ไม่ได้เข้าสู่ระบบ", isLogin: false });
  }
  return exist;
};

router.get("/getUser", verifyUser, (req, res) => {
  const data = req.email;
  return res.json({ email: data, log: "พบบัญชีผู้ใช้", isLogin: true });
});

router.post("/getUserData", verifyUser, async (req, res) => {
  const { email } = req.body;
  const emailFromCookie = req.email;
  try {
    if (email == emailFromCookie) {
      const user_data = await UserModel.findOne({ email: email });
      return res.status(200).json(user_data);
    } 
  } catch (err) {
    return res.status(404).json({ log: "ไม่พบผู้ใช้นี้ในระบบ" });
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("accessToken");
  res.clearCookie("refreshToken");
  return res.send("Clear All Cookies");
});

module.exports = router;
