import { useParams } from "react-router";

export const ProductDetails = () => {
    const { id } = useParams();

    return (
        <>
        <h1>Product details with id: {id}</h1>
        </>
    );
};
