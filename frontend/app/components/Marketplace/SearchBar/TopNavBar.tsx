import { useUserStore } from "~/state/userStore";
import { TopNavBarItem } from "./TopNavBarItem";

export const TopNavBar = () => {
  const navBarItems = ["Cart", "User"];

  const userId = useUserStore((state) => state.userId); 

  return (
    <div className="flex justify-between sticky top-0 z-10 px-10 py-2 bg-red-200">
      <div className="flex items-center bg-green-200">
        <img
          src="/app/assets/images/blue-whale-icon.png"
          alt="blue whale corp navbar logo"
          className="h-15"
        />
        <h1 className="text-3xl">&nbsp;BWC Marketplace</h1>
      </div>
      <div className="flex relative grow">
        <input
          type="text"
          name="global-search-input"
          autoComplete="off"
          placeholder="Search"
          className="border border-gray-300 pl-3 rounded-full w-full focus:outline-gray-400 bg-blue-200"
        />

        <div className="absolute top-full left-0 right-0 bg-white p-5 rounded-b-lg border">
          Item 1
        </div>
        
      </div>
      <div className="flex gap-x-10 py-3">
        {navBarItems.map((navBarItem) => (
          <TopNavBarItem key={navBarItem} label={navBarItem} />
        ))}

        {userId}
      </div>
    </div>
  );
};
