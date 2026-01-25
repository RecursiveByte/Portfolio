import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { binScrollVerticalAnimation } from "@/animations/homeAnimations/binScrollVerticalAnimation";

const BinScrollVertical = () => {
  const nums1 = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
  const nums2 = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0];

  const col1 = useRef(null);
  const col2 = useRef(null);

  useGSAP(() => {
    const cleanup = binScrollVerticalAnimation(
      col1.current,
      col2.current
    );

    return cleanup;
  }, []);

  return (
    <div className="bin-scroll-vertical flex p-2 justify-evenly items-center absolute
      sm:right-[5%] lg:right-[2%] top-[10%]
      w-[20%] sm:w-[40%] md:w-[40%] lg:w-[40%] xl:w-[30%]
      xl:right-[6%] h-[70%] sm:h-[75%] md:h-[80%]">

      {/* Column 1 */}
      <div
        className="overflow-hidden w-[28%] h-[85%] sm:h-[90%]
        [mask:linear-gradient(to_bottom,transparent,black_50%,black_50%,transparent)]"
      >
        <div
          ref={col1}
          className="w-full flex flex-col items-center"
        >
          {[...nums1, ...nums1].map((ele, idx) => (
            <span
              key={`c1-${idx}`}
              className="w-[85%] sm:w-[90%] aspect-square mt-2 sm:mt-2.5
              text-white text-2xl sm:text-3xl md:text-4xl
              flex justify-center items-center font-bold"
            >
              {ele}
            </span>
          ))}
        </div>
      </div>

      {/* Column 2 */}
      <div
        className="overflow-hidden w-[28%] h-[85%] sm:h-[90%]
        [mask:linear-gradient(to_bottom,transparent,black_50%,black_50%,transparent)]"
      >
        <div
          ref={col2}
          className="w-full flex flex-col items-center"
        >
          {[...nums2, ...nums2].map((ele, idx) => (
            <span
              key={`c2-${idx}`}
              className="w-[85%] sm:w-[90%] aspect-square mt-2 sm:mt-2.5
              text-[#42b3f5] text-2xl sm:text-3xl md:text-4xl
              flex justify-center items-center font-bold"
            >
              {ele}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BinScrollVertical;
