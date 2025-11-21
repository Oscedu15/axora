import HeroSub from "@/components/SharedComponents/HeroSub";

export default function Blog() {
  const breadcrumbLiks = [
    {
      href: "/",
      text: "Home",
    },
    {
      href: "/blog",
      text: "Blog",
    },
  ];
  return (
    <>
      <HeroSub title="Blog" description="" breadcrumbLinks={breadcrumbLiks} />

      <div className="overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light">
        <div
          className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-14
          "
        ></div>
      </div>
    </>
  );
}
