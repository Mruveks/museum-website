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
    <div className="relative">
      <div
        className="overflow-x-hidden whitespace-nowrap -mx-4 py-4 -mb-4 scroll-hidden"
        ref={containerRef}
      >
        {data.map((exhibition) => (
          <div className="inline-block px-4" key={exhibition.id}>
            <img src={exhibition.image} alt={exhibition.title} className="w-auto h-[24.5rem] object-fit" />
            <div className="mt-2">{exhibition.title}</div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 -left-10 transform -translate-y-1/2 z-10 bg-red-800 hover:bg-gray-300 px-3 py-1 rounded-full focus:outline-none"
        onClick={() => handleScroll(-620)}
        disabled={scrollLeft === 0}
      >
        {"<"}
      </button>
      <button
        className="absolute top-1/2 -right-10 transform -translate-y-1/2 z-10 bg-red-800 hover:bg-gray-300 px-3 py-1 rounded-full focus:outline-none"
        onClick={() => handleScroll(620)}
        disabled={containerRef.current && scrollLeft === containerRef.current.scrollWidth - containerRef.current.clientWidth}
      >
        {">"}
      </button>
    </div>
  );
};

export default ExhibitionTable;
