import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsFormValid,
  setPassword,
} from "../../store/reducers/logIn.Reducer";
import { nextSetStep } from "../../store/reducers/logIn.Reducer";
import SliderInput from "../Inputs/SliderInput.component";

function Sliders() {
  const step = useSelector((state) => state.logIn.step);
  const password = useSelector((state) => state.logIn.password);

  const dispatch = useDispatch();
  const slideLeft = useRef(null);
  const slideRight = useRef(null);
  const isValid = useRef(false);

  const [isFound, setIsFound] = useState(null);
  let timer;
  const nextImageSlide = () => {
    timer = setTimeout(() => {
      if (!isValid.current) return;
      dispatch(nextSetStep());
    }, 400);
  };

  useEffect(() => {
    return () => clearTimeout(timer);
  }, [timer]);

  useEffect(() => {
    dispatch(setIsFormValid(isFound !== null));
  }, [isFound, dispatch]);

  const sliderHandler = (isRightSlide, isUnlocked) => {
    if (!isUnlocked) return;
    isValid.current = true;
    if (isRightSlide) {
      setIsFound(true);
      slideLeft.current.reset();
    } else {
      setIsFound(false);
      slideRight.current.reset();
    }
  };

  useEffect(() => {
    isValid.current = isFound;
    if (isFound === null) return;
    let passArray = [...password];
    passArray[step - 1] = !isFound ? 0 : 1;
    dispatch(setPassword(passArray));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFound, dispatch]);

  useEffect(() => {
    if (password[step - 1] === null) {
      setIsFound(null);
      isValid.current = false;
      slideLeft.current.reset();
      slideRight.current.reset();
    } else {
      const isRight = password[step - 1] === 1;
      isValid.current = true;
      if (isRight) {
        setIsFound(true);
        slideRight.current.setSlider();
        slideLeft.current.reset();
      } else {
        setIsFound(false);
        slideLeft.current.setSlider();
        slideRight.current.reset();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  console.log(step, isFound, password);

  return (
    <div className="flex items-center justify-center mb-16 mt-4">
      <div className="flex flex-col justify-center items-center gap-10 w-full mx-6 min-w-[8rem] select-none mt-4">
        <div className="w-full relative flex items-center justify-center">
          <h2 className="text-center absolute text-xs text-[color:var(--color-primary)] left-1/2 -translate-x-1/2 font-bold -top-[0.1rem]">
            Swipe right for
          </h2>
          <SliderInput
            text="Yes"
            sliderHandler={sliderHandler}
            isFound={isFound}
            ref={slideRight}
            nextImageSlide={nextImageSlide}
          />
        </div>
        <div className="w-full relative flex items-center justify-center">
          <h2 className="text-center absolute text-xs text-[color:var(--color-primary)] left-1/2 -translate-x-1/2 font-bold -top-[0.1rem]">
            Swipe left for 
          </h2>
          <SliderInput
            text="No"
            isRightSlide={false}
            sliderHandler={sliderHandler}
            isFound={isFound}
            ref={slideLeft}
            nextImageSlide={nextImageSlide}
          />
        </div>
      </div>
    </div>
  );
}

export default Sliders;
