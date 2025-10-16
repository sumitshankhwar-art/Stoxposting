import { Copyright } from "./Copyright";

export const OurServices = () => {
  return (
    <div className="mx-10 md:mx-20 lg:mx-100 my-2"  style={{ fontFamily: "'Roboto', sans-serif" }}>
      <div >
        <h1 className="text-[#FE6E00] text-7xl font-bold ">Services</h1>
        <div className="m-2 md:my-8"  >
          <h2 className="text-[24px] my-3 md:my-8">Trustee’s Sales</h2>
          <p className="text-[#9DB1BF] text-[16px]"  style={{ fontFamily: "Josefin Sans, sans-serif" }}>
            With each state having differing requirements for Posting,
            Publishing and Sales, STOX keeps up with the laws that govern the
            states that we do work in. We make sure that our auctioneers comply
            and meet all the requirements of that state. To make sure that your
            order makes it to sale, we audit our file to make sure that all the
            tasks and requirements are met. We want to make our clients
            comfortable knowing that they are sending their order to a company
            that cares.
          </p>
        </div>

        <div className="m-2 md:my-8">
          <h2 className="text-[24px] my-3 md:my-8 ">Posting Service</h2>
          <p className="text-[#9DB1BF] text-[16px]"  style={{ fontFamily: "Josefin Sans, sans-serif" }}>
            STOX Posting and Publishing is leading the way with client
            satisfaction. We are a full service Posting company in Utah, Idaho,
            Washington, Nevada, Arizona, Oregon, and California. With the
            shortest turnaround times. With our client portal, clients can
            access their document at anytime, as well as place orders online and
            upload documents.
          </p>
        </div>

        <div className="m-2 mb-8 md:my-8">
          <h2 className="text-[24px] my-3 md:my-8">Publishing</h2>
          <p className="text-[#9DB1BF] text-[16px]"  style={{ fontFamily: "Josefin Sans, sans-serif" }}>
            We have newspapers all over the states we cover. With all the
            newspapers available, we research their prices as well as their
            dependability and pick the publishing vendor that is most
            advantageous to our client. Because of our relationships with these
            newspapers, we can take care of urgent or late publishing requests
            that come in.
          </p>
        </div>
      </div>
      <Copyright />
    </div>
  );
};
