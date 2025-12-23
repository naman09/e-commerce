interface TopNavBarItemProps {
    label: string
}

export const TopNavBarItem = (props: TopNavBarItemProps) => {
    return <h2>{props.label}</h2>
}