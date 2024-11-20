import useOnlineOfflineStatus from "../customHooks/useOnlineOfflineStatus";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const online = useOnlineOfflineStatus();
  return (
    <div className="header flex justify-between items-center bg-orange-100 p-4 mb-5">
      <div className="logo-container w-10 ml-10">
        <img src={LOGO_URL} alt="Swiggy Logo" className="logo" />
      </div>
      <div className="nav-items ">
        {online ? (
          <ul className="flex gap-5">
            <li>
              <li>Online Status: 🟢 </li>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            {/* <li>
              <Link to="/form">form</Link>
            </li> */}
          </ul>
        ) : (
          <ul>
            <li>Online Status: 🔴</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
