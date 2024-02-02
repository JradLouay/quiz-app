import { Topic } from "../../context/QuizContext";
import MenuItem from "./MenuItem";

const topics: Topic[] = [
  {
    title: "Html",
    icon: "src/assets/images/icon-html.svg",
    color: "#FFF0E8",
  },
  {
    title: "CSS",
    icon: "src/assets/images/icon-css.svg",
    color: "#E0FCEF",
  },
  {
    title: "Javascript",
    icon: "src/assets/images/icon-js.svg",
    color: "#EAF0FF",
  },
  {
    title: "Accessibility",
    icon: "src/assets/images/icon-accessibility.svg",
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
