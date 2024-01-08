import { Link } from "react-router-dom";
import './header.css'
import logo from '../../asset/image/logo.png'
import { SearchIcon } from "../../asset/icon/icon";
function Header() {
  return (
    <div className="header-wrap flex-row">
      <header className="header">
        <div className="primary-wrap flex-row">
          <div className="brand-wrap">
            <Link to="/" className="brand-link">
              <img className="logo" src={logo} alt="Bookdepository.com" />
            </Link>
          </div>
          <div className="search-wrap flex-row">
            <form id="book-search-form">
              <div className="el-wrap header-search-el-wrap flex-row">
                <div className="search-wrap-icon flex-row center-row center-column">
                  <i className="search-icon"><SearchIcon/></i>
                </div>
                <input
                  type="text"
                  placeholder="Search for books by keyword / title / author / ISBN"
                  className="text-input"
                />
                <button
                  aria-label="Search"
                  className="header-search-btn"
                  type="submit"
                >
                  Search
                </button>
              </div>
              <div className="result-wrap no-result">
                <div className="suggest-result"></div>
                <div className="book-result"></div>
              </div>
            </form>
            <Link className="advanced-search">
              Advanced Search
            </Link>
            <div className="bg-screen"></div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
