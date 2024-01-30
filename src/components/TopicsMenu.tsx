import MenuItem from "./MenuItem";

const topics: object[] = [
  {
    title: "Bash",
    icon: "",
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
