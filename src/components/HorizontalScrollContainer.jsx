import React, { useState, useRef } from "react";

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

  var limit = Math.max()

  return (
    <article className="relative">
      {data.length != 13 ? (
        <div>
          <div
            ref={containerRef}
            className="overflow-x-hidden whitespace-nowrap py-4 scroll-hidden text-left"
          >
            {data.map((exhibition) => (
              <section className="inline-block w-96" key={exhibition.id}>
                <div className="grid mx-8 mb-8 h-96 rounded-md hover:shadow-xl p-2 shadow-lg">
                  <img
                    src={exhibition.img}
                    alt={exhibition.title}
                    className="w-full h-64 object-cover rounded-t-md"
                  />
                  <div className="whitespace-pre-wrap w-full text-lg font-semibold hover:underline cursor-pointer">
                    {exhibition.title}
                  </div>
                  <div className="flex w-full items-center justify-between ">
                    <p>{exhibition.date}</p>
                    <button className="mx-4 p-4 border bg-gradient-to-r from-red-800 to-red-600 hover:to-yellow-400 w-fit text-white font-semibold rounded-lg">
                      Buy Now!
                    </button>
                  </div>
                </div>
              </section>
            ))}
          </div>
          {scrollLeft === 0 ? null : (
            <button
              className="absolute top-1/2 -left-10 transform -translate-y-1/2 z-10 text-4xl text-black hover:text-red-600 px-3 py-6 rounded-full focus:outline-none"
              onClick={() => handleScroll(-384)}
              disabled={scrollLeft === 0}
            >
              {"<"}
            </button>
          )}
          {
            scrollLeft > (data.length * 150) ? null :
              
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
          }
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
