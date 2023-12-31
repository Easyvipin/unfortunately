import Image from "next/image";
import React from "react";
import { FiEdit } from "react-icons/fi";

interface IProfileImgProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  editAction?: boolean;
  editHandler?: boolean;
}

const ProfileImg: React.FunctionComponent<IProfileImgProps> = ({
  src,
  width = 250,
  height = 200,
  alt,
  editAction,
  editHandler,
}) => {
  return (
    <div className="relative rounded-md overflow-hidden inline-block">
      <Image
        src="https://i.pravatar.cc/300"
        width={250}
        height={200}
        alt={"fake"}
      />
      <FiEdit className="absolute bottom-2 right-2 text-[#fafafa] text-3xl  p-1" />
    </div>
  );
};

export default ProfileImg;
