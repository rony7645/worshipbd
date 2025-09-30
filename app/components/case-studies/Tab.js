"use client";
import { useEffect } from "react";
import CaseStudyCard from "../card/CaseStudyCard";

export default function Tab() {
  const tabsCategories = [
    {
      id: "all",
      label: "All",
    },
    {
      id: "e-commerce",
      label: "E-Commerce",
    },
    {
      id: "it-agency",
      label: "IT Agency",
    },
    {
      id: "fitness",
      label: "Fitness",
    },
    {
      id: "blog",
      label: "Blog",
    },
    {
      id: "health-care",
      label: "Health Care",
    },
    {
      id: "real-estate",
      label: "Real Estate",
    },
  ];

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className="case-studies-tab">
      {/* case studies tabs */}
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        {tabsCategories.map((category, i) => (
          <li key={i} className="nav-item" role="presentation">
            <button
              className={`nav-link ${i === 0 ? "active" : ""}`} // First tab active
              id={`${category.id}-tab`}
              data-bs-toggle="tab"
              data-bs-target={`#${category.id}`}
              type="button"
              role="tab"
              aria-controls={`${category.id}`}
              aria-selected={i === 0 ? "true" : "false"}
            >
              {category.label}
            </button>
          </li>
        ))}
      </ul>

      {/* case studies tab content */}
      <div className="tab-content" id="myTabContent">
        {tabsCategories.map((item, i) => (
          <div
            key={i}
            className={`tab-pane fade ${i === 0 ? "show active" : ""}`} // only first tab active
            id={`${item.id}`}
            role="tabpanel"
            aria-labelledby={`${item.id}-tab`}
          >
            <CaseStudyCard/>
          </div>
        ))}
      </div>
    </div>
  );
}
