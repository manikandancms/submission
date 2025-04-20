import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link, useNavigate } from "react-router-dom";
import useFetchProducts from '../../hooks/useFetchProducts';

const productWithCategory = (Component) => {
  const WithCategory = (props11) => {
    return (
      <div className="relative">
        <span className="absolute top-1.5 left-1.5 bg-gray-600 text-white px-2 py-1 rounded-md text-xs z-10">
          {props11.category}
        </span>
        <Component {...props11} />
      </div>
    );
  };
  return WithCategory;
};

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-4 h-4 ${index < Math.floor(rating)
            ? 'text-yellow-400'
            : index < rating
              ? 'text-yellow-400 opacity-50'
              : 'text-gray-300'
            }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="ml-2 text-sm font-medium text-gray-500">
        ({rating})
      </span>
    </div>
  );
};

const ProductionCard = (props11) => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate(`/products/${props11.id}`);
  };

  return (<>
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <Link to={`/products/${props11.id}`}>
        <img className="rounded-t-lg p-8" src={props11.image} alt="product image" />
      </Link>
      <div className="px-5 pb-5">
        <Link to={`/products/${props11.id}`}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {props11.title}
          </h5>
        </Link>
        <div className="mb-5 mt-2.5 flex items-center justify-between">
          <StarRating rating={props11.rating} />
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {props11.total_no_users} in stock
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${props11.price}
            </span>
            {props11.offer > 0 && (
              <span className="ml-2 text-sm font-medium text-green-600">
                {props11.offer}% OFF
              </span>
            )}
          </div>
          <button
            onClick={handleBuyNow}
            type="button"
            className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            <svg
              className="-ms-2 me-2 h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
              />
            </svg>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </>);
};

const ProductLayout = () => {
  const { productData, isLoading } = useFetchProducts();

  const ProductionCardWithCategory = productWithCategory(ProductionCard);

  if (isLoading) {
    return <p>Loading.....</p>;
  }

  return (
    <div className="2xl:container mx-auto">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 py-5 px-5">
        {productData.map((items) => (
          <ProductionCardWithCategory
            key={uuidv4()}
            image={items.thumbnail}
            title={items.title}
            price={items.price}
            offer={items.discountPercentage}
            rating={items.rating}
            total_no_users={items.stock}
            category={items.category}
            id={items.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductLayout;


