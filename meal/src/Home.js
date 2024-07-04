import React from 'react';
import './App.css'; 
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();  // Call the useNavigate hook properly
  
  return (
    <div className='container home'>
      <div className='row align-items-center'>
        <div className='col-md-6'>
          <h1 className='logoheading'>Meal Mates</h1>
          <div className='paragraph'>
           <h2> We recover the surplus inventory from warehouses of food companies and deliver it safely to Not-for-Profit institutional feeding programs at schools for underprivileged children, orphanages, old aged homes, homeless shelters, charitable hospitals and to vulnerable communities to feed those in need....</h2>
          </div>
        </div>
        <div className='col-md-6 text-center'>
          <img src='/Logo.jpg' alt='Meal Mates Logo' className='img-fluid'/> <br/>
          <div className='buttoncss'>
          <button className='donate' onClick={() => navigate("/Donor")}>Donate</button>
          <button className='donate' onClick={() => navigate("/Cart")}>Collect</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;