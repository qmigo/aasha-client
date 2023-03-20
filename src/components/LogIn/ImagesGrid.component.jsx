import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";

const ImagesGrid = () => {
  const step = useSelector((state) => state.logIn.step);
  const imageList = useSelector((state) => state.logIn.imageList);

  const ref = useRef();
  useEffect(() => {
    ref.current.classList.add("scale-[20%]");
    let timer = setTimeout(() => {
      ref.current.classList.remove("scale-[20%]");
    }, 200);
    return () => clearTimeout(timer);
  }, [step]);

  console.log(imageList);

  const grid = imageList[step - 1].map((image) => {
    return (
      <div
        className="border-4 border-white shadow-lg shadow-gray-600"
        key={image.id}
      >
        <img
          src={image.url}
          className="w-32 aspect-square object-cover object-center mx-auto"
          alt=""
        />
      </div>
    );
  });

  const noOfImages = imageList[step - 1].length;
  const gridCols = Math.floor(Math.sqrt(noOfImages));
  let gridsDesign = `grid-cols-2`;
  if (gridCols === 3) {
    gridsDesign = "grid-cols-3";
  } else if (gridCols === 4) {
    gridsDesign = "grid-cols-4";
  } else if (gridCols === 5) {
    gridsDesign = "grid-cols-5";
  }

  return (
    <div
      className="flex justify-center mt-8 items-center duration-200 ease-in-out"
      ref={ref}
    >
      <div
        className={twMerge(
          `grid justify-center gap-4 items-center w-fit`,
          `${gridsDesign}`
        )}
      >
        {grid}
      </div>
    </div>
  );
};

export default ImagesGrid;
