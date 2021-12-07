import React from 'react';
import { Link } from 'react-router-dom';
import Logo from 'media/logo-programming.png';

const Index = () => {
  return (
    <div>
      <header className='bg-gray-700 h-10'>
      <img className='px-5 py-10' src={Logo} alt=""  />
      </header>

      <body className='h-96'>
        <button
          type='submit'
          className='group relative w-30 my-10 mx-10 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
        >                   
        <Link to='/login'>Ingresar</Link>    
                    
        </button>
       </body>    
    </div>
  );
};

export default Index;


