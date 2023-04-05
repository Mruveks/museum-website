import React, { useState, useRef } from "react";
import { AiFillRightSquare, AiFillLeftSquare } from "react-icons/ai";
const HorizontalScrollContainer = ({ data }) => {
  const containerRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = (scrollOffset) => {
    const container = containerRef.current;
    container.scrollTo({
      left: scrollLeft + scrollOffset,
      behavior: "smooth",
    });
    setScrollLeft(scrollLeft + scrollOffset);
  };

  return (
    <article className="relative">
      {data.length != 13 ? (
        <div>
          <div
            ref={containerRef}
            className="overflow-x-hidden whitespace-nowrap py-4 scroll-hidden text-left"
          >
            {data.map((exhibition) => (
              <section className="inline-block w-1/3" key={exhibition.id}>
                <div className="grid mx-8 mb-8 h-[25rem] rounded-md hover:shadow-2xl border pb-2 border-gray-100 shadow-lg">
                  <img
                    src={exhibition.img}
                    alt={exhibition.title}
                    className="w-full h-64 object-cover rounded-t-md"
                  />
                  <div className="whitespace-pre-wrap w-full text-lg font-semibold hover:underline cursor-pointer px-4">
                    {exhibition.title}
                  </div>
                  <div className="grid grid-cols-2 w-full items-center px-4 ">
                    <div className="flex flex-col w-full ">
                      <p>{exhibition.date}</p>
                      <p>{exhibition.hour}</p>
                    </div>

                    <button className="justify-self-end p-4 border  bg-gradient-to-r from-red-800 to-red-600 hover:to-yellow-400 w-fit text-white font-semibold rounded-lg">
                      Join Now!
                    </button>
                  </div>
                </div>
              </section>
            ))}
          </div>
          {scrollLeft === 0 ? null : (
            <button
              className="absolute top-1/2 -left-12 transform -translate-y-1/2 z-10 text-4xl text-black px-3 py-6 rounded-full focus:outline-none"
              onClick={() => handleScroll(-430)}
              disabled={scrollLeft === 0}
            >
              <AiFillLeftSquare className="text-red-600 hover:text-red-400" />
            </button>
          )}
          {scrollLeft > data.length * 150 ? null : (
            <button
              className="absolute top-1/2 -right-11 transform -translate-y-1/2 z-10 text-4xl text-black px-2 py-6 rounded-full focus:outline-none"
              onClick={() => handleScroll(430)}
              disabled={
                containerRef.current &&
                scrollLeft ===
                  containerRef.current.scrollWidth -
                    containerRef.current.clientWidth
              }
            >
              <AiFillRightSquare className="text-red-600 hover:text-red-400" />
            </button>
          )}
        </div>
      ) : (
        <div>
          <div
            ref={containerRef}
            className="overflow-x-hidden whitespace-nowrap py-4 scroll-hidden text-left"
          >
            {data.map((exhibition) => (
              <section className="inline-block w-96" key={exhibition.id}>
                <div className="grid pr-8">
                  <img
                    src={exhibition.img}
                    alt={exhibition.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="whitespace-pre-wrap w-full text-lg font-semibold hover:underline cursor-pointer">
                    {exhibition.title}
                  </div>
                  <p className="text-left text-sm">{exhibition.date}</p>
                </div>
              </section>
            ))}
          </div>
          <button
            className="absolute top-1/2 -left-10 transform -translate-y-1/2 z-10 text-4xl text-black hover:text-red-600 px-3 py-6 rounded-full focus:outline-none"
            onClick={() => handleScroll(-384)}
            disabled={scrollLeft === 0}
          >
            {"<"}
          </button>
          <button
            className="absolute top-1/2 -right-10 transform -translate-y-1/2 z-10 text-4xl text-black hover:text-red-600 px-2 py-6 rounded-full focus:outline-none"
            onClick={() => handleScroll(384)}
            disabled={
              containerRef.current &&
              scrollLeft ===
                containerRef.current.scrollWidth -
                  containerRef.current.clientWidth
            }
          >
            {">"}
          </button>
        </div>
      )}
    </article>
  );
};

export default HorizontalScrollContainer;
