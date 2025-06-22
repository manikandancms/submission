import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';

const productData = [
  {
    id: "1",
    image: "https://ik.imagekit.io/jap5d6wbb/image/fernando-andrade-nAOZCYcLND8-unsplash.jpg?updatedAt=1748280009309",
    title: "Pineapple Paradise",
    price: "$99",
    rating: "4.9",
    offer: "20",
    total_no_user: "350"
  },
  {
    id: "2",
    image: "https://ik.imagekit.io/mani2/image/hal-gatewood-NaJ3s9y7GGE-unsplash.jpg_updatedAt=1748280060544?updatedAt=1748703724321",
    title: "Strawberry",
    price: "$179",
    rating: "4.8",
    offer: "15",
    total_no_user: "220"
  },
  {
    id: "3",
    image: "https://ik.imagekit.io/jap5d6wbb/image/mockup-graphics-haSJEJYzl5A-unsplash-removebg-preview.png?updatedAt=1748806611906",
    title: "Pear",
    price: "$79",
    rating: "4.7",
    offer: "10",
    total_no_user: "470"
  },
  {
    id: "4",
    image: "https://ik.imagekit.io/jap5d6wbb/image/mockup-graphics-XiWQbLEhFyo-unsplash-removebg-preview.png?updatedAt=1748806724931",
    title: "Pomegranate",
    price: "$159",
    rating: "4.6",
    offer: "18",
    total_no_user: "190"
  },
  {
    id: "5",
    image: "https://ik.imagekit.io/mani2/image/bon-vivant-Ooj1c6fhdFM-unsplash.jpg_updatedAt=1748277686246?updatedAt=1748758213923",
    title: "Papaya",
    price: "$49",
    rating: "4.8",
    offer: "25",
    total_no_user: "620"
  },
  {
    id: "6",
    image: "https://ik.imagekit.io/mani2/image/oriol-portell-AbwqpFnBDms-unsplash.jpg_updatedAt=1748277687968?updatedAt=1748703806335",
    title: "Muskmelon",
    price: "$69",
    rating: "4.7",
    offer: "12",
    total_no_user: "310"
  },
  {
    id: "7",
    image: "https://ik.imagekit.io/jap5d6wbb/image/john-vid-xPpq_ylNNMs-unsplash.jpg?updatedAt=1748279965198",
    title: "Hass avocado",
    price: "$139",
    rating: "4.5",
    offer: "22",
    total_no_user: "270"
  },
  {
    id: "8",
    image: "https://ik.imagekit.io/jap5d6wbb/image/mae-mu-U1iYwZ8Dx7k-unsplash.jpg?updatedAt=1748279989900",
    title: "Mandarin orange",
    price: "$129",
    rating: "4.4",
    offer: "20",
    total_no_user: "150"
  },
  {
    id: "9",
    image: "https://ik.imagekit.io/jap5d6wbb/image/green-apple-isolated-white-removebg-preview.png?updatedAt=1748807153700",
    title: "Green Apple",
    price: "$299",
    rating: "4.6",
    offer: "17",
    total_no_user: "180"
  }
];

const vegetableData = [
  {
    id: "v1",
    image: "https://ik.imagekit.io/mani2/image/honza-vojtek-A39EqNtDpZs-unsplash.jpg_updatedAt=1748277656230?updatedAt=1748713484255",
    title: "Bell pepper",
    price: "$29",
    rating: "4.7",
    offer: "15",
    total_no_user: "420"
  },
  {
    id: "v2",
    image: "https://ik.imagekit.io/jap5d6wbb/image/fresh-red-tomatoes121.png?updatedAt=1749059290648",
    title: "Organic Tomato",
    price: "$12",
    rating: "4.6",
    offer: "10",
    total_no_user: "380"
  },
  {
    id: "v3",
    image: "https://ik.imagekit.io/mani2/image/fresh-carrots-white-background.jpg?updatedAt=1748756538707",
    title: "Sweet Carrots",
    price: "$24",
    rating: "4.8",
    offer: "12",
    total_no_user: "290"
  },
  {
    id: "v4",
    image: "https://ik.imagekit.io/mani2/image/broccoli-with-white-background__1_-removebg-preview.png?updatedAt=1748806392244",
    title: "Fresh Broccoli",
    price: "$34",
    rating: "4.5",
    offer: "18",
    total_no_user: "210"
  },
  {
    id: "v5",
    image: "https://ik.imagekit.io/mani2/image/red-onion-whole-isolated-white__2_-removebg-preview.png?updatedAt=1748805993224",
    title: "Red Onions",
    price: "$22",
    rating: "4.4",
    offer: "8",
    total_no_user: "450"
  },
  {
    id: "v6",
    image: "https://ik.imagekit.io/mani2/image/chinese-broccoli-vegetablesw1111-removebg-preview.png?updatedAt=1748805913644",
    title: "Organic Spinach",
    price: "$27",
    rating: "4.9",
    offer: "20",
    total_no_user: "180"
  },
  {
    id: "v7",
    image: "https://ik.imagekit.io/mani2/image/organic-background-green-vegetarian-nutrition__1_-removebg-preview%20(3).png?updatedAt=1748806257237",
    title: "Green Cabbage",
    price: "$19",
    rating: "4.3",
    offer: "15",
    total_no_user: "320"
  },
  {
    id: "v8",
    image: "https://ik.imagekit.io/mani2/image/cauliflower-wooden-floor.jpg?updatedAt=1748757690605",
    title: "Fresh Cauliflower",
    price: "$32",
    rating: "4.6",
    offer: "16",
    total_no_user: "250"
  },
  {
    id: "v9",
    image: "https://ik.imagekit.io/mani2/image/top-view-fresh-green-beans-table.jpg?updatedAt=1748758097593",
    title: "Green Beans",
    price: "$26",
    rating: "4.7",
    offer: "14",
    total_no_user: "280"
  }
];

const groceryData = [
  {
    id: "g1",
    image: "https://ik.imagekit.io/mani2/image/juicy-dates-wooden-plate-wooden-table-high-quality-photo.jpg?updatedAt=1748756658770",
    title: "Date palme",
    price: "$35",
    rating: "4.8",
    offer: "12",
    total_no_user: "520"
  },
  {
    id: "g2",
    image: "https://ik.imagekit.io/mani2/image/top-close-up-view-grapes-bowl-bunches-black-raisins-cream-table.jpg?updatedAt=1748715958317",
    title: "Dry Grape",
    price: "$32",
    rating: "4.6",
    offer: "10",
    total_no_user: "480"
  },
  {
    id: "g3",
    image: "https://ik.imagekit.io/mani2/image/healthy-closeup-delicious-white-sweet.jpg?updatedAt=1748799885923",
    title: "Honey Jar",
    price: "$58",
    rating: "4.5",
    offer: "8",
    total_no_user: "650"
  },
  {
    id: "g4",
    image: "https://ik.imagekit.io/mani2/image/raw-cashews-nuts-bowl-dark-background.jpg?updhttps://ik.imagekit.io/mani2/image/raw-cashews-nuts-bowl-dark-background.jpg?updatedAt=1748756557839atedAt=1748715323699",
    title: "Cashew Nut",
    price: "$15",
    rating: "4.4",
    offer: "5",
    total_no_user: "720"
  },
  {
    id: "g5",
    image: "https://ik.imagekit.io/mani2/image/milled-rice-bowl-wooden-spoon-black-cement-floor.jpg?updatedAt=1748716223455",
    title: "Raw Rice",
    price: "$42",
    rating: "4.7",
    offer: "15",
    total_no_user: "380"
  },
  {
    id: "g6",
    image: "https://ik.imagekit.io/mani2/image/almond.jpg?updatedAt=1748756546661",
    title: "Almond",
    price: "$38",
    rating: "4.6",
    offer: "12",
    total_no_user: "290"
  },

];



const ProductCard = ({ image, title, price, rating, offer, total_no_user }) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="h-56 w-full">
        <a href="#">
          <img className="mx-auto h-full dark:hidden" src={image} alt={title} />
          <img className="mx-auto hidden h-full dark:block" src={image} alt="dark-mode" />
        </a>
      </div>
      <div className="pt-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-primary-900 dark:text-primary-300">
            Offer up to {offer}%
          </span>
        </div>
        <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">
          {title}
        </a>
        <div className="mt-2 flex items-center gap-2">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className="h-4 w-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
            </svg>
          ))}
          <p className="text-sm font-medium text-gray-900 dark:text-white">{rating}</p>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">({total_no_user})</p>
        </div>
        <ul className="mt-2 flex items-center gap-4">
          <li className="flex items-center gap-2">
            🚚 <span className="text-sm font-medium text-green-500 dark:text-gray-400">Shipping Within 4 Hours </span>
          </li>

        </ul>
        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">{price}</p>
          <button
            type="button"
            className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
          >
            🛒 Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

const ShimmerCard = () => {
  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 animate-pulse">
      <div className="h-56 w-full bg-gray-300 dark:bg-gray-600 rounded-lg mb-4"></div>
      <div className="pt-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div className="h-6 w-24 bg-gray-300 dark:bg-gray-600 rounded"></div>
        </div>
        <div className="h-6 w-32 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
        <div className="mt-2 flex items-center gap-2">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="h-4 w-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
          ))}
          <div className="h-4 w-8 bg-gray-300 dark:bg-gray-600 rounded"></div>
          <div className="h-4 w-12 bg-gray-300 dark:bg-gray-600 rounded"></div>
        </div>
        <ul className="mt-2 flex items-center gap-4">
          <li className="flex items-center gap-2">
            <div className="h-4 w-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="h-4 w-32 bg-gray-300 dark:bg-gray-600 rounded"></div>
          </li>
        </ul>
        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="h-8 w-16 bg-gray-300 dark:bg-gray-600 rounded"></div>
          <div className="h-10 w-24 bg-gray-300 dark:bg-gray-600 rounded"></div>
        </div>
      </div>
    </div>
  );
};

const ShimmerLayout = () => {
  return (
    <div className="2xl:container mx-auto">
      <div className="w-[90%] mx-auto flex justify-center mt-14 gap-4">
        {[1, 2, 3].map((item) => (
          <div key={item} className="h-12 w-32 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse"></div>
        ))}
      </div>
      
      <div className="w-[90%] mx-auto mt-12 text-center">
        <div className="h-12 w-96 bg-gray-300 dark:bg-gray-600 rounded mx-auto mb-4 animate-pulse"></div>
        <div className="h-6 w-80 bg-gray-300 dark:bg-gray-600 rounded mx-auto animate-pulse"></div>
      </div>

      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-12 mb-16">
        {[...Array(9)].map((_, index) => (
          <ShimmerCard key={index} />
        ))}
      </div>
    </div>
  );
};

const ProductLayout = () => {

  const [actCategory, setActCategory] = useState("fruits")
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(10);

  useEffect(()=>{
    console.log(count)
    setCount(count+1)
  },[])

     const CategoryButton  = [
        { id: "fruits", label: "🍓 Fruits" },
        { id: "vegetable", label: "🥬 Vegetable" },
        { id: "groceries", label: "🛒 Groceries" }
      ];

 useEffect(() => {
    // Simulate data fetching delay
    setTimeout(() => {
      setIsLoading(false);
    }, 500); // Optional loading delay
  }, []);

  if (isLoading) {
    return <ShimmerLayout />
  } else {
    
  return (
    <div className="2xl:container mx-auto">
      <div className="w-[90%] mx-auto  flex justify-center mt-14 gap-4">
        {CategoryButton.map((category) => (
          <button key={category.id}
            onClick={() => setActCategory(category.id)} className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${actCategory === category.id ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            {category.label}

          </button>

        ))}

      </div>

      {/* Fruits Section */}
      {actCategory === 'fruits' && (
        <>  <div className="w-[90%] mx-auto mt-12 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-black mb-4">
            Fresh Fruits Just For You 🍓🍍🍎
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-600">
            Discover our wide selection of handpicked, sweet delicious fruits!
          </p>
        </div>

          <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-12 mb-16">
            {productData.map((item) => (
              <ProductCard
                key={uuidv4()}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
                offer={item.offer}
                total_no_user={item.total_no_user}
              /> 
            ))}
          </div></>


      )}
 

      {/* Vegetables Section */}
      {actCategory === 'vegetable' && (
        <>
          <div className="w-[90%] mx-auto mt-12 text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-black mb-4">
              Fresh Vegetables 🥬🥕🥦
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-600">
              Farm-fresh vegetables delivered to your doorstep!
            </p>
          </div>

          <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-12 mb-16">
            {vegetableData.map((item) => (
              <ProductCard
                key={uuidv4()}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
                offer={item.offer}
                total_no_user={item.total_no_user}
              />
            ))}
          </div>
        </>
      )}


      {/* Groceries Section */}
      {actCategory === 'groceries' && (
        <>
          <div className="w-[90%] mx-auto mt-12 text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-black mb-4">
              Essential Groceries 🍚🫖☕
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-600">
              All your daily grocery needs in one place!
            </p>
          </div>

          <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-12 mb-16">
            {groceryData.map((item) => (
              <ProductCard
                key={uuidv4()}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
                offer={item.offer}
                total_no_user={item.total_no_user}
              />
            ))}
          </div>
        </>
      )}

    </div>
  );

  }


};

export default ProductLayout;
