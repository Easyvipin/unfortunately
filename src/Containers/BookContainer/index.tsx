import { Avatar, AvatarFallback, AvatarImage } from "@components/UI/avatar";
import { Button } from "@components/UI/button";
import React from "react";
import { FiArrowLeft, FiCornerUpLeft } from "react-icons/fi";
import BookForm from "@components/view/book/BookForm";
import TotalCost from "@components/view/book/TotalCost";
import { useRouter } from "next/router";

interface IBookContainerProps {}

const BookContainer: React.FunctionComponent<IBookContainerProps> = (props) => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const router = useRouter();

  const handleBackBtn = () => {
    router.push("search");
  };

  return (
    <div className="w-[100%] md:w-[80%] mx-auto">
      <div className="mt-[2rem] flex justify-between box-border">
        <div className="flex gap-8 items-center">
          <Button
            className="rounded-full text-lg w-10 p-0 border"
            variant="secondary"
            onClick={handleBackBtn}
          >
            <FiArrowLeft />
          </Button>
          <h2 className="text-xl tracking-tighter font-bold">Book your slot</h2>
        </div>
        <div
          className="flex gap-4 items-center justify-center pb-4 bg-accent px-6 rounded-md py-3 cursor-pointer box-border border border-transparent hover:border hover:border-primary transition-all"
          title="click to view more detail of interviewer"
        >
          <Avatar>
            <AvatarImage
              className=""
              width={"40rem"}
              src="https://github.com/shadcn.png"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="">
            <h5 className="text-md font-semibold tracking-tighter">John Doe</h5>
            <p className="text-xs font-inter text-muted-foreground tracking-wide">
              Frontend Developer
            </p>
          </div>
          <FiCornerUpLeft />
        </div>
      </div>
      <div className="flex gap-4 mt-[2rem]">
        <div className="border w-[60%] p-2 md:p-6 rounded-md">
          <BookForm />
        </div>
        <div className="border grow-[1] p-2 md:p-6 rounded-md w-[40%]">
          <TotalCost />
        </div>
      </div>
    </div>
  );
};

export default BookContainer;
