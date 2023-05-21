import { Link, useLoaderData } from "react-router-dom";


const ViewDetails = () => {

    const details = useLoaderData();
    const { _id, picture, name, seller, price, rating, subCategory } = details;

    return (
        <div key={_id} className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{seller}</p>
                <p>{price}</p>
                <p>{subCategory}</p>
                <p>{rating}</p>
                <Link to='/'>
                    <button className="btn btn-primary">Go to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ViewDetails;