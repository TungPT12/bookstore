import "./usernav.css";
import "../../style/general.css";
import {
  ContactIcon,
  HouseIcon,
  InfoIcon,
  CompassIcon,
  HeartIcon,
  UserIcon,
} from "../../asset/icon/icon";
import { Link } from "react-router-dom";
function UserNavigation() {

  return (
    <div className="user-nav-wrap">
      <div className="user-nav flex-row space-between-element max-height">
        <ul className="flex-row max-height center-row user-nav__page ">
          <li className="user-nav__home">
            <Link to="/" className="home-page__icon">
              <HouseIcon />
            </Link>
          </li>
          <li className="user-nav__contact center-row flex-row">
            <Link className="user-nav_contact_icon flex-row " href="/contactus">
              <i className="contact-icon">
                <ContactIcon />
              </i>
              Contact us
            </Link>
          </li>
          <li className="user-nav_help flex-row center-row">
            <Link className="user-nav_help_icon flex-row ">
              <i className="icon-info">
                <InfoIcon />
              </i>
              Help
            </Link>
          </li>
        </ul>
        <ul className="flex-row">
          <li className="user-nav_orderstatus flex-row center-row">
            <Link className="user-nav_orderstatus_icon flex-row">
              <i className="icon-order-status">
                <CompassIcon />
              </i>
              Order Status
            </Link>
          </li>
          <li className="user-nav_wishlist flex-row center-row">
            <Link className="user-nav_wishlist_icon flex-row">
              <i className="icon-wishlist">
                <HeartIcon />
              </i>
              Wishlist
            </Link>
          </li>
          <li className="user-nav_user flex-row center-row">
            {/* <Link className="user-nav_user_icon flex-row">
              <i className="icon-user">
                <UserIcon />
              </i>
              Sign in/Join
            </Link> */}
            <Link to="/account/edit" className="user-nav_user_login flex-row center-row">
              <i className="avatar-header">
                <img src="https://salt.tikicdn.com/cache/750x750/ts/product/07/eb/f7/3981688dabb62f9c71b4daccc85fa1af.jpg" alt="" />
              </i>
              <p style={{ marginLeft: 7 + 'px' }}>Tài khoản</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserNavigation;
