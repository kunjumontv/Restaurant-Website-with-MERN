import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { menuFormSchema, MenuFormSchema } from "@/schema/menuSchema";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const EditMenu = ({
  selectedMenu,
  editOpen,
  setEditOpen,
}: {
  selectedMenu: MenuFormSchema;
  editOpen: boolean;
  setEditOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [input, setInput] = useState<MenuFormSchema>({
    name: "",
    description: "",
    price: 0,
    imageFile: undefined,
  });
  const loading = false;
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  useEffect(() => {
    setInput({
      name: selectedMenu?.name,
      description: selectedMenu?.description,
      price: selectedMenu?.price,
      imageFile: undefined,
   })
  },[selectedMenu])

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

  return (
    <Dialog open={editOpen} onOpenChange={setEditOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Menu</DialogTitle>
          <DialogDescription>
            Update your menu to keep your offerings fresh and exciting!
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={submitHandler} className="flex flex-col space-y-4">
          <div>
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              placeholder="Enter menu name"
              value={input.name}
              onChange={changeEventHandler}
            />
            {errors.name && (
              <span className="text-xs text-red-500">{errors.name}</span>
            )}
          </div>
          <div>
            <Label>Description</Label>
            <Input
              type="text"
              name="description"
              placeholder="Description"
              value={input.description}
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
              value={input.price}
              onChange={changeEventHandler}
            />
            {errors.price && (
              <span className="text-xs text-red-500">{errors.price}</span>
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
              <span className="text-xs text-red-500">{errors.imageFile}</span>
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
                className="bg-aubergine hover:bg-hoverAubergine"
              >
                Submit
              </Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditMenu;
