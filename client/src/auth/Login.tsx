import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Loader2, LockKeyhole, Mail } from "lucide-react";
import { ChangeEvent, FormEvent, useState, useCallback } from "react";
import { LoginInputState, userLoginSchema } from "@/schema/userSchema";

function Login() {
  
  // to manage form input values
  const [input, setInput] = useState<LoginInputState>({ email: "", password: "" }); 
  // to manage validation errors
  const [errors, setErrors] = useState<Partial<LoginInputState>>({});
  // to prevents multiple submissions and shows a loading indicator.
  const [loading, setLoading] = useState(false);

 
  const changeEventHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Update the state with the new value for the input field.
    setInput((prev) => ({ ...prev, [name]: value }));

    // Clear the error message for the field being updated.
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  }, []);

 
  //  Handles form submission. 
  const loginSubmitHandler = useCallback((e: FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true); 

    // Validate the input using Zod schema
    const result = userLoginSchema.safeParse(input);

    // If validation fails, update the errors state and stop submission.
    if (!result.success) {
      setErrors(result.error.formErrors.fieldErrors as Partial<LoginInputState>);
      setLoading(false); // Stop loading since submission failed
      return;
    }

    // If validation is successful, log the input (or send it to an API).
    console.log(input);
    setLoading(false); // Reset loading state
  }, [input]);

  return (
    <div className="flex items-center justify-center w-screen min-h-screen">
      {/* Login Form */}
      <form
        onSubmit={loginSubmitHandler}
        className="md:p-8 w-full max-w-md md:border border-gray-200 rounded-lg flex flex-col mx-4 gap-4"
      >
        {/* App Name */}
        <h1 className="font-bold text-2xl mb-4 text-center">Daily Eatery</h1>

        {/* Email Input Field */}
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
          {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
        </div>

        {/* Password Input Field */}
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
          {errors.password && <span className="text-red-500 text-xs">{errors.password}</span>}
        </div>

        {/* Submit Button */}
        <div className="mb-4">
          <Button
            className="w-full bg-aubergine hover:bg-hoverAubergine"
            type="submit"
            disabled={loading} // Disable button when loading
          >
            {loading ? (
              <>
                {/* Loading Indicator */}
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
              </>
            ) : (
              "Login"
            )}
          </Button>
        </div>

        <Separator />

        {/* Signup Link */}
        <p className="mt-2">
          Don't have an account?
          <Link to="/signup" className="text-blue-500 ml-2">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
