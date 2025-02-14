import EditMenu from "@/components/EditMenu";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { menuFormSchema, MenuFormSchema } from "@/schema/menuSchema";
import { Loader2, Plus } from "lucide-react";
import { title } from "process";
import { useState } from "react";

const AddMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const loading = false;
  const [input, setInput] = useState<MenuFormSchema>({
    name: "",
    description: "",
    price: 0.0,
    imageFile: undefined,
  });
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [selectedMenu, setSelectedMenu] = useState<any>();

  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setInput({ ...input, [name]: type === "number" ? Number(value) : value });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = menuFormSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors);
      return;
    }
    console.log(input);
  };

  const menus = [
    {
      title: "Biriyani",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eligendi?",
      price: 30,
      image:
        "https://www.allrecipes.com/thmb/UhPUZBO9xWeCmjr6pcBr-7fl8F0=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/50347-indian-tandoori-chicken-DDMFS-4x3-3035-205e98c80b2f4275b5bd010c396d9149.jpg",
    },
    {
      title: "Biriyani",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eligendi?",
      price: 30,
      image:
        "https://www.allrecipes.com/thmb/UhPUZBO9xWeCmjr6pcBr-7fl8F0=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/50347-indian-tandoori-chicken-DDMFS-4x3-3035-205e98c80b2f4275b5bd010c396d9149.jpg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="flex justify-between">
        <h1 className="text-lg md:text-2xl font-bold md:font-extrabold">
          Available Menus
        </h1>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger>
            <Button className="bg-aubergine hover:bg-hoverAubergine">
              <Plus className="mr-2" />
              Add Menus
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add A New Menu</DialogTitle>
              <DialogDescription>
                Create a menu that will make your restaurant stand out.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={submitHandler} className="flex flex-col space-y-4">
              <div>
                <Label>Name</Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Enter menu name"
                  onChange={changeEventHandler}
                />
                {errors.name && (
                  <span className="text-xs text-red-500">
                    {errors.cuisines[0]}
                  </span>
                )}
              </div>
              <div>
                <Label>Description</Label>
                <Input
                  type="text"
                  name="description"
                  placeholder="Description"
                  onChange={changeEventHandler}
                />
                {errors.description && (
                  <span className="text-xs text-red-500">
                    {errors.description[0]}
                  </span>
                )}
              </div>
              <div>
                <Label>Price in (Rupees)</Label>
                <Input
                  type="number"
                  name="price"
                  placeholder="Enter menu price"
                  onChange={changeEventHandler}
                />
                {errors.price && (
                  <span className="text-xs text-red-500">
                    {errors.price[0]}
                  </span>
                )}
              </div>
              <div>
                <Label>Upload Menu Image</Label>
                <Input
                  type="file"
                  name="imageFile"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setInput({ ...input, imageFile: e.target.files[0] });
                    }
                  }}
                />
                {errors.imageFile && (
                  <span className="text-xs text-red-500">
                    {errors.imageFile[0]}
                  </span>
                )}
              </div>
              <DialogFooter className="mt-5">
                {loading ? (
                  <Button
                    type="submit"
                    className="bg-aubergine hover:bg-hoverAubergine"
                  >
                    <Loader2 className="mr-2 animate-spin" />
                    Please wait
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="bg-aubergine bg-hoverAubergine"
                  >
                    Submit
                  </Button>
                )}
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      {menus.map((menu: any, idx: number) => (
        <div className="mt-6 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 md:p-4 p-2 shadow-md rounded-lg border">
            <img
              src={menu.image}
              alt=""
              className="md:h-24 md:w-24 h-16 w-full object-cover rounded-lg"
            />

            <div className="flex-1">
              <h1 className="text-lg font-semibold text-gray-800 ">
                {menu.title}
              </h1>
              <p className="text-sm text-gray-600 mt-1">{menu.description}</p>
              <h2 className="text-md font-semibold mt-2">
                Price: <span className="text-[#522a53]">{menu.price}</span>
              </h2>
            </div>
            <Button
              onClick={() => setSelectedMenu(menu)}
              size={"sm"}
              className="mt-2 bg-aubergine hover:bg-hoverAubergine"
            >
              Edit
            </Button>
          </div>
        </div>
      ))}

      <EditMenu selectedMenu={selectedMenu} />
    </div>
  );
};

export default AddMenu;
