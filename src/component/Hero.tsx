import React from 'react';
import Banner from '../assets/bg-shadow.png';
import logo from '../assets/banner-main.png'




const Hero = () => {
    return (
         <div className=" rounded-2xl flex items-center justify-center container mx-auto ">
             <div className="  rounded-2xl flex flex-col items-center justify-center gap-5 bg-cover bg-no-repeat bg-black bg-center h-[500px] w-full text-white"  style={{ backgroundImage: `url(${Banner})` }}>
              <img src={logo} alt="Logo" />
              <h2 className="text-3xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h2>
              <p>Beyond Boundaries Beyond Limits</p>
              <button className="btn btn-warning">Claim Free Credit</button>       
              </div>
        </div>
       
    );
};

export default Hero;