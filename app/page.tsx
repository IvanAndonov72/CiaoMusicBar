import Agenda from "@/components/Agenda";
import Hero from "@/components/Hero";
import PhotoLibrary from "@/components/PhotoLibrary";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <main className="relative bg-[#e8decc] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <PhotoLibrary />
        <Agenda />
        <Socials />
      </div>
    </main>
  );
}
