import { Suspense } from "react";
import Lottie from "lottie-react";


// eslint-disable-next-line react/prop-types
const DisplayLottie = ({animationData }) => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData
    };

  return (
    <Suspense >
      <Lottie animationData={defaultOptions?.animationData} loop={defaultOptions?.loop} autoplay={defaultOptions?.autoplay} />
    </Suspense>
  );
};

export default DisplayLottie;