import { Footer } from "../Footer";
import { TopNavBar } from "../TopNavBar";
import { Banner } from "./Banner";
import { CustomerTestimonies } from "./CustomerTestimonies/CustomerTestimonies";
import { Offerings } from "./Offerings/Offerings";

export const HomePage = () => {
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
};
