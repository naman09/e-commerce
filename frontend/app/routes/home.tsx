import type { Route } from "./+types/home";
import { TopNavBar } from "~/components/TopNavBar";
import { Banner } from "~/components/HomePage/Banner";
import { Carousel } from "~/components/HomePage/Carousel";
import { Offerings } from "~/components/HomePage/Offerings";
import { CustomerTestimonies } from "~/components/HomePage/CustomerTestimonies";
import { Footer } from "~/components/Footer";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Blue Whale Corp" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="">
      <TopNavBar />
      <hr/>
      <Banner />
      <hr/>
      <Carousel />
      <hr/>
      <Offerings />
      <hr/>
      <CustomerTestimonies />
      <hr/>
      <Footer />
    </div>
  );
}
