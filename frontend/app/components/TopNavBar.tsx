import { TopNavBarItem } from "./TopNavBarItem";

export const TopNavBar = () => {

    const navBarItems = ["Marketplace", "About Us", "User"];

    return <div className="flex justify-between sticky top-0 bg-white">
        <h1 className="text-3xl">BWC Icon</h1>
        <div className="flex gap-x-2">
            {navBarItems.map(navBarItem => (
                <TopNavBarItem key={navBarItem} label={navBarItem} />
            ))}
        </div>
    </div>
}