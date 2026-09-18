import React from 'react';
import logo from '../assets/logo.png';

const Nav = () => {
  return (
 
    <nav className="mb-5">     
      <div className=" flex items-center flex-row justify-between container mx-auto ">
         <img src={logo} alt="Logo" />

        <div className="flex items-center">
          <ul className="flex items-center gap-4 mx-5">
            <li>Home</li>
           <li>Fixtures</li>
           <li>Teams</li>
           <li>Schedule</li>
          </ul>

         <p className='mx-2 border-2 border-gray-500 px-5 py-1 rounded-md'>0 Coin</p>
       </div>
      </div>
    </nav>
  );
};

export default Nav;