import { FormEvent, useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Loader2,
  LocateIcon,
  Mail,
  MapPin,
  MapPinnedIcon,
  Plus,
} from "lucide-react";

type ProfileDataState = {
  fullname: string;
  email: string;
  address: string;
  city: string;
  country: string;
  profilePicture: string;
};

const Profile = () => {
  const [profileData, setProfileData] = useState<ProfileDataState>({
    fullname: "",
    email: "",
    address: "",
    city: "",
    country: "",
    profilePicture: "",
  });
  const [selectedProfilePicture, setSelectedProfilePicutre] =
    useState<string>("");

  const loading = false;

  const imageRef = useRef<HTMLInputElement | null>(null);

  const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setSelectedProfilePicutre(result);
        setProfileData((previousData) => ({
          ...previousData,
          profilePicture: result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const updateProfileHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(profileData);
    //update profile api implementation 
  };

  return (
    <form onSubmit={updateProfileHandler} className="max-w-7xl mx-auto my-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="relative md:w-28 md:h-28 w-20 h-20">
            <AvatarImage src={selectedProfilePicture} />
            <AvatarFallback>CN</AvatarFallback>
            <input
              ref={imageRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={fileChangeHandler}
            />
            <div
              onClick={() => imageRef.current?.click()}
              className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-full cursor-pointer"
            >
              <Plus className="text-white w-8 h-8" />
            </div>
          </Avatar>
          <input
            type="text"
            name="fullname"
            value={profileData.fullname}
            onChange={changeHandler}
            className="font-bold text-2xl outline-none border-none focus-visible:ring-transparent"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-4 md:gap-2 gap-3 my-10">
        <div className="flex items-center gap-4 rounded-sm bg-gray-200 p-2">
          <Mail className="text-gray-500" />
          <div className="w-full">
            <Label>Email</Label>
            <input
              type="text"
              name="email"
              value={profileData.email}
              onChange={changeHandler}
              className="w-full bg-transparent focus-visible:ring-0 text-gray-600 focus-visible:border-transparent outline-none border-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-sm bg-gray-200 p-2">
          <LocateIcon className="text-gray-500" />
          <div className="w-full">
            <Label>Address</Label>
            <input
              type="text"
              name="address"
              value={profileData.address}
              onChange={changeHandler}
              className="w-full bg-transparent focus-visible:ring-0 text-gray-600 focus-visible:border-transparent outline-none border-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-sm bg-gray-200 p-2">
          <MapPin className="text-gray-500" />
          <div className="w-full">
            <Label>City</Label>
            <input
              type="text"
              name="city"
              value={profileData.city}
              onChange={changeHandler}
              className="w-full bg-transparent focus-visible:ring-0 text-gray-600 focus-visible:border-transparent outline-none border-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-sm bg-gray-200 p-2">
          <MapPinnedIcon className="text-gray-500" />
          <div className="w-full">
            <Label>Country</Label>
            <input
              type="text"
              name="country"
              value={profileData.country}
              onChange={changeHandler}
              className="w-full bg-transparent focus-visible:ring-0 text-gray-600 focus-visible:border-transparent outline-none border-none"
            />
          </div>
        </div>
      </div>
      <div className="text-center">
        {loading ? (
          <Button disabled className="bg-aubergine hover:bg-hoverAubergine">
            <Loader2 className="mr-2 w-4 h-4 animate-spin" /> Please wait
          </Button>
        ) : (
          <Button className="bg-aubergine hover:bg-hoverAubergine">
            Update
          </Button>
        )}
      </div>
    </form>
  );
};

export default Profile;
