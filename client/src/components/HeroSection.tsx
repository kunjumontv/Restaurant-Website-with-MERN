import { useState } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import HeroImage from "@/assets/HeroPizza.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [searchText, setSearchText] = useState<string>("");
  const navigate = useNavigate()

  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto md:p-10 rounded-lg items-center justify-center m-4 md:gap-20">
      <div className="flex flex-col gap-10 md:w-[40%]">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold md:font-extrabold md:text-5xl text-4xl">
            Order Food antime & anywhere
          </h1>
          <p className="text-gray-500 ">
            Hey! our delicious food is waiting for you, we are always near to
            you!
          </p>
        </div>
        <div className="relative flex items-center gap-2 w-full">
          <Input
            type="text"
            value={searchText}
            placeholder="Search restaurant by name, city & country"
            onChange={(e) => setSearchText(e.target.value)}
            className="pl-10 border-2 shadow-lg"
          />
          <Search className="absolute text-gray-500 inset-y-2 left-2 pointer-events-none" />
          <Button onClick={()=> navigate(`/search/${searchText}`)} className="bg-aubergine hover:bg-hoverAubergine">
            Search
          </Button>
        </div>
      </div>
      <div className="flex items-center jusify-center">
        <img
          src={HeroImage}
          alt="Pizza"
          className="object-cover w-full max-h-[500px]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
