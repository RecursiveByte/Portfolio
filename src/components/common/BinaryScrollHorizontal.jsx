import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { binaryScrollHoriAnimation } from "@/animations/homeAnimations/binaryScrollHoriAnimation";


const BinaryScrollHorizontal = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  const nums1 = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
  const nums2 = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0];

  useGSAP(() => {
    const tl = binaryScrollHoriAnimation(
      row1Ref.current,
      row2Ref.current
    );

    return () => tl.kill();
  }, []);

  return (
    <div className="absolute bottom-[10%] w-[80%] left-[10%] h-[20%] flex flex-col justify-evenly overflow-hidden">

      {/* Row 1 */}
      <div
        className="overflow-hidden w-full h-[45%]
        [mask:linear-gradient(to_right,transparent,black_50%,black_50%,transparent)]"
      >
        <div
          ref={row1Ref}
          className="flex w-max h-full items-center"
        >
          {[...nums1, ...nums1].map((ele, idx) => (
            <span
              key={idx}
              className="shrink-0 w-12.5 h-full 
                         text-white text-2xl font-bold
                         flex justify-center items-center"
            >
              {ele}
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div
        className="overflow-hidden w-full h-[45%]
        [mask:linear-gradient(to_right,transparent,black_50%,black_50%,transparent)]"
      >
        <div
          ref={row2Ref}
          className="flex w-max h-full items-center"
        >
          {[...nums2, ...nums2].map((ele, idx) => (
            <span
              key={idx}
              className="shrink-0 w-12.5 h-full
                         text-[#42b3f5] text-2xl font-bold
                         flex justify-center items-center"
            >
              {ele}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BinaryScrollHorizontal;
