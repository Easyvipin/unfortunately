import BookContainer from "@src/Containers/BookContainer";
import React from "react";

interface IBookProps {}

const Book: React.FunctionComponent<IBookProps> = (props) => {
  return (
    <>
      <BookContainer />
    </>
  );
};

export default Book;
