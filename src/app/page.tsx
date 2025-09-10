import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="my-4">
      <Navbar />
      <Hero />
    </div>
  );
}
