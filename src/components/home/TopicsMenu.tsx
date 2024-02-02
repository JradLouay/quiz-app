import { Topic } from "../../context/QuizContext";
import MenuItem from "./MenuItem";

const topics: Topic[] = [
  {
    title: "Html",
    icon: "/images/icon-html.svg",
    color: "#FFF0E8",
  },
  {
    title: "CSS",
    icon: "/images/icon-css.svg",
    color: "#E0FCEF",
  },
  {
    title: "Javascript",
    icon: "/images/icon-js.svg",
    color: "#EAF0FF",
  },
  {
    title: "Accessibility",
    icon: "/images/icon-accessibility.svg",
    color: "#F5E6FF",
  },
];

function TopicsMenu() {
  return (
    <>
      {topics.map((topic, index) => (
        <MenuItem key={index} topic={topic} />
      ))}
    </>
  );
}

export default TopicsMenu;
