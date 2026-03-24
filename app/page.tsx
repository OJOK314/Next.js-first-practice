

import Image from "next/image";

import photo2 from "../public/photo2.jpg"
import photo3 from "../public/photo3.jpg"


export default function Home() {
  return (
    <div className="bg-fuchsia-950 ">
      <div  className="flex gap-4 ">
       
 

  <Image
  src="/next.svg"
  alt="Next.js logo"
  width={100}
  height={20}
  priority
/>
        
         <Image
          src={photo2}
          alt="photo2"
          width={100}
          height={20}
          priority
        />

         <Image
          src={photo3}
          alt="photo3"
          width={100}
          height={20}
          priority
        />

 




     
        
            
      </div>
    </div>
  );
}
