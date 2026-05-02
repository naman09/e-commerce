import { TopNavBarItem } from "./TopNavBarItem";

export const TopNavBar = () => {
  const navBarItems = ["Marketplace", "About Us", "User"];

  return (
    <div className="flex justify-between fixed w-full top-0 items-center bg-gray-900 text-white z-10 px-10 h-16">
      <div className="flex">
        <img
          src="app/assets/images/blue-whale-icon.png"
          alt="blue whale corp navbar logo"
          className="h-12"
        />
        <h1 className="text-3xl py-2">&nbsp;BWC</h1>
      </div>
      <div className="flex gap-x-10 py-3">
        {navBarItems.map((navBarItem) => (
          <TopNavBarItem key={navBarItem} label={navBarItem} />
        ))}
      </div>
    </div>
  );
};
