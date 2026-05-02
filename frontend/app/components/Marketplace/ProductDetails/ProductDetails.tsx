import { useParams } from "react-router";
import { TopNavBar } from "../SearchBar/TopNavBar";

export const ProductDetails = () => {
    const { id } = useParams();

    return (
        <>    
        <TopNavBar />
        <h1>Product details with id: {id}</h1>
        <div>
            <img
                src="/app/assets/images/blue-whale-icon.png"
                alt="product image"
                className="h-15"
            />
            <div>
                <h2>Company name</h2>
                <h3>Product name</h3>
                <p>ratings</p>
                <em>Price: XX</em>
                <p>options</p>
                <button>select qty</button>
                <button>Add to cart</button>
                <button>Buy Now</button>
            </div>
            <div>Detailed description and ratings breakdown</div>
        </div>
        </>
    );
};
