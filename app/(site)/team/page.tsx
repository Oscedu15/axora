import HeroSub from "@/components/SharedComponents/HeroSub";
import Teams from "../../../components/Home/Team";

export default function Team() {
  const breadcrumbLiks = [
    {
      href: "/",
      text: "Home",
    },
    {
      href: "/team",
      text: "Team",
    },
  ];
  return (
    <>
      <HeroSub title="Team" description="" breadcrumbLinks={breadcrumbLiks} />
      <Teams />
    </>
  );
}
