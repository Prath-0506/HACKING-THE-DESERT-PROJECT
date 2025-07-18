import React, { useState } from 'react';
import videoBg from '../assets/your-video-file.mp4';
import './SellProducts.css';

const SellProducts = () => {
  const [productData, setProductData] = useState({
    name: '',
    quantity: '',
    price: '',
    category: '',
    location: '',
    description: '',
    image: null,
    imagePreview: null,
  });

  const [submittedProducts, setSubmittedProducts] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProductData({ ...productData, image: file, imagePreview: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation (already handled via 'required' in form, but double-check)
    if (
      productData.name &&
      productData.quantity &&
      productData.price &&
      productData.category &&
      productData.location
    ) {
      setSubmittedProducts([...submittedProducts, productData]);
      // Reset form
      setProductData({
        name: '',
        quantity: '',
        price: '',
        category: '',
        location: '',
        description: '',
        image: null,
        imagePreview: null,
      });
    }
  };

  return (
    <div>
      {/* HERO SECTION */}
      <section className="hero">
        <video autoPlay muted loop playsInline>
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-text">
          <h1>Sell Your Farm Produce</h1>
          <p>Reach more buyers directly and earn better</p>
        </div>
      </section>

      {/* FORM SECTION */}
      <main className="form-container">
        <h2>Product Submission Form</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Product Name</label>
          <input type="text" id="name" name="name" placeholder="e.g., Tomatoes, Rice" required value={productData.name} onChange={handleChange} />

          <label htmlFor="quantity">Quantity</label>
          <input type="number" id="quantity" name="quantity" placeholder="e.g., 50 kg" required value={productData.quantity} onChange={handleChange} />

          <label htmlFor="price">Price (per kg/unit)</label>
          <input type="number" id="price" name="price" placeholder="e.g., 40 INR" required value={productData.price} onChange={handleChange} />

          <label htmlFor="category">Category</label>
          <select id="category" name="category" required value={productData.category} onChange={handleChange}>
            <option value="">-- Select Category --</option>
            <option value="vegetables">Vegetables</option>
            <option value="fruits">Fruits</option>
            <option value="grains">Grains</option>
            <option value="dairy">Dairy Products</option>
            <option value="spices">Spices</option>
            <option value="others">Others</option>
          </select>

          <label htmlFor="location">Your Location</label>
          <input type="text" id="location" name="location" placeholder="Village, District, State" required value={productData.location} onChange={handleChange} />

          <label htmlFor="description">Product Description</label>
          <textarea id="description" name="description" rows="4" placeholder="Fresh, organic, pesticide-free..." value={productData.description} onChange={handleChange}></textarea>

          <label htmlFor="image">Upload Product Image</label>
          <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} />

          <button type="submit">Post Item for Sale</button>
        </form>
      </main>

      {/* PRODUCT LISTING PREVIEW */}
      {submittedProducts.length > 0 && (
        <section className="product-list">
          <h2>Listed Products</h2>
          <div className="product-grid">
            {submittedProducts.map((product, index) => (
              <div className="product-card" key={index}>
                {product.imagePreview && (
                  <img src={product.imagePreview} alt={product.name} className="product-image" />
                )}
                <h3>{product.name}</h3>
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Quantity:</strong> {product.quantity}</p>
                <p><strong>Price:</strong> ₹{product.price}</p>
                <p><strong>Location:</strong> {product.location}</p>
                <p className="product-desc">{product.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default SellProducts;
