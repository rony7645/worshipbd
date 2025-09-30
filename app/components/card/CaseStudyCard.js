import case_one from "@/public/img/case-studies/case1-2.jpg";
import Image from "next/image";

export default function CaseStudyCard() {
  return (
    <div className="col-md-4 card-item">
      <a href="/case/case-1.html">
        <div className="card h-100">
          <Image src={case_one} alt="" />
          <div className="card-body">
            <h5 className="card-title">title</h5>
            <p className="card-text">
              A responsive and creative website design for a startup brand.
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
