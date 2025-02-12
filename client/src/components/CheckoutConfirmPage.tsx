import { Dialog, DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { Dispatch, SetStateAction } from "react";
import { DialogContent } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const CheckoutConfirmPage = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
    }) => {
    
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        contact: "",
        address:""

    })
    const changeEventHandler = (e:React.ChangeEventHandler<HTMLInputElement>) => {
        
    }
    
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogTitle>Review Your Order</DialogTitle>
        <DialogDescription>
          Double check your delivery details and ensure everything is in order.
          When you are ready, hit confirm button to finalize your order.
        </DialogDescription>
        <form>
          <div className="md:grid grid-cols-2 gap-2 space-y-1 md:space-y-0">
            <Label>Fullname</Label>
            <Input
              type="text"
              name="fullname"
              value={input.fullname}
              onChange={()=>changeEventHandler(e)}
            />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutConfirmPage;
