import { Badge } from "@/components/ui/badge";
import { Timer } from "lucide-react";
import AvailableMenu from "./AvailableMenus";


const RestaurantDetail = () => {
  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="w-full">
        <div className="relative w-full h-32 md:h-64 lg:h-72">
          <img
            src="https://www.allrecipes.com/thmb/UhPUZBO9xWeCmjr6pcBr-7fl8F0=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/50347-indian-tandoori-chicken-DDMFS-4x3-3035-205e98c80b2f4275b5bd010c396d9149.jpg"
            alt="res_image"
            className="w-full h-full rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="my-5">
            <h1 className="font-medium text-xl">Tandoori Tadka</h1>
            <div className="flex gap-2 my-2">
              {["Biriyani", "Momos"].map((cuisine: string, idx: number) => (
                <Badge key={idx}>{cuisine}</Badge>
              ))}
            </div>
            <div className="flex md:flex-row flex-col gap-2 my-5">
              <div className="flex items-center gap-2">
                <Timer className="w5 h-5" />
                <h1 className="flex items-center gap-2 font-medium">
                  {" "}
                  Delivery Time:
                  <span className="text-[#522a53]">35 mins</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <AvailableMenu />
      </div>
    </div>
  );
};

export default RestaurantDetail;
