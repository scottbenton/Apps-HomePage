import "./index.scss";
import { ScottBentonLogo } from "./assets/ScottBentonLogo";
import DungeonManagerSVG from "./assets/DungeonManager.svg";
import IronswornSVG from "./assets/IronswornSheets.svg";
import IronFellowshipSVG from "./assets/IronFellowship.svg";
import CrewLinkSVG from "./assets/CrewLink.svg";
import MiseSVG from "./assets/Mise.svg";
import { LoginSection } from "./components/LoginSection";
import { Link } from "react-router-dom";

interface AppLink {
  name: string;
  href: string;
  image: string;
}

export const appLinkSections: {
  label: string;
  links: AppLink[];
}[] = [
  {
    label: "Released Applications",
    links: [
      {
        name: "Iron Fellowship",
        href: "https://iron-fellowship.scottbenton.dev",
        image: IronFellowshipSVG,
      },
      {
        name: "Crew Link",
        href: "https://starforged-crew-link.scottbenton.dev",
        image: CrewLinkSVG,
      },
      {
        name: "Mise",
        href: "https://mise.scottbenton.dev",
        image: MiseSVG,
      },
    ],
  },
  {
    label: "Work in Progress Applications",
    links: [
      {
        name: "Dungeon Manager",
        href: "/dungeon-manager",
        image: DungeonManagerSVG,
      },
      {
        name: "Ironsworn Character Sheet App",
        href: "/ironsworn",
        image: IronswornSVG,
      },
    ],
  },
];

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
      <div className={"px-4"}>
        {appLinkSections.map((section) => (
          <div key={section.label}>
            <h2 className={"text-xl text-home-700 uppercase font-bold mt-8"}>
              {section.label}
            </h2>
            <div className={"grid gap-2 grid-cols-1 sm:grid-cols-2 mt-2"}>
              {section.links.map((app) => (
                <Link
                  to={app.href}
                  key={app.name}
                  className={
                    "rounded-lg border bg-white text-gray-700 overflow-hidden relative"
                  }
                >
                  <div className="absolute inset-0 opacity-0 hover:opacity-40 bg-gray-700 transition-opacity duration-200 ease-in-out" />
                  <img
                    src={app.image}
                    alt={app.name}
                    className={"object-cover aspect-video w-full"}
                  />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
