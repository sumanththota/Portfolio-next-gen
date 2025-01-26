import React from "react";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experiencesData } from "../../../lib/data";
import { ColorModeContext } from "../../../../pages/_app";
import { useContext } from "react";

import "react-vertical-timeline-component/style.min.css";

// Link to github React-vertical-timeline component used: https://github.com/stephane-monnot/react-vertical-timeline

const Timeline = () => {
  const colorMode = useContext(ColorModeContext);
  return (
    <section id="experience" className=" scroll-mt-28 mb-28 sm:mb-40 ">
      <h1>My Experience</h1>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  colorMode.mode === "dark"
                    ? "radial-gradient(white 2px, transparent 0)"
                    : "radial-gradient(black 2px, transparent 0)",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  colorMode.mode === "dark"
                    ? "radial-gradient(white 2px, transparent 0)"
                    : "radial-gradient(black 2px, transparent 0)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  colorMode.mode === "dark"
                    ? "radial-gradient(white 2px, transparent 0)"
                    : "radial-gradient(black 2px, transparent 0)",

                fontSize: "1.5rem",
              }}
            >
              <h3 className=" font-semibold capitalize ">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="  !mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Timeline;
