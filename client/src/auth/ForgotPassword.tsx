import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, Mail } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");
  let loading: boolean = false;

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <form
        action=""
        className="flex flex-col gap-5 md:border md:p-8 w-full max-w-md rounded-lg mx-4"
      >
        <div className="text-center">
          <h1 className="font-extrabold text-2xl mb-2">Forgot Password</h1>
          <p className="text-sm text-gray-600">
            Enter your email address to reset password
          </p>
        </div>
        <div className="relative w-full">
          <Input
            type="email"
            value={email}
            placeholder="Enter your email"
            className="pl-10"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Mail className="absolute inset-y-2.5 left-2 text-gray-600 pointer-events-none" />
        </div>
        {loading ? (
          <Button type="button" className="bg-aubergine" disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button>
        ) : (
          <Button
            type="submit"
            className="bg-aubergine hover:bg-hoverAubergine"
          >
            Send Reset Link
          </Button>
        )}
        <span className="text-center ">
          Back to <Link className="text-blue-500 hover:underline" to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default ForgotPassword;
