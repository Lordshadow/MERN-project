import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PeripheralsPage.css'; // Assuming you want to use the same styles

const PrebuiltPCPage = () => {
  const prebuiltPCData = [
    {
      name: 'Gaming Beast Xtreme',
      image: '/images/prebuilt-pc/gaming-beast-xtreme.jpg', // Replace with your image path
      slug: 'gaming-beast-xtreme',
      id: 'gaming-beast-xtreme',
    },
    {
      name: 'Creator Pro Workstation',
      image: '/images/prebuilt-pc/creator-pro-workstation.jpg', // Replace with your image path
      slug: 'creator-pro-workstation',
      id: 'creator-pro-workstation',
    },
    {
      name: 'Budget Gamer Lite',
      image: '/images/prebuilt-pc/budget-gamer-lite.jpg', // Replace with your image path
      slug: 'budget-gamer-lite',
      id: 'budget-gamer-lite',
    },
    {
      name: 'Streaming Master Rig',
      image: '/images/prebuilt-pc/streaming-master-rig.jpg', // Replace with your image path
      slug: 'streaming-master-rig',
      id: 'streaming-master-rig',
    },
    {
      name: 'Office Productivity PC',
      image: '/images/prebuilt-pc/office-productivity-pc.jpg', // Replace with your image path
      slug: 'office-productivity-pc',
      id: 'office-productivity-pc',
    },
  ];

  return (
    <div className="prebuilt-pc-page">
      <h2>Browse Prebuilt PCs</h2>
      <div className="prebuilt-pc-grid">
        {prebuiltPCData.map((pc) => (
          <Link to={`/product/${pc.id}`} key={pc.id} className="prebuilt-pc-card">
            <img src={pc.image} alt={pc.name} />
            <h3>{pc.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PrebuiltPCPage;