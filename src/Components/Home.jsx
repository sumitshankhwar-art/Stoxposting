import { Copyright } from "../Components/Copyright";

export const Home = () => {
  return (
    <div className="p-4 text-center m-10">
    
      <div
        className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2
       gap-4 items-start"
      >
        <div className="">
        <h2 className="text-2xl  md:text-[50px] font-bold mb-4 flex-shrink-0">
          STOX Posting &
        </h2>
         <h2 className="text-2xl md:text-[50px] font-bold mb-4">
         Publishing
        </h2>
        </div>
        <div className="row-start-2">
          <p className="text-2xl font-semibold mb-2 lg:m-2">
            Professional Reliability
          </p>
          <div className="m-4">
            <div className="inline-block bg-[#0E2E47] text-white px-4 py-2 rounded hover:bg-[#1a3c5d] transition ">
              1-801-477-STOX
            </div>
          </div>
        </div>
      <div>
        <img
          src="src/assets/d9b98c_2e0dae22681e48b1aec0bb9d0e3fd45d~mv2.png"
          alt="STOX Posting & Publishing"
          className="mx-auto"
        />
      </div>
      <div className="text-left md:pl-4 text-gray-200 ">
        <p className="text-gray-600 mt-2">
          Our world revolves around you, the client. We make sure all your
          assignments are handled with care and speed.
        </p>
        <p className="text-gray-600 lg:my-3">
          We have account coordinators standing by to assist you with notice
          postings, publications, and all other parts of the foreclosure
          process.
        </p>
        <p className="text-gray-600 lg:my-3">
          Call us today, and see why we have the highest rated support team year
          after year.
        </p>
          </div>

      
      </div> 
      <Copyright/>
    </div>
  );
};
