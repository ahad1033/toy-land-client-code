import AboutUs from "../../aboutUs/AboutUs";
import AllToys from "../../allToys/AllToys";
import NewsLetter from "../../newsletter/NewsLetter";
import Banner from "../banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner />
            <AllToys />
            <NewsLetter />
            <AboutUs />
        </div>
    );
};

export default Home;