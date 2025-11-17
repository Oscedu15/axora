import Blog from "@/components/Home/Blog";
import Commitment from "@/components/Home/Commitment";
import Companies from "@/components/Home/Companies";
import Hero from "@/components/Home/Hero";
import Pricing from "@/components/Home/Pricing";
import Proccess from "@/components/Home/Process";
import Projects from "@/components/Home/Projects";
import Solution from "@/components/Home/Solution";
// import Team from "@/components/Home/Team";
import Testimonial from "@/components/Home/Testimonial";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Solution />
        <Companies />
        <Commitment />
        <Proccess />
        <Projects />
        <Testimonial />
        <Pricing />
        <Blog />
        {/* <Team /> */}
      </main>
    </>
  );
}
