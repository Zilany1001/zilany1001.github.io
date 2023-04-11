import React from "react";
import { ButtonLink, Text, TextHighlight } from "@/components/atoms";

const HeroContent: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-y-5 md:items-start md:gap-y-8 lg:basis-3/5 xl:gap-y-10">
      <h1 className="text-2xl font-medium leading-7 tracking-tight md:text-center md:leading-10 lg:text-start lg:text-3xl xl:text-4xl 2xl:text-5xl">
        I am Zilany, a <TextHighlight>data analyst</TextHighlight> and <TextHighlight>Story-teller</TextHighlight>
      </h1>
      <Text className="w-full text-justify text-sm tracking-wide text-gray md:text-center md:text-base lg:text-start lg:text-lg xl:w-11/12 2xl:text-2xl">
      As a data analyst, my job involves analyzing data, connecting dots, and finding patterns.Then I visualize my findings to make data-driven decisions that have a positive impact on the business. Additionally, I am responsible for identifying errors and cleaning them in order to ensure the accuracy and quality of the data.
      </Text>
      <ButtonLink variant="primary" href="/assets/resume_of_zilany.pdf" className="self-end md:self-center lg:self-auto">
        Download CV
      </ButtonLink>
    </div>
  );
};

export default HeroContent;
