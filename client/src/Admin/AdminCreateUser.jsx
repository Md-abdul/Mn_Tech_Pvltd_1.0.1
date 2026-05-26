// AdminCreateUser.jsx
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiUserPlus, FiMail, FiLock, FiUser, FiGift, FiCheck, FiAlertCircle, FiCopy } from "react-icons/fi";

const AdminCreateUser = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    hasReferral: false,
    referralCode: ""
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [generatedPassword, setGeneratedPassword] = useState(null);
  const [referralUsers, setReferralUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  // Fetch users for referral dropdown
  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const response = await axios.get(
        "http://localhost:3001/api/users?limit=100",
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      setAllUsers(response.data.data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    // Clear errors when user types
    setError(null);
  };

  const generateRandomPassword = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$";
    let password = "";
    for (let i = 0; i < 12; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setFormData(prev => ({ ...prev, password, confirmPassword: password }));
    setGeneratedPassword(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    // Validate password strength
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      setLoading(false);
      return;
    }

    try {
      const token = localStorage.getItem("adminToken");
      const response = await axios.post(
        "http://localhost:3001/api/admin/create-user",
        {
          username: formData.username,
          email: formData.email,
          name: formData.name,
          password: formData.password,
          hasReferral: formData.hasReferral,
          referralCode: formData.referralCode
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      if (response.data.success) {
        setSuccess(response.data);
        setGeneratedPassword(response.data.temporaryPassword);
        // Reset form
        setFormData({
          username: "",
          email: "",
          name: "",
          password: "",
          confirmPassword: "",
          hasReferral: false,
          referralCode: ""
        });
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create user");
      console.error("Error creating user:", err);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Success Message */}
      {success && (
        <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-start">
            <FiCheck className="text-green-600 mt-0.5 mr-3" size={20} />
            <div className="flex-1">
              <h3 className="font-semibold text-green-800">User Created Successfully!</h3>
              <p className="text-sm text-green-700 mt-1">
                User has been created. Share these credentials with the user:
              </p>
              <div className="mt-3 bg-white rounded-md p-3 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Username:</span>
                  <div className="flex items-center gap-2">
                    <code className="text-sm bg-gray-100 px-2 py-1 rounded">{success.data.username}</code>
                    <button onClick={() => copyToClipboard(success.data.username)} className="text-gray-500 hover:text-gray-700">
                      <FiCopy size={16} />
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Email:</span>
                  <div className="flex items-center gap-2">
                    <code className="text-sm bg-gray-100 px-2 py-1 rounded">{success.data.email}</code>
                    <button onClick={() => copyToClipboard(success.data.email)} className="text-gray-500 hover:text-gray-700">
                      <FiCopy size={16} />
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Temporary Password:</span>
                  <div className="flex items-center gap-2">
                    <code className="text-sm bg-yellow-100 px-2 py-1 rounded font-mono">{generatedPassword}</code>
                    <button onClick={() => copyToClipboard(generatedPassword)} className="text-gray-500 hover:text-gray-700">
                      <FiCopy size={16} />
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Referral Code:</span>
                  <div className="flex items-center gap-2">
                    <code className="text-sm bg-gray-100 px-2 py-1 rounded">{success.data.referralCode}</code>
                    <button onClick={() => copyToClipboard(success.data.referralCode)} className="text-gray-500 hover:text-gray-700">
                      <FiCopy size={16} />
                    </button>
                  </div>
                </div>
              </div>
              {/* <p className="text-xs text-green-600 mt-2">
                ⚠️ User should change their password after first login
              </p> */}
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center">
            <FiAlertCircle className="text-red-600 mr-3" size={20} />
            <p className="text-red-700">{error}</p>
          </div>
        </div>
      )}

      {/* Create User Form */}
      <div className="bg-white rounded-lg shadow border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center">
            <FiUserPlus className="mr-2" /> Create New User
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Fill in the details to create a new user account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                pattern="[a-zA-Z0-9_]{3,20}"
                title="3-20 characters, letters, numbers, and underscores only"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="e.g., john_doe123"
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Must be 3-20 characters, only letters, numbers, and underscores
            </p>
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="user@example.com"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <button
              type="button"
              onClick={generateRandomPassword}
              className="mt-2 text-sm text-indigo-600 hover:text-indigo-700"
            >
              Generate random password
            </button>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Confirm password"
              />
            </div>
          </div>

          {/* Referral Section */}
          <div className="border-t border-gray-200 pt-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="hasReferral"
                checked={formData.hasReferral}
                onChange={handleChange}
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <span className="ml-2 text-sm text-gray-700 flex items-center">
                <FiGift className="mr-1" /> This user was referred by someone
              </span>
            </label>

            {formData.hasReferral && (
              <div className="mt-3 ml-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Referral Code
                </label>
                <input
                  type="text"
                  name="referralCode"
                  value={formData.referralCode}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter referral code"
                />
                <p className="text-xs text-gray-500 mt-1">
                  The referrer will get credit when this user logs in
                </p>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Creating...
              </>
            ) : (
              <>
                <FiUserPlus className="mr-2" /> Create User
              </>
            )}
          </button>
        </form>
      </div>

      {/* Info Box */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-800 mb-2">📝 Important Notes:</h4>
        <ul className="text-sm text-blue-700 space-y-1 list-disc list-inside">
          <li>Users can login using either their username or email address</li>
          <li>Usernames must be unique across all users</li>
          <li>Referral rewards are given when the referred user logs in for the first time</li>
          <li>Share the credentials securely with the user</li>
          <li>Users can change their password after first login</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminCreateUser;