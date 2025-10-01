import AboutComapany from "@/app/components/about/AboutCompany";
import Founder from "@/app/components/about/Founder";
import TeamMember from "@/app/components/about/TeamMember";
import TechSkills from "@/app/components/about/TechSkills";
import Breadcrumb from "@/app/components/layout/Breadcrumb";

export const metadata = {
  title: "About Us",
  description: "WORSHIPBD",
};

export default function AboutUsPage () {
    return (
        <>
        <Breadcrumb title={metadata.title}/>
        <AboutComapany />
        <Founder/>
       
        <TechSkills/>
        </>
    )
}