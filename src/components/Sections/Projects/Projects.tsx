import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import { centeredStyles } from "../Perks/Perks";
import ProjectCard from "./ProjectCard";
import { useEffect } from "react";
import MainTitleAnimation from "../../../gsap/MainTitleAnimation";
import gsap from "gsap";
import { IProjects } from "../../../Types/Types";
import { projectsData } from "../../../lib/data";

const Projects = () => {
  useEffect(() => {
    MainTitleAnimation(".title3", ".title4");

    if (!projectsData) return;
    setTimeout(() => {
      for (let i = 0; i < projectsData.length; i++) {
        gsap.to(`.p${i}`, {
          duration: 0.8,
          transform: "translateX(0%)",
          ease: "easeIn",
          scrollTrigger: {
            trigger: `.p${i}`,
            start: "top 60%",
          },
        });
      }
    }, 100);
  }, []);

  return (
    <Box
      sx={{
        overflowX: "hidden",
      }}
    >
      <Container
        id="ProjectSection"
        maxWidth="lg"
        sx={{
          margin: "0 auto",
          py: "6em",
        }}
      >
        <Grid container>
          <Grid item sx={centeredStyles}>
            <Typography
              className="title3 t25o0"
              variant="h1"
              sx={{
                fontSize: {
                  xs: "2.2em",
                  sm: "2.5em",
                  md: "3em",
                },
              }}
              fontWeight="600"
            >
              Successful Projects I&apos;m Proud Of
            </Typography>
          </Grid>
          <Box
            sx={{
              ...centeredStyles,
              mt: "3em",
            }}
          >
            {projectsData ? (
              projectsData.map((project: any, index: number) => {
                return (
                  <ProjectCard
                    isReversed={index % 2 === 0 ? true : false}
                    img={project.image}
                    className={`p${index}`}
                    repoUrl={project.link}
                    title={project.title}
                    description={project.description}
                  />
                );
              })
            ) : (
              <Typography
                variant="h1"
                fontSize="1em"
                fontWeight="500"
                color="red"
              >
                There was an error loading the projects.
              </Typography>
            )}
          </Box>
          {/* <Box
            sx={{
              margin: "0 auto",
              mt: "3em",
            }}
          >
            <Tooltip title="More Projects Soon">
              <Button
                className="loadMore"
                variant="contained"
                sx={{
                  opacity: 0,
                  padding: ".5em 3.5em",
                  background: "transparent",
                  border: "1px solid",
                  color: "#0092ff",
                  ":hover": {
                    border: "1px solid transparent",
                  },
                }}
              >
                Load More
              </Button>
            </Tooltip>
          </Box> */}
        </Grid>
      </Container>
      <Divider className="divider" />
    </Box>
  );
};

export default Projects;
