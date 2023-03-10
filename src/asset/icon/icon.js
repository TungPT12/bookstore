import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
} from '@fortawesome/free-solid-svg-icons';
import './icon.css'

const BasketShoppingIcon = () => {
    return (
        <FontAwesomeIcon className="max-size" icon={faShoppingBasket} />
    )
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
}
