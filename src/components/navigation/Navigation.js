// Nav

import { Fragment ,useContext} from "react";
import { UserContext } from "../../context/context";
import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as CrownLogo } from "./crown.svg";
import { signOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { CartContext } from "../../context/cart-context/cart.context";
const Navigation = () => {
    const {isCartOpen} = useContext(CartContext)

    const {currentUser}  = useContext(UserContext);
    const {setCurrentUser} = useContext(UserContext);

    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null)
    }
    
    return (
        <Fragment>
            <div className="navigation">
                <Link to="/">
                <div className="logo-container"><CrownLogo /></div>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">SHOP</Link>
                    {currentUser? (<div onClick={signOutHandler}>SIGN OUT</div>):(<Link className="nav-link" to="/account">SIGNIN</Link>)}
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
    </Fragment>
    );
}

export default Navigation;
