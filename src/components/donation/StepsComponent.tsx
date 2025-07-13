import BodyLayout from "../common/BodyLayout";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {STEPS} from "@/constants/appConstants";

export function Steps() {
  const currentStep = useSelector((state: RootState) => state.step.currentStep);
  return (
    <BodyLayout background="bg-custom-white">
      <div className="flex justify-between items-center sm:w-[50%] mx-auto">
        {STEPS.map((step) => (
          <div
            key={step}
            className={`flex items-center ${
              step !== STEPS[STEPS.length - 1] ? "flex-1" : ""
            }`}
          >
            <div
              className={`w-[50px] h-[50px] rounded-full border-2  flex items-center justify-center text-xl font-semibold text-white ${
                step <= currentStep
                  ? "border-blue-800 bg-blue-400"
                  : "border-gray-800 bg-gray-600"
              }`}
            >
              {step}
            </div>
            {step !== STEPS[STEPS.length - 1] && (
              <div
                className={`flex-1  border-t-2 border-dashed ${
                  step <= currentStep ? "border-blue-800 " : "border-gray-800 "
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
    </BodyLayout>
  );
}
