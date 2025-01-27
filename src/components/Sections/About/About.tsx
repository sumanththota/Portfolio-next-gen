import { Container, Box, Grid } from "@mui/material";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import ReadMore from "../ReadMore/ReadMore";
import { ColorModeContext } from "../../../../pages/_app";
import { useContext } from "react";
import { useRef, useEffect } from "react";
import HeroSectionAnimation from "../../../gsap/HeroSectionAnimation";
import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

const About = () => {
  const ref = useRef();
  const q = gsap.utils.selector(ref);
  gsap.registerPlugin(ScrollToPlugin);
  useEffect(() => {
    HeroSectionAnimation(q);
  }, []);
  const colorMode = useContext(ColorModeContext);
  return (
    <>
      <Container
        id="about"
        maxWidth="lg"
        sx={{
          margin: "0 auto",
          py: "6em",
        }}
      >
        <Grid
          container
          sx={{
            justifyContent: {
              sm: "center",
              md: "space-between",
            },
          }}
        >
          <Grid item xs={12} sm={12} md={4} lg={5}>
            <Box
              className="mainBox"
              sx={{
                display: "flex",

                maxWidth: "400px",
                width: "100%",
                height: "450px",
                margin: "0 auto",
                boxShadow: {
                  xs: "-.5em 1.5em 0px #0092ff",
                  sm: "-1.5em 1.5em 0px #0092ff",
                },
                position: "relative",
              }}
            >
              <Image
                style={{
                  opacity: 1,
                  borderRadius: "6px",
                  zIndex: "1",
                }}
                alt="Personal Image"
                className="img1 "
                layout="fill"
                src={"/denver.jpg"}
              />

              <Box
                className="gradientBg"
                sx={{
                  width: "100px",
                  height: "100px",
                  zIndex: "0",
                  position: "absolute",
                  right: {
                    xs: "-4%",
                    sm: "90%",
                  },

                  bottom: "-5%",
                  background: "transparent",
                  backgroundImage: "radial-gradient(white 2px, transparent 0)",
                  backgroundSize: "15px 13px",
                }}
              ></Box>
              <Box
                className="quoteBoxBottom"
                style={{
                  opacity: 1,
                  borderRadius: "7px",
                  zIndex: "1",
                }}
                sx={{
                  zIndex: "2",
                  position: "absolute",

                  width: "100%",
                  left: {
                    xs: "0%",
                    sm: "40%",
                  },
                  top: "100%",
                  overflow: "hidden",
                  opacity: 1,
                  background: "#5C4033",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "300",
                    fontSize: ".85em",
                    padding: "1em",
                  }}
                >
                  {"Buffalo Mountain, Colorado - ^13,000 ft"}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={7.5} lg={7}>
            <Box
              sx={{
                pb: ".5em",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    xs: "2.2em",
                    sm: "2.5em",
                    md: "3em",
                  },
                  py: ".5em",
                  pt: {
                    xs: "1.8em",
                    md: 0,
                  },
                }}
                fontWeight="600"
              >
                About Me, Im Sumanth Thota
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  maxWidth: "570px",
                  fontSize: {
                    xs: ".8em",
                    sm: "1em",
                  },
                }}
              >
                A software developer. I first started coding when I was 18. My
                curiosity about how reality works led me to explore physics,
                which eventually sparked my interest in programming.
              </Typography>
            </Box>
            <Typography
              variant="h2"
              sx={{
                maxWidth: "570px",
                fontSize: {
                  xs: ".8em",
                  sm: "1em",
                },
                pb: ".5em",
              }}
            >
              Being self-taught has given me a deep appreciation for the work
              and dedication of engineers and scientists; Business and
              technology are both my passions.
            </Typography>
            <ReadMore>
              I enjoy running, hitting the gym, and following space exploration.
              Climbing and Backpacking is one of my favorite things to do which
              keeps my spirits high. Attending Psytrance Music Festivals once a
              year is must.
            </ReadMore>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default About;
