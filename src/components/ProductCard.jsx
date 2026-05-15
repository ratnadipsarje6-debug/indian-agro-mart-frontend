import { useState } from "react";

/**
 * A reusable card component that displays a product image, name, price and action buttons.
 * The image container maintains consistent height across different viewport sizes using Tailwind utility classes.
 */
const ProductCard = ({ product }) => {
  const {
  name,
  price,
  image,
  description,
  warranty,
  usage,
  capacity
} = product;
  const [showDetails, setShowDetails] = useState(false);

  const handleViewDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden">
      <div className="relative">
        <div className="w-full h-72 sm:h-56 bg-gray-50 flex items-center justify-center overflow-hidden">
          {/* Ensure the image fits nicely without stretching */}
          <img src={image} alt={name} className="object-contain w-full h-full" />
        </div>
        <span className="absolute top-2 right-2 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
          {price}
        </span>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-lg mb-2 text-primary">{name}</h3>
        <div className="mt-auto flex space-x-2">
       <a
  onClick={() => localStorage.setItem("selectedProduct", name)}
  href="#enquiry"
  className="flex-1 bg-primary text-white text-center py-2 rounded hover:bg-green-700"
>
  Enquire Now
</a>
             <button
              type="button"
               onClick={handleViewDetails}
                className="flex-1 border border-primary text-primary py-2 rounded hover:bg-primary hover:text-white transition"
               >
                  View Details
              </button>
        </div>
      </div>
      {showDetails && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg w-96">
      <h2 className="text-2xl font-bold mb-4">{name}</h2>

      <img
        src={image}
        alt={name}
        className="w-full h-52 object-contain mb-4"
      />

      <p className="mb-2">
        <strong>Price:</strong> {price}
      </p>

      <p className="mb-4">
        {description}
      </p>
    <div className="space-y-2 mb-4 text-sm">
  <p>
    <strong>Usage:</strong> {usage}
  </p>

  <p>
    <strong>Capacity:</strong> {capacity}
  </p>

  <p>
    <strong>Warranty:</strong> {warranty}
  </p>

  <p>
    <strong>Description:</strong> {description}
  </p>
</div>

<a
  href={`https://wa.me/917499172574?text=Hello,%20I%20want%20enquiry%20about%20${name}`}
  target="_blank"
  rel="noopener noreferrer"
  className="flex-1 bg-primary text-white text-center py-2 rounded"
>
  WhatsApp Enquiry
</a>

<button
  onClick={handleViewDetails}
  className="bg-red-500 text-white px-4 py-2 rounded"
>
  Close
</button>   
    </div>
  </div>
)}
    </div>
  );
};

export default ProductCard;