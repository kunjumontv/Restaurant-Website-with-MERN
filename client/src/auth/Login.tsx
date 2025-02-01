import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { Loader2, LockKeyhole, Mail } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { LoginInputState, userLoginSchema } from "@/schema/userSchema";

function Login() {
  // interface LoginInputState {
  //   email: string;
  //   password: string;
  // }

  const [input, setInput] = useState<LoginInputState>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Partial<LoginInputState>>({});

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const loginSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    loading = true;
    const result = userLoginSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setInput(fieldErrors as Partial<LoginInputState>);
      return;
    }
    console.log(input);
  };

  let loading = false;

  return (
    <div className="flex items-center justify-center w-screen min-h-screen">
      <form
        onSubmit={loginSubmitHandler}
        className="md:p-8 w-full max-w-md md:border border-gray-200 rounded-lg flex flex-col mx-4 gap-4"
      >
        <div className="mb-4">
          <h1 className="font-bold text-2xl">Daily Eatery</h1>
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
              Login
            </Button>
          )}
        </div>
        <Separator />
        <p className="mt-2">
          Don't have an account
          <Link to="/signup" className="text-blue-500 ml-2">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
