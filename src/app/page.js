import Image from "next/image";

export default function Home() {
  return (
    <section className="bg-home-bg bg-cover bg-center bg-no-repeat h-screen flex flex-col space-y-20">
      <div className="  h-[150px] w-full items-center overflow-hidden px-4 m-4">
        <h1
          className="font-cheesburga text-[100.48px] leading-[202.53px] text-center uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#FFF280] to-[#7EFF5E] whitespace-nowrap tracking-[400]"
          style={{
            WebkitTextStroke: "4px #0F1B29",
            WebkitTextFillColor: "transparent",
          }}
        >
          welcome to alabay world
        </h1>
      </div>
      <div className="bg-customBlue w-full h-auto mt-20 p-2 flex flex-col items-center">
        <h2 className="text-white text-[38px] leading-[50.47px] tracking-tight uppercase font-cheesburga text-center">
          where the{" "}
          <span className="text-yellow-500">
            legendary Central Asian Shepherd Dog
          </span>{" "}
          meets a new-age adventure.
          <br />
          <span className="block px-5">
            <span className="text-yellow-500">Join us</span> in celebrating the{" "}
            <span className="text-yellow-500">strength</span>,{" "}
            <span className="text-yellow-500">loyalty</span>, and{" "}
            <span className="text-yellow-500">heritage</span> of the Alabay
          </span>
          <span className="block px-2">breed.</span>
        </h2>
      </div>
      <div className="absolute bottom-0 right-4 left-4 bg-yellow-500  p-4 h-[70px] w-auto rounded-full">

      </div>
    </section>
  );
}
