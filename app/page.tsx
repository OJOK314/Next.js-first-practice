import Image from "next/image";

import photo2 from "../public/photo2.jpg";
import photo3 from "../public/photo3.jpg";

export default function Home() {
  return (
    <div className="bg-fuchsia-950 ">
      <div className="flex gap-4 ">
        <Image
          className="mt-6 ml-10 mb-10"
          src={photo2}
          alt="photo2"
          width={300}
          height={50}
          priority
        />

        <Image
          className="mt-6 ml-10 mb-10"
          src={photo3}
          alt="photo3"
          width={300}
          height={50}
          priority
        />

        <div className="mt-20 ml20">
          <h1 className="text-white text-7xl hover:underline hover:text-amber-400">
            WHAT WE DO
          </h1>
          <p className="text-white ">
            Kanzu Code Foundation discovers, develops, and deploys young African
            tech talent into the exciting tech ecosystem, through accelerated,
            immersive, project-based online tech training programs and later
            connecting our brilliant tech talent with diverse local and global
            work opportunities.
            <br></br>
            Our learning model is practical, engaging and ensures our fellows
            are collaborating on actual platforms and tools used by end users.
            This allows them to have end to end exposure to dealing with
            clients, prioritizing feedback, testing and quality assurance, and
            problem solving
          </p>
        </div>
      </div>

      <p className="bg-amber-500 text-white text-center py-15 text-4xl ">
        Apply to enroll for our upcoming programs 
        <br></br>

 <span className=" text-black font-bold ">
  Starting 18th & 20th February 2026
 </span>
      </p>
    </div>
  );
}
