import Welcome from "./home/Welcome";
import TopicsMenu from "./home/TopicsMenu";

function HomeComponent() {
  return (
    <div className="grid gap-y-8 lg:grid-cols-2">
      <div className="flex flex-col justify-between gap-10 text-left md:gap-12 lg:max-w-[465px]">
        <Welcome />
      </div>
      <div className="flex flex-col gap-6 lg:max-w-[564px]">
        <TopicsMenu />
      </div>
    </div>
  );
}

export default HomeComponent;
