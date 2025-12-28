import { BounceLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center py-12">
      <BounceLoader color="#ffffff" />
    </div>
  );
};

export default LoadingSpinner;
