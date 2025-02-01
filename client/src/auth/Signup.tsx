import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Loader2, LockKeyhole, Mail, Phone, User } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { SignupInputState, userSignupSchema } from "@/schema/userSchema";

function Signup() {
  // interface SignupInputState {
  //   fullname: string;
  //   email: string;
  //   password: string;
  //   contact: string;
  // }

  const [input, setInput] = useState<SignupInputState>({
    fullname: "",
    email: "",
    password: "",
    contact: "",
  });

  const [errors, setErrors] = useState<Partial<SignupInputState>>({});
  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const loginSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    loading = true;
    // form validation check start
    const result = userSignupSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors as Partial<SignupInputState>);
      return
    }
    // login api implementation start here
    console.log(input);
  };

  let loading = false;

  return (
    <div className="flex items-center justify-center w-screen min-h-screen">
      <form
        onSubmit={loginSubmitHandler}
        className="md:p-8 w-full max-w-md md:border border-gray-200 rounded-lg flex flex-col mx-4 gap-4"
      >
        <div className="mb-4 text-center">
          <h1 className="font-bold text-2xl">Daily Eatery</h1>
        </div>
        <div className="relative text-left">
          <Input
            type="text"
            name="fullname"
            placeholder="Full Name"
            className="pl-10 focus-visible:ring-1"
            value={input.fullname}
            onChange={changeEventHandler}
          />
          <User className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
          {
            errors && <span className="text-red-500">{errors.fullname}</span>
          }
        </div>
        <div className="relative text-left">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="pl-10 focus-visible:ring-1"
            value={input.email}
            onChange={changeEventHandler}
          />
          <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
          {
            errors && <span className="text-red-500">{errors.email}</span>
          }
        </div>
        <div className="relative text-left">
          <Input
            type="password"
            name="password"
            placeholder="Password"
            className="pl-10 focus-visible:ring-1"
            value={input.password}
            onChange={changeEventHandler}
          />
          <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
          {
            errors && <span className="text-red-500">{errors.password}</span>
          }
        </div>
        <div className="relative text-left">
          <Input
            type="number"
            name="contact"
            placeholder="Mobile Number"
            className="pl-10 focus-visible:ring-1"
            value={input.contact}
            onChange={changeEventHandler}
          />
          <Phone className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
          {
            errors ? <span className="text-red-500">{errors.contact} </span> : ""
          }
        </div>
        <div className="mb4">
          {loading ? (
            <Button
              className="w-full bg-aubergine hover:bg-hoverAubergine"
              disabled
            >
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
            </Button>
          ) : (
            <Button
              className="w-full bg-aubergine hover:bg-hoverAubergine"
              onClick={loginSubmitHandler}
              type="submit"
            >
              Signup
            </Button>
          )}
        </div>
        <Separator />
        <p className="mt-2">
          Already have an account
          <Link to="/login" className="text-blue-500 ml-2">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
