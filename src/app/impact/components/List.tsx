import Image from "next/image";
import React from "react";

export default function List() {
  return (
    <div className="relative mb-10 mt-20">
      {[
        {
          title: "FIRST Lego League",
          subtitle: "Mentoring Other FIRST Teams",
          description:
            "Our team mentors FLL teams. FIRST Lego League is the robotics league for elementary and middle schoolers. Last year, we worked with Stuy Pulse to mentor FLL team 69724 Alpha&Omega, a community FLL team. They were a rookie team, so we helped them navigate their first year in FLL, every step of the way. Some of the alumni who have graduated from that team are planning to volunteer at future FLL events.This September, we helped present a workshop about mentoring FLL at the Cornell Tech STEM Center on Roosevelt Island. The workshop was geared towards both rookie and veteran FLL mentors, so everyone got to learn something new and gain new experience. We’ve also been mentoring FLL team Knight Creators, a Puerto Rican FLL team, through Zoom. We help them with both the innovation project and the robot game.",
          img: "/impact/lego.png",
        },
        {
          title: "At Our School",
          subtitle: "StuySplash, Educating Others",
          description:
            "Team 479 holds events at our school so we can give back to our own community. Every year, in December, all of Stuyvesant Robotics holds a conference called Stuy Splash where people from the three teams can give presentations about robotics for teams all around New York City.Around 200 people attend the conference every year. We worked together with the Stuyvesant chapter of the Society of Women Engineers, last year, to give a lesson on electrical engineering and circuits.It is important for us to encourage more women to pursue engineering and increase representation. In addition, we are actively involved in school events.We are always there to promote Stuyvesant Robotics during school open house events and alumni events.",
          img: "/impact/school.png",
        },
        {
          title: "Robot Demonstrations",
          subtitle: "Inspiring and Spreading FIRST",
          description:
            "Our team mentors FLL teams. FIRST Lego League is the robotics league for elementary and middle schoolers. Last year, we worked with Stuy Pulse to mentor FLL team 69724 Alpha&Omega, a community FLL team. They were a rookie team, so we helped them navigate their first year in FLL, every step of the way. Some of the alumni who have graduated from that team are planning to volunteer at future FLL events.This September, we helped present a workshop about mentoring FLL at the Cornell Tech STEM Center on Roosevelt Island. The workshop was geared towards both rookie and veteran FLL mentors, so everyone got to learn something new and gain new experience. We’ve also been mentoring FLL team Knight Creators, a Puerto Rican FLL team, through Zoom. We help them with both the innovation project and the robot game.",
          img: "/impact/demo.png",
        },
      ].map((item, i) => (
        <React.Fragment key={i}>
          <div className="border-l-[1px] border-slate-300 h-36 right-1/2 absolute" />
          <div className="flex pt-20 items-center">
            {i === 1 && (
              <img
                src={item.img}
                alt="placeholder"
                className="mr-6 w-2/5 rounded-lg"
              />
            )}
            <div className="p-10 bg-white shadow-md rounded-lg">
              <p className="text-blue-500 tracking-wide text-2xl mb-1 font-medium font-merinda">
                {item.title}
              </p>
              <h3 className="text-3xl tracking-wide font-medium mb-4 font-merinda">
                {item.subtitle}
              </h3>
              <p className="text-gray-500">{item.description}</p>
            </div>
            {i !== 1 && (
              <img
                src={item.img}
                alt="placeholder"
                className="ml-6 w-2/5 rounded-lg"
              />
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
