import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import { Home } from "../Pages/Home";
import AuthRedirect from "../Pages/AuthRedirect";
import UserProfile from "../Pages/UserProfile";
import ProtectedRoute from "./ProtectedRoute";
import AdminLogin from "../Admin/AdminLogin";
import AdminLayout from "../Admin/AdminLayout";
import AdminDashboard from "../Admin/AdminDashboard";
import ProtectedAdminRoute from "./ProtectedAdminRoute";
import VideoUploading from "../Admin/VideoUploading";
import AllVideos from "../Admin/AllVideos";
import AllUser from "../Admin/AllUser";
import UserVideos from "../Pages/UserVideos";
import RefundPolicy from "../Pages/RefundPolicy";
import TermsConditions from "../Pages/TermsConditions";
import CancellationPolicy from "../Pages/CancellationPolicy";
import ManualLogin from "../Pages/ManualLogin";
import AdminCreateUser from "../Admin/AdminCreateUser";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/manual-login" element={<ManualLogin />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
      <Route path="/cancellation-policy" element={<CancellationPolicy />} />
      <Route exact path="/auth-redirect" element={<AuthRedirect />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/user_watch_videos"
        element={
          <ProtectedRoute>
            <UserVideos />
          </ProtectedRoute>
        }
      />

      {/* admin routes */}
      <Route path="/adminLogin" element={<AdminLogin />} />
      <Route
        path="/admin"
        element={
          <ProtectedAdminRoute>
            <AdminLayout />
          </ProtectedAdminRoute>
        }
      >
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="video_upload" element={<VideoUploading />} />
        <Route path="all_video" element={<AllVideos />} />
        <Route path="all_user" element={<AllUser />} />
        <Route path="create-user" element={<AdminCreateUser />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
