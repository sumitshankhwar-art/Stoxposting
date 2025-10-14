import { Copyright } from "./Copyright";

export const TheStoxDifference = () => {
  return (
    <div className="mx-10 md:mx-20 lg:mx-80 my-2">
      <div>
        <h1 className="text-[#FE6E00] text-4xl md:text-6xl font-bold ">The STOX Difference</h1>

        <div>
          <h2 className="text-2xl m-2 mt-8">We'll find a way to stand out above the rest</h2>
          <div className="p-10">
          <ul className="list-disc text-[#9DB1BF]">
            <li>Small Business Personal Feeling, Big Business, Results</li>
            <li>
              You may not be our only client, but we’ll make sure you feel like
              it.
            </li>
            <li>Special Handling</li>
            <li>Worry free Posting </li>
            <li>Quality Publishing</li>
            <li>Auction Service</li>
            <li>Flat Fee State Wide</li>
            <li>Process Service</li>
            <li>JR. Lien Bidding</li>
            <li>Title Research</li>
            <li>Lien Preparation and Filing</li>
            <li>Document Filing</li>
          </ul>
          </div>
        </div>
      </div>

      <Copyright/>
    </div>
  );
};
