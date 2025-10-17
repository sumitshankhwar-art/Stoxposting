import { Copyright } from "./Copyright";
import logo from "../assets/d9b98c_2e0dae22681e48b1aec0bb9d0e3fd45d~mv2.png";

export const Home = () => {
  return (
    <div className="p-4 text-center m-10 mx-[5%] md:mx-[10%] lg:mx-[15%]
 lg:max-w-250 lg:mt-16 "   style={{ fontFamily: "Outfit, sans-serif" }}>
    
      <div
        className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2
       gap-[1%] items-start"
      >
        <div className=" mt-10 font-semibold" 
>
        <h2 className="text-2xl  md:text-[50px] mb-4 flex-shrink-0">
          STOX Posting &
        </h2>
         <h2 className="text-2xl md:text-[50px] mb-4">
         Publishing
        </h2>
        </div>
        <div className="row-start-2 lg:mt-5">
          <p className="text-3xl  mb-2 lg:m-2">
            Professional Reliability
          </p>
          <div className="m-4 lg:mt-25">
            <div className="inline-block bg-[#0E2E47] text-white px-10 py-2 rounded hover:bg-[#1a3c5d] transition ">
            1 (844) 477-STOX
            </div>
          </div>
        </div>
      <div>
        <img
          src={logo}
          alt="STOX Posting & Publishing"
          className="mx-auto "
        />
      </div>
      <div className="text-left md:pl-[15%] md:ml-[1%] text-gray-600 mb-8 " style={{ fontFamily: "Josefin Sans, sans-serif" }}>
        <p className=" mt-2 text-[1.1rem]">
          Our world revolves around you, the client. We make sure all your
          assignments are handled with care and speed.
        </p>
        <p className=" lg:my-3 text-[1.1rem]">
          We have account coordinators standing by to assist you with notice
          postings, publications, and all other parts of the foreclosure
          process.
        </p>
        <p className="lg:my-3 text-[1.1rem]">
          Call us today, and see why we have the highest rated support team year
          after year.
        </p>
          </div>

      
      </div> 
      <Copyright/>
    </div>
  );
};
