import '../../style/general.css'
import './account.css';
import { Link } from 'react-router-dom';
import {
  ExchangeIcon,
  AccountUserIcon,
  ManageOrderIcon,
  LocationIcon,
  CartShoppingLaterIcon,
  HalfStarIcon
} from '../../asset/icon/icon'
function AccountPage({ children }) {
  return (
    <div className="max-width flex-row center-column">
      <div className="wrapper">
        <div className="wrapper-account_page flex-row">
          <div className="sidebar_account">
            <div className="account_page-avatar flex-row">
              <img
                src="https://graph.facebook.com/819058775119068/picture?type=large&amp;return_ssl_resources=1"
                alt="avatar"
              />
              <div className="info flex-column">
                Tài khoản của
                <strong>Thanh Tùng</strong>
              </div>
            </div>
            <ul className="account_list-behavior flex-column">
              <li className="">
                <Link to='/account/edit' className="is-active" >
                  <i><AccountUserIcon /></i>
                  <span>Thông tin tài khoản</span>
                </Link>
              </li>
              <li className="">
                <Link  to='/account/edit' className="">
                  <i><ManageOrderIcon/></i>
                  <span>Quản lý đơn hàng</span>
                </Link>
              </li>
              <li className="">
                <Link  to='/account/edit' className="">
                  <i><ExchangeIcon /></i>
                  <span>Quản lý đổi trả</span>
                </Link>
              </li>
              <li className="">
                <Link className="" href="/customer/address">
                  <i><LocationIcon /></i>
                  <span>Sổ địa chỉ</span>
                </Link>
              </li>
              <li className="">
                <Link href="/customer/save_for_later" className="">
                  <i><CartShoppingLaterIcon /></i>
                  <span>Sản phẩm mua sau</span>
                </Link>
              </li>
              <li className="">
                <Link className="" href="/customer/review">
                  <i><HalfStarIcon /></i>
                  <span>Nhận xét của tôi</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="wrapper-content_account">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountPage
