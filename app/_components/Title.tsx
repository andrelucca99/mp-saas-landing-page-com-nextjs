import { ElementType, JSX } from "react";

interface ITitleProps {
  text: string;
  element: keyof JSX.IntrinsicElements;
  customClass?: string;
}

const TitleSection: React.FC<ITitleProps> = ({ text, element: Tag, customClass }) => {
	const titleStyled = Tag === "h1"
						? "md:text-6xl text-2xl font-bold"
						: `${customClass ?? 'font-normal'} text-xl md:text-4xl text-center`;

  return <Tag className={titleStyled}>{text}</Tag>;
};

export default TitleSection;