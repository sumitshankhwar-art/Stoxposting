import { Copyright } from "./Copyright";

export const Salescalender = () => {
  return (
    <div>
      <div className="mx-[5%] md:mx-[10%] lg:mx-[15%] my-4"  style={{ fontFamily: "'Roboto', sans-serif" }}>
        <h1 className="text-[#FE6E00] text-4xl md:text-6xl font-bold my-4">Sales Calendars</h1>
        <h3 className="my-2 text-2xl">To view our sale calendars please use the link below.</h3>
        <div className="my-10 mb-5">
        <a href="https://stox.quickbase.com/nav/app/bk42trzjg/action/appoverview" 
        className="text-gray-600 mt-6 pt-5 underline">
          STOX SALES CALENDAR
        </a>
        </div>
        <div className="mt-60 p-5">
          <Copyright/>
      </div>
      </div>
      
    </div>
  );
};
