import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; //  For routing (simulated)
import '../styles/CategoryPage.css'; // Reuse existing styles or create a new one

import cpuImage from '../assets/cpu.jpg';
import gpuImage from '../assets/gpu.jpg';
import motherboardImage from '../assets/motherboard.jpg';
import ramImage from '../assets/ram.jpg';
import storageImage from '../assets/storage.jpg';
import powerSupplyImage from '../assets/powersupply.jpg';
import caseImage from '../assets/case.jpg';
import coolingImage from '../assets/cpucooler.jpg';
import keyboardImage from '../assets/keyboard.jpg';
import mouseImage from '../assets/mouse.jpg';
import gamepadImage from '../assets/gamepad.jpg';
import mousepadImage from '../assets/mousepad.jpg';
import micImage from '../assets/mic.jpg';
import headphoneImage from '../assets/headphone.jpg';
import monitorImage from '../assets/monitor.jpg';

const CategoryMenuPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate fetching categories from a backend API
    const fetchCategories = async () => {
      setLoading(true);
      setError(null);
      try {
        // Replace this with your actual API call
        const mockCategories = await new Promise((resolve) => {
          setTimeout(() => {
            //  Define your categories here.  This is the data you'll fetch
            const categoryData = [
                { id: '1', name: 'CPU', image: cpuImage },
                { id: '2', name: 'GPU', image: gpuImage },
                { id: '3', name: 'Motherboard', image: motherboardImage },
                { id: '4', name: 'RAM', image: ramImage },
                { id: '5', name: 'Storage', image: storageImage },
                { id: '6', name: 'PowerSupply', image: powerSupplyImage },
                { id: '7', name: 'Case', image: caseImage },
                { id: '8', name: 'Cooling', image: coolingImage },
                { id: '9', name: 'Keyboard', image: keyboardImage },
                { id: '10', name: 'Mouse', image: mouseImage },
                { id: '11', name: 'Gamepad', image: gamepadImage },
                { id: '12', name: 'Mousepad', image: mousepadImage },
                { id: '13', name: 'Mic', image: micImage },
                { id: '14', name: 'Headphone', image: headphoneImage },
                { id: '15', name: 'Monitors', image: monitorImage },
              ];
            resolve(categoryData);
          }, 1000); // Simulate 1-second delay
        });

        if (!mockCategories) { // added a check.
          setError("Failed to load categories");
          return;
        }
        setCategories(mockCategories);
      } catch (err) {
        setError(err.message || 'Failed to fetch categories.');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <div className="category-page">Loading categories...</div>; //  consistent class name
  }

  if (error) {
    return <div className="category-page error">{error}</div>; // consistent class name
  }

  return (
    <div className="category-page">
      <h1>Browse Categories</h1>
      <div className="category-grid">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
             {/* Use Link for navigation */}
            <Link to={`/category/${category.name}`}>
              <img src={category.image} alt={category.name} />
              <h3>{category.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenuPage;
