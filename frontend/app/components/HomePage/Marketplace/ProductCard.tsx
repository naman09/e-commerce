import type { Product } from "./ProductListingGrid"

export interface ProductCardProps {
    product: Product;
}

export const ProductCard = (props: ProductCardProps) => {
    const {product} = props;

    return <div className="border border-gray-100 shadow-md rounded-lg p-10 cursor-pointer transition duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-105">
        <h1>{product.name}</h1>
        <strong>Price: {product.price}</strong>
    </div>
}