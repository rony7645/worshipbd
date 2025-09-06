import Breadcrumb from "@/app/components/layout/Breadcrumb";
import Services from "@/app/components/Services";

export const metadata = {
  title: "Our Services",
};

export default function OurServicesPage() {
  return (
    <>
      <Breadcrumb title={metadata.title} />
      <section class="service-section fix section-padding">
        <div class="container">
          <Services />
        </div>
      </section>
    </>
  );
}
