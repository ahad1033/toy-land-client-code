import { useEffect, useState } from "react";
import ToysCard from "./toysCard/ToysCard";


const AllToys = () => {

    const [allToys, setAllToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/alltoys')
            .then(res => res.json())
            .then(data => setAllToys(data));
    }, [])

    return (
        <div className="m-5 p-2">
            <h2 className="text-center text-3xl font-bold my-3">Here is our toys</h2>
            <p className="font-semibold text-center mb-3">Choose your favourite toys.</p>
            
            <div className="grid lg:grid-cols-2 md:gri-cols-1 gap-4 card w-100 p-5 m-2 bg-base-100 shadow-xl">
            {
                allToys.map(toys => <ToysCard
                    key={toys._id}
                    toys={toys}
                ></ToysCard>)
            }
            </div>
        </div>
    );
};

export default AllToys;