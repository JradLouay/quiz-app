import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import MenuItem from "./components/MenuItem";
import Question from "./components/Question";
import ResponseList from "./components/ResponseList";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="py-[85px]">
      <div className="absolute -z-50 w-[977px] h-[977px] -top-[50%] -left-[53%] rounded-full border-[144px] border-[#EDF1F9]" />
      <div className="absolute -z-50 w-[977px] h-[977px] -bottom-[50%] -right-[53%] rounded-full border-[144px] border-[#EDF1F9]" />
      <Header />
      <div className="grid lg:grid-cols-2 gap-8 mt-[85px]">
        {/* main section Left*/}
        <div className="lg:max-w-[465px] flex flex-col justify-between gap-12 text-left">
          <Welcome />
          {/* <Question /> */}
        </div>
        {/* main section right */}
        <div className="flex gap-6 flex-col lg:max-w-[564px]">
          {/* {Array(4)
            .fill(0)
            .map((item) => (
              <MenuItem topic={item} />
            ))} */}
          <ResponseList />
        </div>
        <div className="lg:col-start-2">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default App;
