import React from "react";

const Share = () => {
  return (
    <section
      id="share"
      className="w-full bg-gradient-to-r from-[#1f1e1e] to-[#3b3b3b] h-[70vh] "
    >
      <div className="text-white w-full flex  flex-col text-center justify-center  ">
        <h3 className="font-victor-medium text-3xl my-3 pt-10 ">
          <span className="underline">Share</span> your story for change.
        </h3>
        <p className="md:w-1/2 m-3 mx-auto text-lg">
          Your voice matters. Share your story anonymously to raise awareness,
          support survivors, and help prevent abuse.
        </p>
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-[40px]">
        <div className=" bg-white w-[90%] md:w-1/2 mx-auto h-12  rounded-3xl flex items-center p-3 field  drop-shadow-2xl  ">
          <input type="text" className="w-full h-full outline-none text-center " placeholder="Share your story" />
        </div>
        <button
          className="bg-[#3b3b3b] w-[20%] text-white  text-2xl font-victor-medium  m-5 h-12
          rounded-3xl drop-shadow-2xl hover:animate-pulse"
        >
          Share
        </button>
      </div>
    </section>
  );
};

export default Share;
