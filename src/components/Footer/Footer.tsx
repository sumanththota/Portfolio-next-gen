import gsap from "gsap";
import { Box, Typography, Divider, Grid } from "@mui/material";

import Link from "next/link";
import { useRouter } from "next/router";
import Socials from "../Sections/Socials/Socials";
function Copyright() {
  return (
    <>
      <Divider />
      <Box
        maxWidth="lg"
        sx={{
          textAlign: "center",
          margin: "1em auto",
          alignItems: "center",
        }}
      >
        <Socials />
        <Typography
          variant="h1"
          fontSize="1em"
          sx={{
            marginTop: "2em", // Add space after Socials
          }}
        >
          {"Designed by Vito Medlej | Revised by Sumanth Thota "}
          <Link
            color="inherit"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/VitoMedlej/free-developer-portfolio-template"
          >
            Original
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Box>
    </>
  );
}
const styles = {
  mt: "1em",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  flexWrap: "wrap",
  color: "white",
};

export default Copyright;
