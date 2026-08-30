import Image from "next/image";
import powerplay from "../../../../../public/robots/powerplay.png";

export const info = [
  {
    name: "Decode",
    image: powerplay,
    description: 'In the 2025-2026 game Decode, two alliances engage in a shooter-style competition where teams launch spherical artifacts into alliance-specific goals. These artifacts, 36 total, are composed of 24 purple and 12 green. Robots must collect and launch said artifacts from launch zones into corner goals, which then roll into ramps to form specific patterns or motifs for extra points. The obelisk, revealed at the start of each match, shows the motif for that game, and april tags are placed to identify each launch zone. In the endgame, robots park in an 18x18 inch square base, earning extra points depending on whether the robot is partially, or fully parked in the zone.
'
  },
  {
    name: "Into the Deep",
    image: powerplay,
    description: `The name of the 2024-2025 game is Into the Deep, where two alliances composed of two robots compete to score as many game pieces as possible. Game pieces can be two types, specimens, or samples. Specimens are scored on the colored bars found in the middle area of the field called the submersible. Specimens are created by the human player, found in the observation zone, who takes samples and attaches a hook that allows it to be attached to the bars. Samples are also found in the submersible zone, and are scored in each respective team's buckets. In the end game, teams can earn points by touching the bar, hanging on the first bar, or hanging on the second bar. `,
  },

  {
    name: "Centerstage",
    image: powerplay,
    description: `In the 2023-2024 game Centerstage, robots attempted to score colored hexagonal game pieces called pixels onto a board called the backdrop. In the autonomous period, teams would preload their robot with pixels and could score them on the backdrop. During the teleop period, pixels would be obtained in through the human player which placed them down. The backdrop contained three lines, which gave teams bonus points for stacking pixels above the line. Another way of earning bonus points was through making mosaics, or three pixels that were all the same color, or all different colors (excluding white). Teams were able to make 1 of each of the 4 different mosaics, but in order for them they count they had to be covered in white pixels. During the endgame period, teams could score bonus points by shooting their drones, one small paper airplane that could land in three zones, each with increasing distance. Lastly, teams could hang on the middle of the field on the truss, which would gain them additional points.`,
  },

  {
    name: "Power Play",
    image: powerplay,
    description: `In 2022’s PowerPlay, two alliances consisting of two teams each competed to manipulate cones and score them on a grid system that was divided into different levels and areas. The challenge involved stacking these cones on top of junctions, which were essentially poles with scoring areas, in order to earn points. Teams could earn additional points through autonomous and teleoperated tasks, with an important focus on endgame strategies in which robots could "park" on the grid in specific ways to earn bonus points.`,
  },

  {
    name: "Freight Frenzy",
    image: powerplay,
    description: `In the 2021–2022 season Freight Frenzy, FTC Team 479 designed a low-profile robot capable of traversing barriers and efficiently cycling freight into the alliance shipping hub. The robot used a custom intake and lift system to handle both cubes and balls. During autonomous, it spun the duck carousel and delivered preloaded freight. In endgame, it consistently parked in the warehouse and sometimes delivered last-minute freight. Our programming team optimized trajectory planning to reduce cycle time across a cluttered field.`,
  },

  {
    name: "Ultimate Goal",
    image: powerplay,
    description: `During Ultimate Goal in 2020–2021, Team 479 focused on building a precise ring-launching robot using a custom flywheel shooter. The robot could shoot power shots and upper tower goals accurately from various field positions. Autonomous included consistent triple power shot hits and initial ring delivery. Tele-op centered around rapid ring collection with a wide intake and minimal jam design. In endgame, the robot parked reliably while our drivers focused on controlling center field traffic.`,
  },

  {
    name: "Skystone",
    image: powerplay,
    description: `In Skystone (2019–2020), FTC 479 developed a compact arm-based robot to grab Skystones and stack them quickly on the alliance foundation. Our autonomous consistently identified and retrieved Skystones, placing them with precision. During tele-op, we focused on high stacking while coordinating with our alliance to move the foundation. We implemented custom odometry to improve alignment and minimize drift. Endgame strategies involved repositioning the foundation and parking under the alliance bridge.`,
  },

  {
    name: "Rover Ruckus",
    image: powerplay,
    description: null,
  },

  {
    name: "Relic Recovery",
    image: powerplay,
    description: null,
  },

  {
    name: "Velocity Vortex",
    image: powerplay,
    description: null,
  },

  {
    name: "Res-Q",
    image: powerplay,
    description: null,
  },

  {
    name: "Cascade Effect",
    image: powerplay,
    description: null,
  },

  {
    name: "Block Party!",
    image: powerplay,
    description: null,
  },

  {
    name: "Ring It Up!",
    image: powerplay,
    description: null,
  },

  {
    name: "Bowled Over!",
    image: powerplay,
    description: null,
  },

  {
    name: "Get Over It!",
    image: powerplay,
    description: null,
  },

  {
    name: "Hot Shot!",
    image: powerplay,
    description: null,
  },

  {
    name: "Face Off",
    image: powerplay,
    description: null,
  },

  {
    name: "Quad Quandary",
    image: powerplay,
    description: null,
  },
];

export default function Info({ active }: { active: number }) {
  return (
    <div className="xl:max-w-4xl flex flex-col items-center">
      <div className="text-center -translate-y-12 mb-4 text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl pt-20">
        <span className="relative whitespace-nowrap text-blue-500">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          {info[active].name}
        </span>
      </div>
      <Image
        src={info[active].image}
        alt="Image: team 479's powerplay (2023 season) robot in a render"
      />

      <div className="relative pt-20">
        <div className="border-l-[1px] border-slate-300 h-36 right-1/2 absolute top-0" />
        <div className="p-10 bg-white shadow-md rounded-lg">
          <p className="max-w-3xl text-base tracking-wide text-slate-700">
            {info[active].description}
          </p>
        </div>
      </div>

      <div className="border-t-[1px] w-3/4 ml-auto my-8 mr-auto border-slate-300" />
    </div>
  );
}
