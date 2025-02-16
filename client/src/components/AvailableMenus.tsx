import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const AvailableMenus = () => {
  
  return (
    <div className="md:p-4">
      <h1 className="text-xl md:text-2xl font-extrabold mb-6">
        Available Menus
      </h1>
      <div className="grid md:grid-cols-3 space-y-4 md:space-y-0">
        <Card className="max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://www.allrecipes.com/thmb/UhPUZBO9xWeCmjr6pcBr-7fl8F0=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/50347-indian-tandoori-chicken-DDMFS-4x3-3035-205e98c80b2f4275b5bd010c396d9149.jpg"
            alt="res_image"
            className="w-full h-40 object-cover"
          />
          <CardContent className="">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Tandoori Biriyani
            </h2>
            <p className="text-sm text-gray-600 mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta illo dolor, qui commodi beatae dicta.</p>
            <h3 className="text-lg font-semibold mt-4">
              Price: <span className="text-[#522a53]">₹180</span>
            </h3>
          </CardContent>
          <CardFooter className="p-4">
            <Button className="w-full bg-aubergine hover:bg-hoverAubergine">
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AvailableMenus;
