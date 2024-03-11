'use client';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../feature/cartSlice';
import { useState } from 'react';
import FilterSidebar from '../../../components/FilterSideBar/FilterSideBar';

const products = [
  { id: 1, image:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80', name: 'Baked Sweet Potatoes with creamy avacado & pumpkin 1', category: 'Category A', season: 'Spring', dietaryPreference: 'Vegetarian', meal: 'Breakfast' },
  { id: 2, image:'https://images.unsplash.com/photo-1679744034792-705da160c109?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80', name: 'Baked Sweet Potatoes with creamy avacado & pumpkin 2', category: 'Category B', season: 'Summer', dietaryPreference: 'Vegan', meal: 'Lunch' },
  { id: 3, image:'https://www.statnews.com/wp-content/uploads/2023/04/AdobeStock_439373375-645x645.jpeg', name: 'Baked Sweet Potatoes with creamy avacado & pumpkin 3', category: 'Category A', season: 'Autumn', dietaryPreference: 'Gluten-free', meal: 'Dinner' },
  { id: 4, image:'https://img.rawpixel.com/private/static/images/website/2022-05/pf-s87-mn-11-02.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=7fc640471bc6ac7bf066022d7096b95b', name: 'Baked Sweet Potatoes with creamy avacado & pumpkin 4', category: 'Category C', season: 'Winter', dietaryPreference: 'Paleo', meal: 'Snack' },
];

export default function ProductsPage() {
  const [filteredSeasons, setFilteredSeasons] = useState([]);
  const [filteredDietaryPreferences, setFilteredDietaryPreferences] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const handleFilterChange = ({ seasons, dietaryPreferences, meals }) => {
    setFilteredSeasons(seasons);
    setFilteredDietaryPreferences(dietaryPreferences);
    setFilteredMeals(meals);
  };

  const addToCart = (productId) => {
    const productToAdd = products.find((product) => product.id === productId);
    setCartItems((prevCartItems) => [...prevCartItems, productToAdd]);
  };

  // const dispatch = useDispatch();

  // const handleAddToCart = (product) => {
  //   // dispatch(addToCart(product));
  // };


  <div className="cart">
    <h2>Cart</h2>
    {cartItems.length > 0 ? (
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    ) : (
      <p>Your cart is empty.</p>
    )}
  </div>

  const filteredProducts = products.filter((product) => {
    if (filteredSeasons.length > 0 && !filteredSeasons.includes(product.season)) {
      return false;
    }
    if (filteredDietaryPreferences.length > 0 && !filteredDietaryPreferences.includes(product.dietaryPreference)) {
      return false;
    }
    if (filteredMeals.length > 0 && !filteredMeals.includes(product.meal)) {
      return false;
    }
    return true;
  });

  return (
    <div>
      <h1>Easy Meals</h1>
      <div className="container">
        <FilterSidebar
          seasons={['Spring', 'Summer', 'Autumn', 'Winter']}
          dietaryPreferences={['Vegetarian', 'Vegan', 'Gluten-free', 'Paleo']}
          meals={['Breakfast', 'Lunch', 'Dinner', 'Snack']}
          onFilterChange={handleFilterChange}
        />
        <div className="product-list">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Season: {product.season}</p>
              <p>Dietary Preference: {product.dietaryPreference}</p>
              <p>Meal: {product.meal}</p>
              <button onClick={() => addToCart(product.id)}>Add to Cart</button>
              {/* <button onClick={() => handleAddToCart(product)}>Add to Cart</button> */}
            </div>
          ))}
        </div>
      </div>
      <div className="cart">
        <h2>Cart</h2>
        {cartItems.length > 0 ? (
          <div className="product-list">
            {cartItems.map((item) => (
              <div key={item.id} className="product-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Category: {item.category}</p>
              <p>Season: {item.season}</p>
              <p>Dietary Preference: {item.dietaryPreference}</p>
              <p>Meal: {item.meal}</p>
            </div>
            ))}
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <style jsx>{`
        .container {
          padding: 20px;
          display: grid;
          grid-template-columns: 1fr 5fr;
          grid-gap: 20px;
          grid-auto-rows: minmax(100px, auto);
        }

        .product-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          grid-gap: 20px;
          align-items: stretch;
        }

        img{
          max-width: 100%;
        }

        .cart {
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
}
