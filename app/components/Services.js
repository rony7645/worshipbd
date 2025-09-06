import ServiceCard from "./card/ServiceCard";
import services from "@/app/data/services"

export default function Services() {
  return (
    <div className="row g-4">
      {services.map((service, i) => (
        <ServiceCard service={service} key={i} />
      ))}
    </div>
  );
}
