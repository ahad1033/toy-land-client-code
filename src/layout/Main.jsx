import { Outlet } from 'react-router-dom';
import NavBar from '../pages/shared/NavBar/NavBar';
import Footer from '../pages/shared/footer/Footer';

const Main = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;