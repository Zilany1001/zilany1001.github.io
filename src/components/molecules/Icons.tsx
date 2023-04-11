import { Icon } from "@/components/atoms";
import type { IconType } from "react-icons";
import React from "react";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";

type Item = {
  iconName: IconType;
  url: string;
};

const items: Item[] = [
  {
    iconName: AiFillGithub,
    url: "https://github.com/Zilany1001"
  },
  {
    iconName: AiFillFacebook,
    url: "https://www.facebook.com/zilany.choudhuryii/"
  },
  {
    iconName: AiOutlineInstagram,
    url: "https://instagram.com/_xilany_?igshid=YmMyMTA2M2Y="
  },
  {
    iconName: AiFillLinkedin,
    url: "https://www.linkedin.com/in/abdul-kader-zilany-21b59a235/"
  }
];

const Icons: React.FC = () => {
  return (
    <>
      {items.map(({ iconName, url }, i) => (
        <a key={i} href={url} target="_blank" rel="noreferrer" aria-label="Visit my social media">
          <Icon iconName={iconName} />
        </a>
      ))}
    </>
  );
};

export default Icons;
