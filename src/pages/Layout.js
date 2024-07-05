import { Link, Outlet } from "react-router-dom";
import "./Layout.css"
import { useNavigate } from 'react-router-dom';
const Layout = () => {
    const navigate = useNavigate();
    const isAdmin = localStorage.getItem("isAdmin")
    console.log("value of isAdmin is", isAdmin)
    if (isAdmin) {
        return (
            <>
                <div id="topmenu">
                    <ul>

                        <li><Link to="home">Home</Link></li>
                        <li><Link to="add-product">AddProductForm</Link></li>
                        <li><Link to="product-detai">ProductList</Link></li>
                        <li><Link to="search">SearchBar</Link></li>
                    </ul>
                </div>
                <div id="middleData">
                    <Outlet />
                </div>

                <div id="footer">

                    wwww.studentmanagment.com all right resrvert !!!. 2023
                </div>

            </>
        );
    }
    else {
        navigate('/login');
    }
}

export default Layout;