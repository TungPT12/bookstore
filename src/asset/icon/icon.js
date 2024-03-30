import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouse,
  faEnvelope,
  faInfoCircle,
  faCompass,
  faHeart,
  faUserCircle,
  faMagnifyingGlass,
  faShoppingBasket,
  faAngleDown,
  faAngleUp,
  faExclamationCircle,
  faF,
  faAngleLeft,
  faAngleRight,
  faStar,
  faStarHalf,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons'
import './icon.css'

const BasketShoppingIcon = () => {
  return <FontAwesomeIcon className="max-size" icon={faShoppingBasket} />
}
const HouseIcon = () => {
  return <FontAwesomeIcon className="max-size" icon={faHouse} />
}

const ContactIcon = () => {
  return <FontAwesomeIcon className="max-size" icon={faEnvelope} />
}

const InfoIcon = () => {
  return <FontAwesomeIcon className="max-size" icon={faInfoCircle} />
}

const CompassIcon = () => {
  return <FontAwesomeIcon className="max-size" icon={faCompass} />
}

const HeartIcon = () => {
  return <FontAwesomeIcon className="max-size" icon={faHeart} />
}

const UserIcon = () => {
  return <FontAwesomeIcon className="max-size" icon={faUserCircle} />
}

const SearchIcon = () => {
  return <FontAwesomeIcon className="max-size" icon={faMagnifyingGlass} />
}

const AngleDownIcon = () => {
  return <FontAwesomeIcon className="max-size" icon={faAngleDown} />
}

const AngleUpIcon = () => {
  return <FontAwesomeIcon className="max-size" icon={faAngleUp} />
}
const AngleLeftIcon = () => {
  return <FontAwesomeIcon className="max-size" icon={faAngleLeft} />
}
const AngleRightIcon = () => {
  return <FontAwesomeIcon className="max-size" icon={faAngleRight} />
}

const ExclamationCircleIcon = () => {
  return <FontAwesomeIcon className="max-size" icon={faExclamationCircle} />
}

const FacebookIcon = () => {
  return <FontAwesomeIcon className="max-size" icon={faF} />
}

const StarIcon = () => {
  return <FontAwesomeIcon className="max-size" icon={faStar} />
}

const StarHalfIcon = () => {
  return <FontAwesomeIcon className="max-size" icon={faStarHalf} />
}

const CartShopping = () => {
  return <FontAwesomeIcon className="max-size" icon={faCartShopping} />
}

const MessagesIcon = ({ height = '3.1rem', width = '3.1rem', className }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      data-e2e=""
      viewBox="0 0 48 48"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.17877 7.17357C2.50304 6.45894 3.21528 6 4.00003 6H44C44.713 6 45.372 6.37952 45.7299 6.99615C46.0877 7.61278 46.0902 8.37327 45.7365 8.99228L25.7365 43.9923C25.3423 44.6821 24.5772 45.0732 23.7872 44.9886C22.9972 44.9041 22.3321 44.3599 22.0929 43.6023L16.219 25.0017L2.49488 9.31701C1.97811 8.72642 1.85449 7.88819 2.17877 7.17357ZM20.377 24.8856L24.531 38.0397L40.5537 10H8.40757L18.3918 21.4106L30.1002 14.2054C30.5705 13.9159 31.1865 14.0626 31.4759 14.533L32.5241 16.2363C32.8136 16.7066 32.6669 17.3226 32.1966 17.612L20.377 24.8856Z"
      ></path>
    </svg>
  )
}

const ExchangeIcon = () => {
  return (
    <img
      className="icon"
      src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/order_return.svg"
      alt="icon"
    />
  )
}

const AccountUserIcon = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
    </svg>
  )
}

const ManageOrderIcon = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"></path>
    </svg>
  )
}

const LocationIcon = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
    </svg>
  )
}

const HalfStarIcon = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
    </svg>
  )
}

const CartShoppingLaterIcon = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
    </svg>
  )
}

export {
  BasketShoppingIcon,
  HouseIcon,
  ContactIcon,
  MessagesIcon,
  InfoIcon,
  CompassIcon,
  HeartIcon,
  UserIcon,
  SearchIcon,
  AngleDownIcon,
  AngleUpIcon,
  ExclamationCircleIcon,
  FacebookIcon,
  AngleLeftIcon,
  AngleRightIcon,
  StarIcon,
  StarHalfIcon,
  CartShopping,
  ExchangeIcon,
  AccountUserIcon,
  ManageOrderIcon,
  LocationIcon,
  CartShoppingLaterIcon,
  HalfStarIcon,
}
