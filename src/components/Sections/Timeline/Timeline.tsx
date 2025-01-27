import React, { useRef } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
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
  const ref = useRef();
  const colorMode = useContext(ColorModeContext);
  return (
    <section id="experience" className=" scroll-mt-28 mb-28 sm:mb-40 ">
      <Typography
        variant="h1"
        sx={{
          fontSize: {
            xs: "2.2em",
            sm: "2.5em",
            md: "3em",
          },
          color: colorMode.mode === "dark" ? "white" : "black",
          textAlign: "center",
          marginBottom: "1em",
        }}
        fontWeight="600"
      >
        My Experience
      </Typography>
      <VerticalTimeline
        lineColor={
          colorMode.mode === "dark" ? "rgba(255,255,255,0.1)" : "#9ca3af"
        }
      >
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  colorMode.mode === "light"
                    ? "#f3f4f6"
                    : "rgba(255,255,255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  colorMode.mode === "light"
                    ? "0.4rem solid #9ca3af "
                    : "0.4rem solid rgba(255,255,255,0.5)  ",
              }}
              icon={React.cloneElement(item.icon, {
                style: {
                  fontSize: "1.5rem",
                  color: colorMode.mode === "light" ? "#333" : "#fff",
                },
              })}
              iconStyle={{
                background:
                  colorMode.mode === "light"
                    ? "white"
                    : "rgba(255,255,255,0.15)",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: colorMode.mode === "dark" ? "white" : "black" }}
                fontWeight="bold"
              >
                {item.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: colorMode.mode === "dark" ? "white" : "black",
                  marginTop: 0,
                }}
              >
                {item.location}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: colorMode.mode === "dark" ? "white" : "black",
                  marginTop: "0.25rem",
                }}
              >
                {item.description}
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: colorMode.mode === "dark" ? "white" : "black" }}
              >
                {item.date}
              </Typography>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Timeline;
