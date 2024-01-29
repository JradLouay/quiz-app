import Welcome from "./Welcome";
import TopicsMenu from "./TopicsMenu";

function HomeComponent() {
  return (
    <div className="grid lg:grid-cols-2 gap-y-8 mt-[49px] md:mt-[85px]">
      <div className="lg:max-w-[465px] flex flex-col justify-between gap-10 md:gap-12 text-left">
        <Welcome />
      </div>
      <div className="flex gap-6 flex-col lg:max-w-[564px]">
        <TopicsMenu />
      </div>
    </div>
  );
}

export default HomeComponent;
