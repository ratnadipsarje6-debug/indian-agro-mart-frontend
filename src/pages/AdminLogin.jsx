import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Admin login page. Provides inputs for admin ID and password. Purely UI.
 */
const AdminLogin = () => {
const [adminId, setAdminId] = useState("");
const [password, setPassword] = useState("");

const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();

  try {
  const response = await fetch("http://localhost:5000/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: adminId,
      password,
    }),
  });

  const data = await response.json();

  if (response.ok) {
    localStorage.setItem("adminLoggedIn", "true");
    localStorage.setItem("adminData", JSON.stringify(data));

    navigate("/admin-dashboard");
  } else {
    alert(data.message || "Login Failed");
  }
} catch (error) {
  console.log(error);
  alert("Server Error");
}
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">Admin Login</h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-gray-700 mb-1">Admin ID</label>
            <input
              type="text"
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-primary"
              placeholder="Admin ID"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-primary"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded hover:bg-green-700 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;