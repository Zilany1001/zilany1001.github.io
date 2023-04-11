import React from "react";
import { QuoteAuthor, QuoteText } from "@/components/molecules";

const Quote: React.FC = () => {
  return (
    <section
      className={"relative mt-24 flex flex-col items-center justify-center text-center md:mx-auto lg:w-11/12 xl:w-9/12"}
    >
      <QuoteText>Data will talk to you if you are willing to listen.</QuoteText>
      <QuoteAuthor>Jim Bergeson</QuoteAuthor>
    </section>
  );
};

export default Quote;
