import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export type FilterOptionState = {
  id: string;
  label: string;
}[];

const filterOptions: FilterOptionState = [
  {
    id: "burger",
    label: "Burger",
  },
  {
    id: "thali",
    label: "Thali",
  },
  {
    id: "biriyani",
    label: "Biriyani",
  },
  {
    id: "momos",
    label: "Momos",
  },
];

const FilterPage = () => {
  const appliedFilterHandler = (value: string) => {
    alert(value);
  };

  return (
    <div className="md:w-72">
      <div className="flex items-center justify-between">
        <h1 className="font-medium text-lg">Filter by cuisines</h1>
        <Button variant={"link"} className="">
          Reset
        </Button>
      </div>
      {filterOptions.map((option) => (
        <div key={option.id} className="flex items-center space-x-2 my-5">
          <Checkbox
            id={option.id}
            onClick={() => appliedFilterHandler(option.label)}
          />
          <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {option.label}
          </Label>
        </div>
      ))}
    </div>
  );
};

export default FilterPage;
