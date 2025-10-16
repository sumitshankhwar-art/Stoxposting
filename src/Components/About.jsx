import { Copyright } from "./Copyright";

export const About = () => {
  return (
    <div>
      <div className="mx-10 md:mx-20 lg:mx-100"  style={{ fontFamily: "Josefin Sans, sans-serif" }}>
        <h1 className="text-[#FE6E00] text-8xl font-bold md:my-2 md:mb-8" style={{ fontFamily: "Inconsolata, sans-serif" }}>About</h1>
        <h2 className="my-8 text-2xl " >
          The only one-stop solution for publication, posting and foreclosure
          auction services
        </h2>
        <div className="text-[#9DB1BF] md:my-4 text-[1.1rem]">
          <p>
            Our Trustee Sales service meets all state foreclosure requirements.
            After doing default title work for 11 years our founder saw a void
            of a good, customer service oriented posting and publishing company
            for foreclosure proceedings. From an extensive career in title work
            we are excited to provide a great customer experience through
            dedication, and responsiveness.
          </p>
          <p className="mb-60  ">
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
