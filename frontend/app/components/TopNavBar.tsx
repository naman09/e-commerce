import { TopNavBarItem } from "./TopNavBarItem";

export const TopNavBar = () => {

    const navBarItems = ["Marketplace", "About Us", "User"];

    return <>
        <h1>BWC Icon</h1>
        {navBarItems.map(navBarItem => (
            <TopNavBarItem key={navBarItem} label={navBarItem} />
        ))}
    </>
}