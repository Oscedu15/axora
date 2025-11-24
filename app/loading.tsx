import { Icon } from "@iconify/react";

export default function Loading() {
  return (
    <div className="relative overflow-x-hidden h-screen w-full bg-midnight_text flex justify-center items-center">
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
      <div className="container relative mx-auto px-4 md:max-w-(--breakpoint-md) lg:max-w-(--breakpoint-xl) z-10 flex flex-col justify-center items-center text-center text-white">
        <div className="solution-icon border border-dark w-[100px] h-[100px] rounded-full flex justify-center items-center prim-grident mb-6 animate-spin">
          <Icon
            icon="tabler:reload"
            width="50"
            height="50"
            className="text-white"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-chakrapetch">
          Loading...
        </h1>
        <p className="text-lg md:text-xl max-w-2xl font-poppins">
          Please wait while we prepare your experience.
        </p>
      </div>
    </div>
  );
}
