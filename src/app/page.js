import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePage from "./home/page";

export default function Home() {
  return (
    <div className="mx-4 sm:mx-9">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}
