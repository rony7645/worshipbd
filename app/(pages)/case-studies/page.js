

import Tab from "@/app/components/case-studies/Tab";
import Breadcrumb from "@/app/components/layout/Breadcrumb";


export const metadata = {
  title: "Case Studies",
};

export default function CaseStudyPage() {
  return (
    <>
      <Breadcrumb title={metadata.title} />
      <section className="case-studies">
        <div className="container py-5">
          <h2 className="mb-4 text-center">Our Case Studies</h2>
          <Tab/>
        </div>
      </section>
    </>
  );
}
