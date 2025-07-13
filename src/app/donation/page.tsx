"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { UseDispatch } from "react-redux";
import { setStep } from "@/redux/slices/stepReducer";
import BodyLayout from "@/components/common/BodyLayout";
import { Steps } from "@/components/donation/StepsComponent";

export default function Donation() {
  const dispatch = useDispatch();
  const step = useSelector((state: RootState) => state.step.currentStep);
  const increaseStep = () => {
    dispatch(setStep(step + 1));
  };
  return (
    <BodyLayout background="bg-custom-white">
      <div className="min-h-[50vh] ">
        <Steps />
      </div>
    </BodyLayout>
  );
}
