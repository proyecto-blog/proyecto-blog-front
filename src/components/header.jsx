import logo from 'media/logo.png';

const Header = ({nombreBoton, enlace, enlaceAdmin, nombreAdmin}) => {
  return (
    <header>
      <ul className='navbar'>
        <li>
          <img src={logo} alt='imagen' className='logo' />
          <a className='text-white' href={enlaceAdmin}>{nombreAdmin}</a>
        </li>
        <li>
          <button className='botonGenerico mainButton'>
            <a href={enlace}>{nombreBoton}</a>
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;