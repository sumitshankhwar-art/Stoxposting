import { Copyright } from "./Copyright";

export const Salescalender = () => {
  return (
    <div>
      <div className="mx-80">
        <h1 className="text-[#FE6E00] text-4xl md:text-6xl font-bold ">Sales Calendars</h1>
        <h3 className="my-2 text-2xl">To view our sale calendars please use the link below.</h3>
        <div className="mt-5 mb-5">
        <a href="https://stox.quickbase.com/nav/app/bk42trzjg/action/appoverview" 
        className="text-[#9DB1BF] mt-6 pt-5 underline">
          STOX SALES CALENDAR
        </a>
        </div>
        <div className="mt-20 p-5">
          <Copyright/>
      </div>
      </div>
      
    </div>
  );
};
