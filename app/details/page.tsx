import Image from "next/image";
import NewCeramics from "../Components/NewCeramics";
import { newCeramicsData } from '../page'
import Fearture from "../Components/Fearture";
import JoinClub from "../Components/JoinClub";
import Link from "next/link";



const ProductDetails = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Product Image */}
        <div className="w-full">
          <Image
            src="/Chair2.png"
            alt="The Dandy Chair"
            width={721}
            height={759}
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* Right Column: Product Information */}
        <div className="flex flex-col justify-start">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">The Dandy Chair</h1>
          <p className="text-xl sm:text-2xl font-semibold text-gray-700 mb-6">$250</p>
          <p className="text-gray-600 leading-relaxed mb-6">
            A comfortable and stylish chair made with high-quality materials. Perfect for both work and relaxation, it adds a modern touch to any room.
          </p>
          <div className="mb-6">
            <p className="font-medium text-gray-700 mb-2">Color</p>
            <select className="border border-gray-300 rounded-md p-2 w-full sm:w-auto">
              <option>Black</option>
              <option>White</option>
              <option>Gray</option>
            </select>
          </div>
          <Link href="./cart">
            <button className="bg-[#2A254B] text-white px-6 py-3 rounded-md hover:bg-blue-600 w-full sm:w-auto">
              Add to Cart
            </button>
          </Link>
        </div>
      </div>

      {/* Additional Sections */}
      <NewCeramics products={newCeramicsData} />
      <Fearture />
      <JoinClub />
    </div>
  );
};

export default ProductDetails;
