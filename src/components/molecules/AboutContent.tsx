import React from "react";
import { Dots, Text } from "@/components/atoms";

const contents = [
  "I'm excited that you found this little webpage in this big big beautiful world. Hope you will like it.",
  "My work process :I collect data for and measuring them based on an organization's goal.Then Clean data and handle errors with highest priority using Excel, Power BI, and SQL.I am specialized in analyzing data. Results, trends and recommendations are clearly presented in reports or tools.I create interactive Dashboards, Reports which can be used and shared internally or publicly, Also I work on-spot ad-hoc reporting.I often tell story from the findings of data. To unwrap the insights, I need to ask the right questions and data give me a story to tell.",
  " ",
  " I put hundred percent into the things I love and I love to play with data",
  "What you will learn about me is that I am loyal and insightful. Data analyst and innovative thinker with a strong analytical mindset to understand new technologies.I present and visualize data in a way that non-techies will understand",];

const AboutContent: React.FC = () => {
  return (
    <div className="relative flex flex-col gap-y-6 text-sm font-thin tracking-tight text-gray md:basis-1/2 md:text-base">
      {contents.map((content, i) => (
        <Text key={i} className="leading-6">
          {content}
        </Text>
      ))}
      <Dots
        size={16}
        className="absolute top-12 right-3 -z-10 rotate-12 grid-cols-4 gap-2 md:-top-12 md:right-20 md:gap-4 lg:-top-20 lg:right-0 xl:-top-24"
      />
      <Dots
        size={20}
        className="absolute -bottom-[4.5rem] -left-2 -z-20 -rotate-12 grid-cols-5 gap-x-5 gap-y-3 md:left-20 lg:-bottom-24 lg:-left-12 xl:-bottom-32 xl:-left-24"
      />
    </div>
  );
};

export default AboutContent;
