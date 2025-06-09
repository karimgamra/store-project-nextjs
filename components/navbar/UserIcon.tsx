import { LuUser } from "react-icons/lu";
import { currentUser, auth } from "@clerk/nextjs/server";
const UserIcon = async () => {
  const userId = auth();
  const user = await currentUser();
  const imageProfile = user?.imageUrl;

  if (imageProfile) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={imageProfile}
        alt="image"
        className="w-6 h-6 rounded-full text-white"
      />
    );
  }

  return (
    <div>
      <LuUser className="w-6 h-6 bg-slate-700 rounded-full text-white" />
    </div>
  );
};

export default UserIcon;
