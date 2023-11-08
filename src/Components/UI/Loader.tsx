import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

interface ILoaderProps {
  size: number;
  color: string;
  loading: boolean;
  speed: number;
  fullScreen: boolean;
}

const Loader: React.FunctionComponent<ILoaderProps> = ({
  size = 35,
  color,
  loading,
  speed = 1,
  fullScreen = false,
}) => {
  const containerClassName = fullScreen ? "h-screen w-full" : "h-full w-full";

  return (
    <div
      className={` flex flex-col justify-center items-center 
      ${containerClassName}`}
    >
      <ClipLoader
        color={color}
        loading={loading}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
