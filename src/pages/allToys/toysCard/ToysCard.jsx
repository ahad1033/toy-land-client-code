

const ToysCard = ({ toys }) => {
    const { picture, name, seller, price, rating, subCategory } = toys;

    return (
        <div  className='border-solid border-2 border-lime-800 rounded p-2'>
            <figure>
                <img className='' src={picture} alt={name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Seller: {seller}</p>
                <p>Price: {price}</p>
                <p>Rating: {rating}</p>
                <p>Subcategory: {subCategory}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-accent">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ToysCard;
