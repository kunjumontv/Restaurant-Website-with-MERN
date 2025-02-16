import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import {
  restaurantFormSchema,
  RestaurantFormSchema,
} from "@/schema/restaurantSchema";

const Restaurant = () => {
  const loading = false;
  const isRestaurant = false;

  const [input, setInput] = useState<RestaurantFormSchema>({
    restaurantName: "",
    city: "",
    country: "",
    deliveryTime: 0,
    cuisines: [],
    imageFile: undefined,
  });

  const [errors, setErrors] = useState<Record<string, string[]>>({});

  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setInput({ ...input, [name]: type === "number" ? Number(value) : value });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = restaurantFormSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors);
      return;
    }
    console.log(input);
  };

  return (
    <div className="max-w-6xl mx-auto my-10">
      <div>
        <div>
          <h1 className="font-extrabold text-2xl mb-5">Add Restaurants</h1>
          <form onSubmit={submitHandler}>
            <div className="md:grid grid-cols-2 gap-6 space-y-2 md:space-y-0">
              {/* Restaurant Name */}
              <div>
                <Label>Restaurant Name</Label>
                <Input
                  type="text"
                  name="restaurantName"
                  placeholder="Enter your restaurant name"
                  value={input.restaurantName}
                  onChange={changeEventHandler}
                />
                {errors.restaurantName && (
                  <span className="text-xs text-red-500">
                    {errors.restaurantName[0]}
                  </span>
                )}
              </div>
              <div>
                <Label>City</Label>
                <Input
                  type="text"
                  name="city"
                  placeholder="Enter your city"
                  value={input.city}
                  onChange={changeEventHandler}
                />
                {errors.city && (
                  <span className="text-xs text-red-500">{errors.city[0]}</span>
                )}
              </div>
              <div>
                <Label>Country</Label>
                <Input
                  type="text"
                  name="country"
                  placeholder="Enter your Country"
                  value={input.country}
                  onChange={changeEventHandler}
                />
                {errors.country && (
                  <span className="text-xs text-red-500">
                    {errors.country[0]}
                  </span>
                )}
              </div>
              <div>
                <Label>Delivery Time</Label>
                <Input
                  type="number"
                  name="deliveryTime"
                  placeholder="Enter your restaurant name"
                  value={input.deliveryTime}
                  onChange={changeEventHandler}
                />
                {errors.deliveryTime && (
                  <span className="text-xs text-red-500">
                    {errors.deliveryTime[0]}
                  </span>
                )}
              </div>
              <div>
                <Label>Cuisines</Label>
                <Input
                  type="text"
                  name="cuisines"
                  placeholder="e.g. Momos, Biriyani, Jalebi"
                  value={input.cuisines.join(",")}
                  onChange={(e) =>
                    setInput({ ...input, cuisines: e.target.value.split(",") })
                  }
                />
                {errors.cuisines && (
                  <span className="text-xs text-red-500">
                    {errors.cuisines[0]}
                  </span>
                )}
              </div>
              <div>
                <Label>Upload Restaurant Banner</Label>
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
            </div>
            <div className="mt-5 flex md:justify-end">
              {loading ? (
                <Button
                  disabled
                  className="w-full md:w-1/4 bg-aubergine hover:bg-hoverAubergine"
                >
                  <Loader2 className="mr-2 h-4 w-4 animate-spin " />
                  Please wait
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="w-full md:w-1/4 bg-aubergine hover:bg-hoverAubergine"
                >
                  {isRestaurant
                    ? "Update Your Restaurant"
                    : "Add Your Restaurant"}
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
