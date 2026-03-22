import { ProductCard } from "./ProductCard"

export interface Product {
    id: string;
    name: string;
    price: number;
    imgUrl: string;
}

const products: Product[] = [
    {
        id: "p1",
        name: "PVC Pipe (1 inch, 3m)",
        price: 250,
        imgUrl: "https://example.com/images/pvc-pipe.jpg"
    },
    {
        id: "p2",
        name: "Ball Valve (Brass, 1/2 inch)",
        price: 180,
        imgUrl: "https://example.com/images/ball-valve.jpg"
    },
    {
        id: "p3",
        name: "Wash Basin Faucet",
        price: 1200,
        imgUrl: "https://example.com/images/faucet.jpg"
    },
    {
        id: "p4",
        name: "Flexible Shower Hose",
        price: 350,
        imgUrl: "https://example.com/images/shower-hose.jpg"
    },
    {
        id: "p5",
        name: "Pipe Elbow (90°, PVC)",
        price: 40,
        imgUrl: "https://example.com/images/pipe-elbow.jpg"
    },
    {
        id: "p6",
        name: "Teflon Tape Roll",
        price: 20,
        imgUrl: "https://example.com/images/teflon-tape.jpg"
    },
    {
        id: "p7",
        name: "Drain Trap (P-Trap)",
        price: 220,
        imgUrl: "https://example.com/images/p-trap.jpg"
    },
    {
        id: "p8",
        name: "Water Tank Float Valve",
        price: 450,
        imgUrl: "https://example.com/images/float-valve.jpg"
    },
    {
        id: "p9",
        name: "Angle Cock Valve",
        price: 300,
        imgUrl: "https://example.com/images/angle-cock.jpg"
    },
    {
        id: "p10",
        name: "Pipe Wrench (12 inch)",
        price: 800,
        imgUrl: "https://example.com/images/pipe-wrench.jpg"
    }
];

export const ProductListingGrid = () => {
    return <>
        <h1>Product Listing Grid</h1>
        <div className="grid grid-cols-4 gap-4">
            {products.map(product => <ProductCard key={product.id} product={product} /> )}
        </div>
    </>
}