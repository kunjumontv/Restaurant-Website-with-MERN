import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, LockKeyhole } from "lucide-react";

const newPassword = () => {
  const [newPassword, setNewPassword] = useState<string>("");
  let loading: boolean = false;

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <form
        action=""
        className="flex flex-col gap-5 md:border md:p-8 w-full max-w-md rounded-lg mx-4"
      >
        <div className="text-center">
          <h1 className="font-extrabold text-2xl mb-2">Reset Password</h1>
          <p className="text-sm text-gray-600">Enter your new password</p>
        </div>
        <div className="relative w-full">
          <Input
            type="password"
            value={newPassword}
            placeholder="Enter your new password"
            className="pl-10"
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <LockKeyhole className="absolute inset-y-2 left-2 text-gray-600 pointer-events-none" />
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
            Reset
          </Button>
        )}
        <span className="text-center ">
          Back to{" "}
          <Link className="text-blue-500 hover:underline" to="/login">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
};

export default newPassword;
