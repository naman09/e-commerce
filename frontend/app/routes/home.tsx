import { TopNavBar } from "~/components/TopNavBar";
import { Banner } from "~/components/HomePage/Banner";
import { Offerings } from "~/components/HomePage/Offerings/Offerings";
import { Footer } from "~/components/Footer";
import { CustomerTestimonies } from "~/components/HomePage/CustomerTestimonies/CustomerTestimonies";

export function meta() {
  return [
    { title: "Blue Whale Corp" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <TopNavBar />
      <div className="m-10 pt-6">
        <Banner />
        <Offerings />
        <CustomerTestimonies />
        <Footer />
      </div>
    </>
  );
}
