import { useUserStore } from "~/state/userStore";
import { TopNavBarItem } from "./TopNavBarItem";
import { useState } from "react";

export interface SearchResult {
  title: string;
}

const searchResultsDummyData: SearchResult[] = [
  {
    title: "item1"
  },
  {
    title: "item2"
  },
  {
    title: "item3"
  }
];

export const TopNavBar = () => {
  const navBarItems = ["Cart", "User"];

  const userId = useUserStore((state) => state.userId); 

  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const handleFocus = () => {
    setSearchResults(searchResultsDummyData);
  }

   const handleBlur = () => {
    setSearchResults([]);
  }

  return (
    <div className="flex justify-between sticky top-0 z-10 px-10 py-2 gap-2 bg-gray-900 text-white mb-2">
      <div className="flex items-center">
        <img
          src="/app/assets/images/blue-whale-icon.png"
          alt="blue whale corp navbar logo"
          className="h-15"
        />
        <h1 className="text-3xl">&nbsp;BWC Marketplace</h1>
      </div>
      <div className="flex relative grow rounded-t-3xl has-focus:bg-white text-black">
        <input
          type="text"
          name="global-search-input"
          autoComplete="off"
          placeholder="Search"
          className="border border-gray-300 pl-3 rounded-full w-full focus:border-transparent focus:outline-none bg-white"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <div className="absolute left-0 right-0 top-full">
          {searchResults.map((item, idx) => {
              let style = "bg-white p-5 border border-gray-300" 
              if (idx == searchResults.length - 1) {
                style += " rounded-b-3xl"
              }
              return <div key={item.title} className={style}>
                  {item.title}
                </div>
            }
          )}
        </div>
        
      </div>
      <div className="flex gap-x-5 items-center">
        {navBarItems.map((navBarItem) => (
          <TopNavBarItem key={navBarItem} label={navBarItem} />
        ))}

        {userId}
      </div>
    </div>
  );
};
