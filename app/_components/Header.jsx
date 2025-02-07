import Logo from './Logo';
import Navigation from './Navigation';

function Header() {
  return (
    <div className="flex mx-4 my-2">
      <Logo />
      <Navigation />
    </div>
  );
}

export default Header;
