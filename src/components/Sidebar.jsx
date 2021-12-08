import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import ImagenLogo from './ImagenLogo';

const SidebarLinks = () => {
    return (
      <ul className='mt-12'>
        <SidebarRoute to='/index' title='Inicio' icon='fas fa-home' />
        <SidebarRoute to='/usuarios' title='Usuarios' icon='fas fa-users' />
        <SidebarRoute to='/lista-blogs' title='Blogs' icon='fas fa-tasks' />        
        <SidebarRoute to='/' title='Cerrar Sesión' icon='fas fa-sign-out-alt' />
      </ul>
    );
  };
  
  /*const Logo = () => {
    return (
      <div className='py-3 w-full flex flex-col items-center justify-center'>
        <img src='logo-udea.png' alt='Logo' className='h-16' />
        <span className='my-2 text-xl font-bold text-center'>Título de Mi Aplicación</span>
      </div>
    );
  };*/
  
  const Sidebar = () => {
    const [open, setOpen] = useState(true);
    return (
      <div className='flex flex-col md:flex-row flex-no-wrap md:h-full'>        
    
        <div className='sidebar hidden md:flex'>
          <div className='px-8'>
            <ImagenLogo />
            <SidebarLinks />
          </div>
        </div>
        <div className='flex md:hidden w-full justify-between bg-gray-800 p-2 text-white'>
          <i className={`fas fa-${open ? 'times' : 'bars'}`} onClick={() => setOpen(!open)} />
          <i className='fas fa-home' />
        </div>
        {open && <ResponsiveSidebar />}
        
      </div>
    );
  };
  
  const ResponsiveSidebar = () => {
    return (
      <div>
        <div
          className='sidebar h-full z-40 absolute md:h-full sm:hidden transition duration-150 ease-in-out'
          id='mobile-nav'
        >
          <div className='px-8'>
            <ImagenLogo />
            <SidebarLinks />
          </div>
        </div>
      </div>
    );
  };
  
  const SidebarRoute = ({ to, title, icon }) => {
    return (
      <li>
        <NavLink
          to={to}
          className={({ isActive }) =>
            isActive
              ? 'sidebar-route text-white bg-gray-700'
              : 'sidebar-route text-gray-900 hover:text-white hover:bg-gray-400'
          }
        >
          <div className='flex items-center'>
            <i className={icon} />
            <span className='text-sm  ml-2'>{title}</span>
          </div>
        </NavLink>
      </li>
    );
  };
  
  export default Sidebar;
