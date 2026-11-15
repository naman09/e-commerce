export const SearchBarWithoutDropDown = () => {
  return (
    <input
      type="text"
      name="global-search-input"
      autoComplete="off"
      placeholder="Search"
      className="bg-white border border-gray-300 pl-3 py-2 rounded-full w-full focus:border-sky-600 focus:outline-none"
    />
  );
}