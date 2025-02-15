import Logo from './Logo';
import Navigation from './Navigation';

function Header() {
  return (
    // <div className="md:relative md:rounded-none md:justify-between md:items-center md:bg-white md:flex px-4 py-2 fixed top-0 z-50 flex mx-4 my-2 bg-color-very-light-gray right-0 left-0 rounded-15 ">
    <div className=" md:justify-between md:items-center  md:flex px-4 py-2 fixed top-0 z-50 flex mx-4 my-2 bg-color-very-light-gray right-0 left-0 rounded-15 ">
      <Logo />
      <Navigation />
    </div>
  );
}

export default Header;
