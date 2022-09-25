import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar " role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          Home
        </Link>
        <Link className="navbar-item" to="/projects">
          Projects
        </Link>
      </div>
    </nav>
  );
}
export default NavBar;
