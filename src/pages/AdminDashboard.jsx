import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const navigate = useNavigate();
   useEffect(() => {
  const isAdminLoggedIn = localStorage.getItem("adminLoggedIn");

  if (isAdminLoggedIn !== "true") {
    navigate("/admin-login");
  }
}, [navigate]);
  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const res = await fetch("https://indian-agro-mart-backend.onrender.com/api/enquiries");
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Failed to load enquiries");
        }

        setEnquiries(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.message || "Failed to load enquiries");
      } finally {
        setLoading(false);
      }
    };

    fetchEnquiries();
  }, []);

const handleDelete = async (id) => {
  try {
    const response = await fetch(
      `https://indian-agro-mart-backend.onrender.com/api/enquiries/${id}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();
    console.log(data);

    setEnquiries(enquiries.filter((item) => item._id !== id));
  } catch (error) {
    console.log(error);
  }
};
  return (
    <div className="p-6 bg-white min-h-screen">
        <button
     onClick={() => {
     localStorage.removeItem("adminLoggedIn");
     localStorage.removeItem("adminData");
     navigate("/admin-login");
  }}
     className="bg-red-500 text-white px-4 py-2 rounded mb-4"
>
       Logout
     </button>
      <h1 className="text-3xl font-bold mb-4 text-green-700">
        Admin Dashboard
      </h1>

      <p className="mb-4 text-gray-700">
        Total enquiries: {enquiries.length}
      </p>

      {loading && <p>Loading enquiries...</p>}

      {error && <p className="text-red-600">{error}</p>}

      {!loading && !error && enquiries.length === 0 && (
        <p>No enquiries found.</p>
      )}

      {!loading && !error && enquiries.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Phone</th>
                <th className="p-2 border">Product</th>
                <th className="p-2 border">Message</th>
                <th className="p-2 border">Date</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>

            <tbody>
              {enquiries.map((item) => (
                <tr key={item._id}>
                  <td className="border p-2">{item.name}</td>
                  <td className="border p-2">{item.email}</td>
                  <td className="border p-2">{item.phone}</td>
                  <td className="border p-2">{item.product}</td>
                  <td className="border p-2">{item.message}</td>
                  <td className="border p-2">
                    {item.createdAt
                      ? new Date(item.createdAt).toLocaleString()
                      : "-"}
                  </td>
                  <td className="border p-2">
               <button
                 onClick={() => setSelectedEnquiry(item)}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded"
>
                   View
                </button>
</td>

<td className="border p-2">
  <button
    onClick={() => handleDelete(item._id)}
    className="bg-red-600 text-white px-3 py-1 rounded"
  >
    Delete
  </button>
</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {selectedEnquiry && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg w-[400px] shadow-lg">

      <h2 className="text-2xl font-bold mb-4 text-green-700">
        Enquiry Details
      </h2>

      <div className="space-y-2">
        <p><strong>Name:</strong> {selectedEnquiry.name}</p>

        <p><strong>Email:</strong> {selectedEnquiry.email}</p>

        <p><strong>Phone:</strong> {selectedEnquiry.phone}</p>

        <p><strong>Product:</strong> {selectedEnquiry.product}</p>

        <p><strong>Message:</strong> {selectedEnquiry.message}</p>

        <p>
          <strong>Date:</strong>{" "}
          {new Date(selectedEnquiry.createdAt).toLocaleString()}
        </p>
      </div>

      <button
        onClick={() => setSelectedEnquiry(null)}
        className="mt-5 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
      >
        Close
      </button>

    </div>
  </div>
)}
    </div>
  );
};

export default AdminDashboard;