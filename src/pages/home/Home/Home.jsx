import AllToys from "../../allToys/AllToys";
import NewsLetter from "../../newsletter/NewsLetter";
import Banner from "../banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner />
            <AllToys />
            <NewsLetter />
        </div>
    );
};

export default Home;