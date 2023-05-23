import { useEffect, useState } from "react";
import ToysCard from "./toysCard/ToysCard";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showAllToys, setShowAllToys] = useState(false);

  useEffect(() => {
    fetch("https://toyland-server-ahad1033.vercel.app/alltoys")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);

  const handleSortByCategory = (category) => {
    setSelectedCategory(category);
    setShowAllToys(false);
  };

  const handleShowAllToys = () => {
    setShowAllToys(true);
    setSelectedCategory("");
  };

  const sortedToys = selectedCategory
    ? allToys.filter((toys) => toys.subCategory === selectedCategory)
    : showAllToys
    ? allToys.slice(0, 20)
    : allToys;

  return (
    <div className="m-5 p-2">
      <h2 className="text-center text-3xl font-bold my-3">Here is our toys</h2>
      <p className="font-semibold text-center mb-3">Choose your favorite toys.</p>

      <div className="flex justify-center space-x-4 my-4">
        <h2 className="text-2xl font-bold">Sort By:</h2>
        <button
          className={`${
            selectedCategory === "" ? "bg-blue-500 text-white" : "bg-blue-200"
          } py-2 px-4 rounded`}
          onClick={handleShowAllToys}
        >
          All Toys
        </button>
        <button
          className={`${
            selectedCategory === "Racing Car" ? "bg-blue-500 text-white" : "bg-blue-200"
          } py-2 px-4 rounded`}
          onClick={() => handleSortByCategory("Racing Car")}
        >
          Racing Car
        </button>
        <button
          className={`${
            selectedCategory === "Taxi" ? "bg-blue-500 text-white" : "bg-blue-200"
          } py-2 px-4 rounded`}
          onClick={() => handleSortByCategory("Taxi")}
        >
          Taxi
        </button>
        <button
          className={`${
            selectedCategory === "Vintage" ? "bg-blue-500 text-white" : "bg-blue-200"
          } py-2 px-4 rounded`}
          onClick={() => handleSortByCategory("Vintage")}
        >
          Vintage
        </button>
      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4 card w-100 p-5 m-2 bg-base-100 shadow-xl">
        {sortedToys.map((toys) => (
          <ToysCard key={toys._id} toys={toys}></ToysCard>
        ))}
      </div>
    </div>
  );
};

export default AllToys;