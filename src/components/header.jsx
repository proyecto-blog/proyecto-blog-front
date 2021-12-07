import logo from 'media/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <ul className='navbar'>
        <li>
          <img src={logo} alt='imagen' className='logo' />
        </li>
        <li>
          <button className='botonGenerico mainButton'>
            <Link to='/login'>Ingresar</Link>   
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;