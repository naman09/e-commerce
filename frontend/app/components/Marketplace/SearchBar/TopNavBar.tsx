import { useUserStore } from "~/state/userStore";
import { TopNavBarItem } from "./TopNavBarItem";

export interface SearchResult {
  title: string;
  space: number;
}

const searchResults: SearchResult[] = [
  {
    title: "item1",
    space: 10
  },
  {
    title: "item2",
    space: 15
  },
  {
    title: "item3",
    space: 20
  }
];

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
      <div className="flex relative grow bg-white rounded-t-4xl">
        <input
          type="text"
          name="global-search-input"
          autoComplete="off"
          placeholder="Search"
          className="border border-gray-300 pl-3 rounded-full w-full focus:border-transparent focus:outline-none bg-white"
        />

        <div className="absolute left-0 right-0 top-full">
          {searchResults.map(item => <>
              <div key={item.title} className="bg-white p-5 border border-gray-300">
                {item.title}
              </div>
            </>
          )}
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
