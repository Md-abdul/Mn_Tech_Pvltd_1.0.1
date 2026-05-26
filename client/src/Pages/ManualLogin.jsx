// // ManualLogin.jsx - Add this component for manual login
// import React, { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";
// import { FiUser, FiLock, FiLogIn, FiEye, FiEyeOff, FiAlertCircle } from "react-icons/fi";

// const ManualLogin = () => {
//   const [identifier, setIdentifier] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const response = await axios.post(
//         "http://localhost:3001/api/auth/login",
//         { identifier, password }
//       );

//       if (response.data.success) {
//         login(response.data.token, response.data.userId);
//         navigate("/profile");
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center p-10 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
//       <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-sm border border-gray-100">
//         <div className="flex flex-col items-center mb-8">
//           <div className="w-20 h-20 mb-4 rounded-full bg-indigo-100 flex items-center justify-center shadow-inner">
//             <FiLogIn className="h-12 w-12 text-indigo-600" />
//           </div>
//           <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
//           <p className="text-gray-500 mt-2 text-center">
//             Sign in to your account
//           </p>
//         </div>

//         {error && (
//           <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg border border-red-200 text-sm flex items-center">
//             <FiAlertCircle className="mr-2" />
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Username or Email
//             </label>
//             <div className="relative">
//               <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               <input
//                 type="text"
//                 value={identifier}
//                 onChange={(e) => setIdentifier(e.target.value)}
//                 required
//                 className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                 placeholder="Enter username or email"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Password
//             </label>
//             <div className="relative">
//               <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               <input
//                 type={showPassword ? "text" : "password"}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                 placeholder="Enter password"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//               >
//                 {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
//               </button>
//             </div>
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
//           >
//             {loading ? (
//               <>
//                 <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
//                 Signing in...
//               </>
//             ) : (
//               <>
//                 <FiLogIn className="mr-2" /> Sign In
//               </>
//             )}
//           </button>
//         </form>

//         <div className="mt-6">
//           <div className="relative">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-300"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-2 bg-white text-gray-500">Or continue with</span>
//             </div>
//           </div>

//           <div className="mt-6">
//             <Link
//               to="/login"
//               className="w-full flex items-center justify-center py-2 px-4 rounded-lg bg-white text-gray-700 border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
//             >
//               <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
//                 <path
//                   fill="#4285F4"
//                   d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                 />
//                 <path
//                   fill="#34A853"
//                   d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                 />
//                 <path
//                   fill="#FBBC05"
//                   d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//                 />
//                 <path
//                   fill="#EA4335"
//                   d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//                 />
//               </svg>
//               Sign in with Google
//             </Link>
//           </div>
//         </div>

//         <div className="mt-6 text-center text-sm text-gray-500">
//           <Link to="/adminLogin" className="text-indigo-600 hover:text-indigo-800">
//             Admin Login
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManualLogin;

// ManualLogin.jsx - Clean version with only manual login
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import {
  FiUser,
  FiLock,
  FiLogIn,
  FiEye,
  FiEyeOff,
  FiAlertCircle,
} from "react-icons/fi";

const ManualLogin = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // const response = await axios.post(
      //   `${import.meta.env.VITE_API_BASE_URL || "https://mn-tech-pvltd-596.vercel.app"}/api/auth/login`,
      //   { identifier, password }
      // );
      const response = await axios.post(
        `http://localhost:3001/api/users/login`,
        { identifier, password },
      );
      if (response.data.success) {
        login(response.data.token, response.data.userId);
        navigate("/profile");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 mb-4 rounded-full bg-indigo-100 flex items-center justify-center shadow-inner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Sign In</h1>
          <p className="text-gray-500 mt-2 text-center">
            Enter your credentials to access your account
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg border border-red-200 text-sm flex items-center">
            <FiAlertCircle className="mr-2 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username or Email
            </label>
            <div className="relative">
              <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required
                className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                placeholder="Enter your username or email"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
              >
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2.5 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center cursor-pointer"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Signing in...
              </>
            ) : (
              <>
                <FiLogIn className="mr-2" /> Sign In
              </>
            )}
          </button>
        </form>

        {/* Additional Links */}
        {/* <div className="mt-6 text-center">
          <Link 
            to="/login" 
            className="text-sm text-indigo-600 hover:text-indigo-800 transition"
          >
            Sign in with Google instead?
          </Link>
        </div> */}

        <div className="mt-4 text-center">
          <Link
            to="/adminLogin"
            className="text-sm text-gray-500 hover:text-gray-700 transition"
          >
            Admin Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ManualLogin;
