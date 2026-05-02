import { TopNavBarItem } from "./TopNavBarItem";

export const TopNavBar = () => {
  const navBarItems = ["Cart", "User"];

  return (
    <div className="flex justify-between sticky top-0 z-10 px-10 py-2">
      <div className="flex">
        <img
          src="/app/assets/images/blue-whale-icon.png"
          alt="blue whale corp navbar logo"
          className="h-15"
        />
        <h1 className="text-3xl py-3">&nbsp;BWC Marketplace</h1>
      </div>
      <div className="flex pt-4">
        <input
          type="text"
          name="price"
          placeholder="Search"
          className="border border-gray-300 pl-3 rounded-full pr-100 focus:outline-gray-400"
        />
      </div>
      <div className="flex gap-x-10 py-3">
        {navBarItems.map((navBarItem) => (
          <TopNavBarItem key={navBarItem} label={navBarItem} />
        ))}
      </div>
    </div>
  );
};
