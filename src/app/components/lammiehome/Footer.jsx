import React from 'react';

const Footer = () => {
  return (
    <footer className='p-10 text-white' style={{ backgroundColor: "#2d16bb" }}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold mb-4">CONTACT INFO</h4>
          <p>Anderson Smith street, Lekki Phase 1, Lagos, Nigeria</p>
          <p>+234 706 624 67198</p>
        </div>

        <div>
          <h4 className="font-bold mb-4">INFORMATION</h4>
          <ul className="space-y-2">
            <li>Shipping and Returns</li>
            <li>Conditions of Use</li>
            <li>About Us</li>
            <li>Manufacturers</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">MY ACCOUNT</h4>
          <ul className="space-y-2">
            <li>Customer Info</li>
            <li>Addresses</li>
            <li>Orders</li>
            <li>My Cart</li>
            <li>Wishlist</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">COMPANY</h4>
          <p>
            LAMMIE is a reputable fashion house brand with various items both for men and women alike. Customer’s satisfaction is our utmost goal. We strive for excellence and we continue to find new ways to serve you better.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
