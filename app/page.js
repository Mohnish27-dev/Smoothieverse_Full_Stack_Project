import Image from "next/image";
import Link from "next/link";
export async function generateMetadata() {
  return {
    title: "SmoothieVerse | Home - Fund Your Dreams with Smoothies!",
  };
}
export default function Home() {
  return (
    <div>
      <div className="flex justify-center text-white">
        <div className="flex flex-col items-center mt-20">

          <h1 className="text-4xl font-bold mb-4 max-[390px]:text-center">Get Me A Smoothie <span>🥤</span></h1>

          <p className="text-lg mb-8 max-[515px]:text-center">
            Fund your project with smoothie and make your ideas come true!
          </p>
          <div className="buttons flex">
            <Link href={"/login"}>
            
            <button  type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
            </Link>
            <Link href={"/about"}>
            
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
            </Link>
          </div>
          <Image
            src="/icons/smoothie_icon.png"
            alt="Smoothie Image"
            width={150}
            height={150}
            className="rounded-full shadow-lg"
          />
        </div>
      </div>
      <div className="line">
        <div className="w-full h-0.5 bg-gradient-to-r from-purple-600 to-blue-500 mt-10"></div>
      </div>

      <div className="text-white ">
        <h3 className=" text-center font-bold my-4 text-3xl">Your Fans can buy you a smoothie</h3>
        <div className="flex flex-col sm:flex-row gap-6 justify-center md:gap-48 md:ml-20 items-center ">
          <div className="w-full sm:w-1/3 flex flex-col items-center">
            <img className="rounded-full h-26 w-28 bg-gray-300" src="/icons/man.gif" alt="man image" />
            <p>Fans want to help</p>
            <p className="text-sm">Your fans are availabe for you to help you</p>

          </div>
          <div className="w-full sm:w-1/3 flex flex-col items-center">
            <img className="  h-26 w-28 bg-gray-300 rounded-full" src="/icons/coin.gif" alt="coin image" width={70} />
            <p>Coin for Smoothie</p>
            <p className="text-sm"> 
            Your fans can buy you a smoothie with their coins
            </p>


          </div>
          <div className="w-full sm:w-1/3 flex flex-col items-center">
            <img className=" h-26 w-28 bg-gray-300 rounded-full" src="/icons/group.png" alt="group image" width={70} />
            <p>
              Fans are here to help you
            </p>
            <p className="text-sm ">
              Group of fans can help you to get a smoothie
            </p>

          </div>
        </div>

      </div>
      <div className="line">
        <div className="w-full h-0.5 bg-gradient-to-r from-purple-600 to-blue-500 mt-10"></div>
      </div>
      <div className="text-white flex flex-col items-center mt-10">
        <h3 className=" text-center font-bold my-4 text-3xl">Learn More</h3>
        <iframe className="md:w-[560px] w-1/2 h-[315px]"  src="https://www.youtube.com/embed/CJN1n3fId_A?si=mv1-mgiL6cN-EKVQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>


      </div>

    </div>
  );
}
