import Lottie from "lottie-react";
import animationData from "@/assets/animations/animation.json";

const RecruitmentAnimation = () => {
  return (
    <div className="w-[300px] h-[300px]">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default RecruitmentAnimation;
