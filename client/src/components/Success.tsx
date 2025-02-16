import { IndianRupee } from "lucide-react";
import HeroImage from "../assets/HeroPizza.png";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Success = () => {
  const orders = [1, 2, 3];

  if (orders.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="font-bold text-2xl text-gray-700 dark:text-gray-300">
          Order Not Found
        </h1>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 max-w-lg w-full">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            Order Status: {""}
            <span className="text-[#522a53]">{"confirm".toUpperCase()}</span>
          </h1>
        </div>
        <div className="mb-6 ">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Order Summary
          </h2>
          {/* client ordered items will be displayed here */}
          <div className="mb-4 ">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src={HeroImage}
                  alt="food image"
                  className="w-14 h-14 object-cover rounded-md"
                />
                <h3 className="ml-4 text-gray-800 dark:text-gray-200 font-medium">
                  Paneer Pizza
                </h3>
              </div>
              <div className="text-right">
                <div className="text-gray-800 dark:text-gray-200 flex items-center">
                  <IndianRupee size={16} />
                  <span className="text-lg font-medium">80</span>
                </div>
              </div>
            </div>
            <Separator className="my-4" />
          </div>
        </div>
        <Link to="/cart">
          <Button className="w-full py-3 rounded-md shadow-lg bg-aubergine hover:bg-hoverAubergine">
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
