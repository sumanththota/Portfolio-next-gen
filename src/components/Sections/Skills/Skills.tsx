import React, { useContext } from "react";
import { Grid, Box, Typography } from "@mui/material";
import { ColorModeContext } from "../../../../pages/_app";
import { skillsData } from "../../../lib/data";

const Skills = () => {
  const colorMode = useContext(ColorModeContext);

  return (
    <Grid
      container
      id="Skills"
      className="flex auto"
      sx={{
        justifyContent: "center", // Center horizontally
        zIndex: "10",
        pb: 12,
      }}
    >
      <Box
        className="auto col text-center flex center"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          className="fade-in-text flex center text-center auto skills-title"
          sx={{
            fontWeight: 900,
            fontSize: { xs: "3em", sm: "3em", md: "4em" },
            textAlign: "center",
            color: colorMode.mode === "dark" ? "white" : "black",
          }}
        >
          My Technical Skills
        </Typography>
        <Typography
          className="fade-in-text color3 text-center  skills-subtitle  "
          sx={{
            fontWeight: 200,
            pb: 4,
            fontSize: { xs: ".9em", sm: ".85em", md: "1em" },
          }}
        >
          My Expertise and technical abilities that I have acquired over the
          years
        </Typography>
      </Box>

      <Box
        sx={{
          maxWidth: "lg",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
        }}
        className="flex row gap2 auto wrap center fade-in-text"
      >
        {skillsData.map((skill, index) => (
          <Box
            key={skill.name}
            className="flex row tech-item skill-item"
            sx={{
              display: "flex",
              padding: 0.3,
              border: "1px solid #7e7e7e",
              gap: 1,
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                  colorMode.mode === "light"
                    ? "white"
                    : "rgba(255,255,255,0.15)",
                padding: "0.5rem",
                borderRadius: "50%",
              }}
            >
              {React.createElement(skill.icon, {
                style: {
                  fontSize: "1.5rem",
                  color: colorMode.mode === "light" ? "#333" : "#fff",
                },
              })}
            </Box>
            <Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: colorMode.mode === "light" ? "#333" : "#fff",
                }}
              >
                {skill.name}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Grid>
  );
};

export default Skills;
