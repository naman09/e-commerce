export interface AvatarProps {
    userId: string;
}

export interface User {
    userId: string;
    name: string;
    imageUrl?: string;
}

const users: User[] = [
    {
        userId: "P1",
        name: "Daniel",
        imageUrl: "app/assets/images/gilang-yuda-alyahya-66DFSxybtQ8-unsplash.jpg"
    },
    {
        userId: "P2",
        name: "Sammantha",
        imageUrl: "app/assets/images/gilang-yuda-alyahya-66DFSxybtQ8-unsplash.jpg"
    },
    {
        userId: "P3",
        name: "Joshua",
        imageUrl: "app/assets/images/gilang-yuda-alyahya-66DFSxybtQ8-unsplash.jpg"
    }
]

export const Avatar = (props: AvatarProps) => {

    const user = users.find(user => user.userId === props.userId);

    if (!user) {
        return <></>
    }

    const altText = `Avatar image of user ${user.name}`; 

    
    // TODO: add default image if imageUrl is undefined
    return <div className="space-y-2">
        <img src={user.imageUrl} alt={altText} className="rounded-full w-10"/> 
        <p>{user.name}</p>
    </div>
}