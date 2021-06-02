import React from "react";
import Fade from "react-reveal/Fade";

const EnquiryComponent = () => {
  return (
    <div id="enquiry" className="bg-aboutPattern bg-cover bg-no-repeat">
      <div className="container flex flex-col justify-center items-center py-20">
        <Fade bottom>
          <h1 className="text-left text-white font-bold text-2xl pb-6">
            Got a question?
          </h1>
        </Fade>
        <form className="w-1/2 flex flex-col justify-center items-center">
          <div className="w-full grid grid-cols-2 gap-4 mb-3">
            <Fade bottom>
              <div className="">
                <input
                  className="py-2 px-6 w-full rounded"
                  type="text"
                  id="name"
                  placeholder="Name"
                />
              </div>
            </Fade>
            <Fade bottom>
              <div className="">
                <input
                  className="py-2 px-6 w-full rounded"
                  type="text"
                  id="email"
                  placeholder="E-mail"
                />
              </div>
            </Fade>
            <Fade bottom>
              <div className="col-start-1 col-end-3">
                <textarea
                  className="w-full px-6 py-2 rounded"
                  type="text"
                  id="question"
                  placeholder="Question"
                  row="5"
                />
              </div>
            </Fade>
          </div>
          <Fade bottom>
            <button
              className="bg-primary text-white p-2 px-4 border-2 border-primary rounded font-semibold transition-all hover:bg-white hover:text-primary"
              type="submit"
            >
              Send message
            </button>
          </Fade>
        </form>
      </div>
    </div>
  );
};

export default EnquiryComponent;
