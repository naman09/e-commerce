import { TopNavBarItem } from "./TopNavBarItem";

export const TopNavBar = () => {

    const navBarItems = ["Marketplace", "About Us", "User"];

    return <div className="flex justify-between sticky top-0 bg-gray-900 text-white z-10 px-10 py-5">
        <div className="flex">
            <img src="app/assets/images/blue-whale-icon.png" alt="blue whale corp navbar logo" className="h-15"/>
            <h1 className="text-3xl py-3">&nbsp;BWC</h1>
        </div>
        <div className="flex gap-x-10 py-3">
            {navBarItems.map(navBarItem => (
                <TopNavBarItem key={navBarItem} label={navBarItem} />
            ))}
        </div>
    </div>
}