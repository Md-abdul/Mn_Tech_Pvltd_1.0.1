

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./database");
const passport = require("passport");
const session = require("express-session");
const googleAuthRouter = require("./routes/googleSignup");
const userRoutes = require("./routes/userRoutes");
const { adminRoutes } = require("./routes/adminRoutes");
const videoRoutes = require("./routes/videos");

dotenv.config();

const app = express();

// Database connection
connectDB();

// ✅ CORS configuration
const allowedOrigins = [
  "https://www.modevianinhertz.work", 
  "https://www.modevianinehertz.in",
  "http://localhost:5173",             // Local dev Vite
  "http://localhost:3000",             // Optional, if you test with React dev server
  process.env.FRONTEND_URL             // Fallback if you set FRONTEND_URL
];

const corsOptions = {
  origin: function (origin, callback) {
    

    if (!origin) {
      // Allow requests with no origin (Postman, curl, mobile apps)
      return callback(null, true);
    }

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    try {
      const hostname = new URL(origin).hostname;
      // Optional: allow any Netlify subdomain if needed
      if (hostname.endsWith(".netlify.app")) {
        return callback(null, true);
      }
    } catch (err) {
      console.error("❌ Error parsing origin URL:", err);
    }

   
    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
  optionsSuccessStatus: 200 // For legacy browsers
};

app.use(cors(corsOptions));

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
  })
);

// Passport initialization
app.use(passport.initialize());
app.use(passport.session());

// Test route
app.get("/", (req, res) => {
  res.send("✅ Welcome to Maglan Technology API.");
});

// Routes
app.use("/auth/google", googleAuthRouter);
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/video_upload", videoRoutes);

// Server start
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
