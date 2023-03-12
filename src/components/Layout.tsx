import { Link, Outlet } from "react-router-dom";
import logo from "../images/dog-api-logo.svg";
import facebook from "../images/facebook.png";
import youtube from "../images/images.jpg";
import twitter from "../images/T.png";
import menuimg from "../images/icono-menu.png";

function Layout() {
  return (
    <header>
      <input type="checkbox" id="dws-menu" />
      <div className="leb-menu">
        <label htmlFor="dws-menu">
          <img src={menuimg} />
        </label>
      </div>

      <nav className="menu">
        <div className="section_logo">
          <div className="logo">
            <img src={logo} />
          </div>
        </div>

        <div className="section_main_menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/breeds">Breeds</Link>
            </li>
            <li>
              <Link to="https://dog.ceo/" target="_blank">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        <div className="section_social_networks">
          <button>
            <Link
              to="https://www.facebook.com/groups/2219116881633009"
              target="_blank"
            >
              <img src={facebook} alt="Facebook" />
            </Link>
          </button>
          <button>
            <Link
              to="https://www.youtube.com/results?search_query=dogs"
              target="_blank"
            >
              <img src={youtube} alt="Twitter" />
            </Link>
          </button>
          <button>
            <Link
              to="https://twitter.com/We_Like_D0gs/status/1633225088668401666/photo/1"
              target="_blank"
            >
              <img src={twitter} alt="Twitter" />
            </Link>
          </button>
        </div>
      </nav>
      <Outlet />
    </header>
  );
}

export default Layout;
