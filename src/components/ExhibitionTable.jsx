import React, { useState, useRef } from "react";

const ExhibitionTable = ({ data }) => {
  const containerRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = (scrollOffset) => {
    const container = containerRef.current;
    container.scrollTo({
      left: scrollLeft + scrollOffset,
      behavior: "smooth"
    });
    setScrollLeft(scrollLeft + scrollOffset);
  };

  return (
    <article className="relative">
      <div
        className="overflow-x-hidden whitespace-nowrap py-4 scroll-hidden"
        ref={containerRef}
      >
        {data.map((exhibition) => (
          <section className="inline-block" key={exhibition.id}>
            <img src={exhibition.image} alt={exhibition.title} className="w-auto h-64 object-cover pr-16" />
            <div className="mt-2">{exhibition.title}</div>
          </section>
        ))}
      </div>
      <button
        className="absolute top-1/2 -left-10 transform -translate-y-1/2 z-10 text-4xl text-black hover:text-red-600 px-3 py-6 rounded-full focus:outline-none"
        onClick={() => handleScroll(-400)}
        disabled={scrollLeft === 0}
      >
        {"<"}
      </button>
      <button
        className="absolute top-1/2 -right-10 transform -translate-y-1/2 z-10 text-4xl text-black hover:text-red-600 px-2 py-6 rounded-full focus:outline-none"
        onClick={() => handleScroll(400)}
        disabled={containerRef.current && scrollLeft === containerRef.current.scrollWidth - containerRef.current.clientWidth}
      >
        {">"}
      </button>
    </article>
  );
};

export default ExhibitionTable;
