import React from 'react'






import { FaLinkedin, FaFacebookSquare, FaInstagram, FaSkype, FaPinterest } from 'react-icons/fa';
import { CiTwitter } from 'react-icons/ci';

const Footer = () => {
  return (
    <div>
      <footer className="w-full h-auto bg-[#2A254B] py-8">
        <div className="container mx-auto px-5">
          <div className="flex flex-col sm:flex-row justify-between text-center sm:text-left space-y-8 sm:space-y-0 sm:space-x-8">
            {/* Menu Section */}
            <div className="space-y-3 text-white w-full sm:w-1/2 lg:w-[108px]">
              <h2 className="text-base font-normal mb-3">Menu</h2>
              <ul className="space-y-6">
                <li className="font-normal text-sm">New arrivals</li>
                <li className="font-normal text-sm">Best Sellers</li>
                <li className="font-normal text-sm">Recently viewed</li>
                <li className="font-normal text-sm">Popular this week</li>
                <li className="font-normal text-sm">All products</li>
              </ul>
            </div>

            {/* Categories Section */}
            <div className="space-y-3 text-white w-full sm:w-1/2 lg:w-[108px]">
              <h2 className="text-base font-normal mb-3">Categories</h2>
              <ul className="space-y-6">
                <li className="font-normal text-sm">Crockery</li>
                <li className="font-normal text-sm">Furniture</li>
                <li className="font-normal text-sm">Homeware</li>
                <li className="font-normal text-sm">Plant pots</li>
                <li className="font-normal text-sm">Chairs</li>
                <li className="font-normal text-sm">Cutlery</li>
              </ul>
            </div>

            {/* Company Section */}
            <div className="space-y-3 text-white w-full sm:w-1/2 lg:w-[108px]">
              <h2 className="text-base font-normal mb-3">Company</h2>
              <ul className="space-y-6">
                <li className="font-normal text-sm">About us</li>
                <li className="font-normal text-sm">Vacancies</li>
                <li className="font-normal text-sm">Contact us</li>
                <li className="font-normal text-sm">Privacy</li>
                <li className="font-normal text-sm">Returns policy</li>
              </ul>
            </div>

            {/* Mailing List Section */}
            <div className="flex flex-col items-center sm:items-start w-full sm:w-auto">
              <label
                htmlFor="footer-field"
                className="text-base font-normal text-white mb-2"
              >
                Join our mailing list
              </label>
              <div className="flex w-full sm:w-auto">
                <input
                  type="email"
                  id="footer-field"
                  name="footer-field"
                  placeholder="Your@email.com"
                  className="w-full sm:w-64 bg-gray-300 bg-opacity-50 rounded border border-gray-400 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <button className="w-full sm:w-auto mt-4 sm:mt-0 sm:ml-4 text-[#2A254B] bg-white py-2 px-6 rounded">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-14" />
        <div className="flex justify-between pt-4 px-5 items-center flex-col sm:flex-row">
          <h5 className="text-sm font-normal text-white">Copyright 2022 Avion LTD</h5>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <FaLinkedin size={24} color="white" />
            <FaFacebookSquare size={24} color="white" />
            <FaInstagram size={24} color="white" />
            <FaSkype size={24} color="white" />
            <CiTwitter size={24} color="white" />
            <FaPinterest size={24} color="white" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;


