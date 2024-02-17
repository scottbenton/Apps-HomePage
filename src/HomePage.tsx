import "./index.scss";
import { ScottBentonLogo } from "./assets/ScottBentonLogo";
import DeveloperSVG from "./assets/developer.svg";
import { LoginSection } from "./components/LoginSection";

export default function HomePage() {
  return (
    <div className={"flex-grow max-w-screen-md mx-auto flex flex-col w-full"}>
      <header
        className={"flex items-center justify-between py-2 px-4 border-b"}
      >
        <div className={"flex items-center"}>
          <ScottBentonLogo />
          <h1 className={"ml-3 text-3xl font-bold text-home-500"}>
            Scott{"'"}s Apps
          </h1>
        </div>
        <LoginSection />
      </header>
      <div
        className={
          "flex-grow flex flex-col items-center justify-center text-4xl font-semibold text-gray-600"
        }
      >
        <img
          src={DeveloperSVG}
          alt={"Drawing of a man coding"}
          className={"max-w-xs w-full"}
        />
        <p className={"mt-8"}>Coming Soon!</p>
      </div>
    </div>
  );
}
