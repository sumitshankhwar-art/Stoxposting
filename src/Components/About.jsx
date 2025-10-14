import { Copyright } from "./Copyright";

export const About = () => {
  return (
    <div>
      <div className="mx-10 md:mx-20 lg:mx-80">
        <h1 className="text-[#FE6E00] text-6xl font-bold ">About</h1>
        <h2 className="my-2 text-xl">
          The only one-stop solution for publication, posting and foreclosure
          auction services
        </h2>
        <div className="text-[#9DB1BF] my-4">
          <p>
            Our Trustee Sales service meets all state foreclosure requirements.
            After doing default title work for 11 years our founder saw a void
            of a good, customer service oriented posting and publishing company
            for foreclosure proceedings. From an extensive career in title work
            we are excited to provide a great customer experience through
            dedication, and responsiveness.
          </p>
          <p className="mb-5">
            STOX can also provide FNMA/FHLMC pricing. We are insured and aware
            of the importance of proper posting and publishing regulations and
            requirements to ensure a successful Trustee Sale. We are eager to
            provide a true customized solution to meet all of your needs.
          </p>     
          <Copyright/>                                         
        </div>
      </div>

      
    </div>
  );
};
