import ProvideSection from "./ProvideSection";
import OverviewSection from "./OverviewSection";
import BenefitsSection from "./BenefitsSection";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20">
      <ProvideSection />
      <OverviewSection />
      <BenefitsSection />
    </section>
  );
}
