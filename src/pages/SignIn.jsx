import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Sign in form for users. Currently front‑end only with no authentication logic.
 */
const SignIn = () => {
  // Local state for loading and messages
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    const formData = new FormData(e.target);
    const email = formData.get('email')?.trim();
    const password = formData.get('password');
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    setLoading(true);
    try {
      setSuccess('Server waking up, please wait...');

await fetch('https://indian-agro-mart-backend.onrender.com/');
await new Promise((resolve) => setTimeout(resolve, 8000));
      const response = await fetch("https://indian-agro-mart-backend.onrender.com/api/users/login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const text = await response.text();
      console.log(response.status);
console.log(text);

let data = {};
try {
  data = JSON.parse(text);
} catch (error) {
  console.log("Login response is not JSON:", text);
}
      if (response.ok) {
        // Log backend response
        console.log(data);
        // Extract token and user using fallbacks
        const token = data.token || data.accessToken || data.jwt;
        const user = data.user || data.data || data;
        if (token) {
          localStorage.setItem('token', token);
        }
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
        }
        // Notify other components of auth change
        window.dispatchEvent(new Event('authChanged'));
        setError('');
setSuccess('Login successful');
        // Redirect to home after login
        navigate('/');
      } else {
        setError(data.message || 'Login failed.');
      }
    } catch (err) {
      setError('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">Sign In</h2>
        {/* Display error or success messages */}
        {error && <p className="text-red-600 text-center mb-4 text-sm">{error}</p>}
        {success && <p className="text-green-600 text-center mb-4 text-sm">{success}</p>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              name="email"
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-primary"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              name="password"
              type="password"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-primary"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-2 rounded hover:bg-green-700 transition-colors"
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;