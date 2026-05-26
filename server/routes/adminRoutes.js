const express = require("express");
const jwt = require("jsonwebtoken");
const adminModal = require("../modals/adminModal");
const UserModel = require("../modals/User")
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs"); 
const shortid = require("shortid");

dotenv.config();
const adminRoutes = express.Router();
adminRoutes.use(cookieParser());

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";
const TOKEN_EXPIRY = "24h"; // Token expires in 24 hours

// Hardcoded admin credentialsMAGLAN TECHNOLOGY 
const ADMIN_EMAIL = "admin@pconsulting.com";
const ADMIN_PASSWORD = "admin@pconsulting.com";

// Admin Login Route
adminRoutes.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // Check if the credentials match the hardcoded admin credentials
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      // Generate token
      const token = jwt.sign({ isAdmin: true }, JWT_SECRET, {
        expiresIn: TOKEN_EXPIRY,
      });

      // Set cookie
      res.cookie("adminToken", token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      });

      return res.status(200).json({
        message: "Admin login successful",
        token,
        user: { email: ADMIN_EMAIL, isAdmin: true },
      });
    } else {
      return res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
});

// Admin Logout Route
adminRoutes.post("/logout", (req, res) => {
  res.clearCookie("adminToken");
  return res.status(200).json({ message: "Admin logout successful" });
});

// Middleware to check if the user is an admin
const authenticateAdmin = (req, res, next) => {
  const token = req.cookies.adminToken || req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (!decoded.isAdmin) {
      return res.status(403).json({ message: "Access denied. Not an admin." });
    }
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

// Protected Admin Route
adminRoutes.get("/admin/dashboard", authenticateAdmin, (req, res) => {
  return res.status(200).json({ message: "Welcome to the admin dashboard" });
});

adminRoutes.post("/create-user", async (req, res) => {
  try {
    const {
      username,
      email,
      name,
      password,
      hasReferral,
      referralCode
    } = req.body;

    // Validate required fields
    if (!username || !email || !name || !password) {
      return res.status(400).json({
        success: false,
        message: "Username, email, name and password are required"
      });
    }

    // Validate username format
    if (!/^[a-zA-Z0-9_]{3,20}$/.test(username)) {
      return res.status(400).json({
        success: false,
        message: "Username must be 3-20 characters and can only contain letters, numbers, and underscores"
      });
    }

    // Validate email format
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address"
      });
    }

    // Check if username already exists
    const existingUsername = await UserModel.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({
        success: false,
        message: "Username already taken. Please choose another one."
      });
    }

    // Check if email already exists
    const existingEmail = await UserModel.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({
        success: false,
        message: "Email already registered. Please use a different email."
      });
    }

    // Hash password using bcryptjs
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate unique referral code for new user
    const userReferralCode = shortid.generate();

    // Handle referral if provided
    let referredByUser = null;
    let referralApplied = false;

    if (hasReferral && referralCode) {
      referredByUser = await UserModel.findOne({ referralCode: referralCode });
      if (referredByUser) {
        referralApplied = true;
      }
    }

    // Create new user
    const newUser = new UserModel({
      username,
      name,
      email,
      password: hashedPassword,
      isGoogleAuth: false,
      referralCode: userReferralCode,
      referredBy: referredByUser ? referredByUser._id : null,
      tokens: [],
      loginSessions: [],
      createdAt: new Date(),
    });

    await newUser.save();

    // Process referral if exists
    if (referralApplied && referredByUser) {
      referredByUser.referrals.push({
        userId: newUser._id,
        joinedAt: new Date(),
        hasLoggedIn: false, // User hasn't logged in yet
        earned: false
      });
      await referredByUser.save();
    }

    // Return user data (excluding sensitive info)
    const userResponse = {
      _id: newUser._id,
      username: newUser.username,
      name: newUser.name,
      email: newUser.email,
      referralCode: newUser.referralCode,
      referredBy: referredByUser ? {
        _id: referredByUser._id,
        name: referredByUser.name,
        email: referredByUser.email
      } : null,
      referralApplied: referralApplied,
      createdAt: newUser.createdAt
    };

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: userResponse,
      temporaryPassword: password // Show once for admin to share with user
    });

  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    });
  }
});

module.exports = { adminRoutes, authenticateAdmin };
