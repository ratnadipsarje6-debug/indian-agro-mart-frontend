import React from 'react';

/**
 * Registration page for new users. Purely a UI form without backend integration.
 */
const Register = () => {
  // Local state for loading and messages
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    const formData = new FormData(e.target);
    const name = formData.get('name')?.trim();
    const email = formData.get('email')?.trim();
    const mobile = formData.get('mobile')?.trim();
    const password = formData.get('password');
    // Basic validation: ensure required fields are filled
    if (!name || !email || !mobile || !password) {
      setError('Please fill in all fields.');
      return;
    }
    setLoading(true);
    try {
      const body = {
        name,
        email,
        phone: mobile,
        password,
        city: '',
        role: 'user',
      };
      const response = await fetch("https://indian-agro-mart-backend.onrender.com/api/users/register", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      if (response.ok) {
        // Store token and user if provided
        if (data.token) {
          localStorage.setItem('token', data.token);
        }
        if (data.user) {
          localStorage.setItem('user', JSON.stringify(data.user));
        }
        setSuccess(data.message || 'Registration successful.');
      } else {
        setError(data.message || 'Registration failed.');
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
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">Register</h2>
        {/* Display error or success messages */}
        {error && <p className="text-red-600 text-center mb-4 text-sm">{error}</p>}
        {success && <p className="text-green-600 text-center mb-4 text-sm">{success}</p>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              name="name"
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-primary"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              name="email"
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-primary"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Mobile Number</label>
            <input
              name="mobile"
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-primary"
              placeholder="Your Mobile Number"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              name="password"
              type="password"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-primary"
              placeholder="Create Password"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-2 rounded hover:bg-green-700 transition-colors"
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;