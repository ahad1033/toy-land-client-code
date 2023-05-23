import { useState } from 'react';


const NewsLetter = () => {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
                <h2 className="text-center m-5 text-3xl font-bold">Subscribe to our newsletter</h2>
                <div className="mb-2 items-center text-center">
                    <input type="email" placeholder="Your email address" className="input input-bordered input-accent w-full max-w-xs" />
                    <button className="btn btn-wide">Subscribe</button>
                </div>
                <div className="form-control text-center items-center">
                    <label className="cursor-pointer label">
                        <span className="label-text m-2">
                            I have read and agreed to the Terms, Conditions, and Privacy Policy
                        </span>
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            className="checkbox checkbox-info"
                        />
                    </label>
                </div>
            </div>
            <div className="w-full md:w-1/2">
                <div className="p-10">
                    <h2 className="text-3xl font-bold mb-5">Address</h2>
                    <ul className="font-bold">Corporate: Simpletree Lighthouse, Level-4, 52 Kemal Ataturk Avenue, Banani, Dhaka-1212 Bangladesh</ul>
                    <ul className="font-bold">Factory: Mokkhopur, Trishal, Mymensingh, Bangladesh</ul>
                    <ul className="font-bold">Email: info@toyland-bd.com</ul>
                    <ul className="font-bold">Call Us: 01636 555 666</ul>
                </div>
            </div>
        </div>

    );
};

export default NewsLetter;