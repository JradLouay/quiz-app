import MenuItem from "./MenuItem";

let topics: any[] = [
  {
    title: "Javascript",
    icon: "",
  },
  {
    title: "HTML",
    icon: "",
  },
  {
    title: "CSS",
    icon: "",
  },
  {
    title: "Accessibility",
    icon: "",
  },
];

function TopicsMenu() {
  return (
    <>
      {topics.map((topic) => (
        <MenuItem topic={topic} />
      ))}
    </>
  );
}

export default TopicsMenu;
