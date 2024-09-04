import { Tab } from "./Tab";

const TopHalf = () => (
  <div
    className="flex-1 flex flex-col justify-start items-center bg-customGray rounded-2xl m-4"
    style={{
      boxShadow: "5.67px 5.67px 3.78px 0px #00000066",
    }}
  >
    <div className="relative w-7/6">
      <img
        src={require("./icons/question.png")}
        alt="Outside Tab Image"
        className="absolute top-5 -left-9 w-6 h-6"
      />
      <div className="bg-tabColor rounded-3xl mt-4 p-2">
        <Tab />
      </div>
    </div>

    <div className="relative w-full pr-11 mt-5 mb-5">
      <img
        src={require("./icons/more.png")}
        alt="Left Side Image"
        className="absolute mt-[3em] left-3 w-6 h-8"
      />
      <p className="text-[20px] font-normal pl-16 text-pColor">
        Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working
        at this awesome company for 3 years now.
        <div>
          <p className="mt-4">
            I was born and raised in Albany, NY & have been living in Santa
            Carla for the past 10 years with my wife Tiffany and my 4-year-old
            twin daughters - Emma and Ella. Both of them are just starting
            school, so my calendar is usually blocked between 9-10 AM. This is
            a...
          </p>
        </div>
      </p>
    </div>
  </div>
);

export default TopHalf;
