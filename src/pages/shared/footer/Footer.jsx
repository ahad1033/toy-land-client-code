

const Footer = () => {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols 1 my-5 p-10">
            <div className="mt-4">
                <h2 className="text-2xl font-bold">Our Upcoming Toys</h2>
                <br />
                <ul>Sports Car</ul>
                <ul>Cooking Toys</ul>
                <ul>Robot Toys</ul>
                <ul>Disney Dolls</ul>
                <ul>Musical Toys</ul>
            </div>
            <div className="mt-4">
                <h2 className="text-2xl font-bold">About Us</h2>
                <br />
                <ul>Contact us</ul>
                <ul>Company profile</ul>
                <ul>Advertise with us</ul>
                <ul>Company support</ul>
                <ul>Meet the team</ul>
                <ul>Cookie and privacy</ul>

            </div>
            <div className="mt-4">
                <h2 className="text-2xl font-bold">Customer Account</h2>
                <br />
                <ul>Sign In</ul>
                <ul>Create New Account</ul>
                <ul>Having Trouble?</ul>
                <ul>My Wish List</ul>
                <ul>Recently Viewed</ul>

            </div>
            <div className="mt-4">
                <h2 className="text-2xl font-bold">Need Help?</h2>
                <br />
                <p><span className="font-semibold">Call us:</span> +9874 666 999</p>
                <p><span className="font-semibold">Email:</span> toyland@gmail.com</p>
            </div>
        </div>
    );
};

export default Footer;