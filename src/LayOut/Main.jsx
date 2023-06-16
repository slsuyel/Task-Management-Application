import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Footer/Footer";


const Main = () => {
    return (
        <div>
            <div className="bg-info-subtle"><Header /></div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;