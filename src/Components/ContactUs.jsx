import { Copyright } from "../Components/Copyright"

export const ContactUs = ()=>{
    return (
    <div className="mx-80">
        <div>
            <div className="p-2">
                <h1 className="text-[#FE6E00] text-4xl md:text-6xl font-bold ">Contact Us</h1>
            </div>
       <div
        id="web-from"
        className="w-full flex flex-col items-center justify-center text-center mt-8"
      >
        <div className="space-y-2 mb-6 text-left text-2xl font-bold">
          <h2>Toll Free: +1-844-477-7869</h2>
          <h2>Local: +1-801-477-7869</h2>
          <h2>Email: orders@emailstox.com</h2>
          
        </div>

        <div>
          <h3 className="text-xl font-semibold text-left">Web Form</h3>
          <form className=" border border-gray-700 p-4 mt-4">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border p-2"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border p-2"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="border p-2 bg-red-200"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="border p-2"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Type your message here..."
                  className="w-full border p-2 h-32"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-32 bg-gray-700 text-white p-2"
              >
                Submit
              </button>
            </form>
        </div>
      </div>
    </div>
    <Copyright/>
    </div>
    )
}