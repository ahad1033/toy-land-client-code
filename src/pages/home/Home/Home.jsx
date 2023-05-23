import AboutUs from "../../aboutUs/AboutUs";
import AllToys from "../../allToys/AllToys";
import Gallary from "../../gallary/Gallary";
import NewsLetter from "../../newsletter/NewsLetter";
import Banner from "../banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner />
            <Gallary />
            <AllToys />
            <NewsLetter />
            <AboutUs />
        </div>
    );
};

export default Home;