import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import useFetchProductDetails from "../../hooks/useFetchProductDetails";

const ProductDetails = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [activeImage, setActiveImage] = useState(null);
    const { product, loading } = useFetchProductDetails(id);

    // Set initial active image when product loads
    useEffect(() => {
        if (product) {
            setActiveImage(product.thumbnail);
        }
    }, [product]);

    const handleAddToCart = () => {
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItemIndex = existingCart.findIndex(item => item.id === product.id);
        
        if (existingItemIndex !== -1) {
            existingCart[existingItemIndex].quantity += quantity;
        } else {
            existingCart.push({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.thumbnail,
                quantity: quantity
            });
        }
        
        localStorage.setItem('cart', JSON.stringify(existingCart));
    };

    if (loading) {
        return <div className="p-4">Loading...</div>;
    }

    if (!product) {
        return <div className="p-4">Product not found</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Image Gallery Section */}
                    <div className="space-y-4">
                        <div className="aspect-square overflow-hidden rounded-lg">
                            <LazyLoadImage
                                className="w-full h-full object-cover"
                                alt={product.title}
                                effect="blur"
                                wrapperProps={{
                                    style: { transitionDelay: "0.3s" },
                                }}
                                src={activeImage} 
                            />
                        </div>
                        {/* Only show thumbnail grid if there are multiple unique images */}
                        {[...new Set([product.thumbnail, ...product.images])].length > 1 && (
                            <div className="grid grid-cols-6 gap-2">
                                {[...new Set([product.thumbnail, ...product.images])].map((image, index) => (
                                    <div 
                                        key={index}
                                        className={`aspect-square rounded-lg overflow-hidden cursor-pointer border-2 ${activeImage === image ? 'border-primary-600' : 'border-transparent'}`}
                                        onClick={() => setActiveImage(image)}
                                    >
                                        <img 
                                            src={image} 
                                            alt={`Product view ${index + 1}`}
                                            className="w-full h-full object-cover hover:opacity-75 transition-opacity"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Product Info Section */}
                    <div>
                        <p className="text-2xl font-bold text-primary-600 mb-4">
                            ${product.price}
                        </p>
                        <p className="mb-4">
                            <span className="font-semibold">Description:</span><br/>
                            {product.description}
                        </p>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div>
                                <p className="font-semibold">Brand</p>
                                <p>{product.brand}</p>
                            </div>
                            <div>
                                <p className="font-semibold">Category</p>
                                <p>{product.category}</p>
                            </div>
                            <div>
                                <p className="font-semibold">Rating</p>
                                <p>{product.rating}/5</p>
                            </div>
                            <div>
                                <p className="font-semibold">Stock</p>
                                <p>{product.stock} units</p>
                            </div>
                        </div>
                        
                        {/* Quantity selector and Add to Cart button */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <label htmlFor="quantity" className="font-semibold">Quantity:</label>
                                <select 
                                    id="quantity" 
                                    value={quantity} 
                                    onChange={(e) => setQuantity(Number(e.target.value))}
                                    className="border rounded-md px-2 py-1"
                                >
                                    {[...Array(10)].map((_, i) => (
                                        <option key={i + 1} value={i + 1}>
                                            {i + 1}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <button
                                onClick={handleAddToCart}
                                className="w-full bg-primary-600 text-white py-2.5 px-4 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
                            >
                                <svg 
                                    className="w-5 h-5" 
                                    fill="none" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                                <span>Add to Cart</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;