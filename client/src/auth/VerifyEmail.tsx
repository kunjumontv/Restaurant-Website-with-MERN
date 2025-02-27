import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const VerifyEmail = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRef = useRef<any>([]);
  const navigate = useNavigate();
  const loading = false;

  const handleChange = (index: number, value: string) => {
    if (/^[a-zA-Z0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
    // Move to thhe next Input field id a digit is entered
    if (value !== "" && index < 5) {
      inputRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRef.current[index - 1].focus();
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="p-8 rounded-md w-full max-w-md flex flex-col gap-10 border border-gray-200">
        <div className="text-center">
          <h1 className="font-extrabold text-2xl">Verify your email</h1>
          <p className="text-sm to-gray-600">
            Enter the 6 digits code sent tot your email address
          </p>
        </div>
        <form action="" className="flex  flex-col justify-center">
          <div className="flex items-center gap-2">
            {otp.map((letter: string, idx: number) => (
              <>
                <Input
                  key={idx}
                  type="text"
                  ref={(element) => (inputRef.current[idx] = element)}
                  maxLength={1}
                  value={letter}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(idx, e.target.value)
                  }
                  onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                    handleKeyDown(idx, e)
                  }
                  className="md:w-10 md:h-10 w-8 h-8 text-center text-sm md:text-xl font-normal rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

                {idx < 5 && <span>-</span>}
              </>
            ))}
          </div>
          {loading ? (
            <Button
              className="bg-aubergine hover:bg-hoverAubergine mt-6 w-full"
              disabled
              type="button"
            >
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          ) : (
            <Button
              type="submit"
              className="bg-aubergine hover:bg-hoverAubergine mt-6 w-full"
            >
              Verify
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;
