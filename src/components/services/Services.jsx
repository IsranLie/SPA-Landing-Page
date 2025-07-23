import Provide from "./Provide";
import Overview from "./Overview";
import Benefits from "./Benefits";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20">
      <Provide />
      <Overview />
      <Benefits />
    </section>
  );
}
