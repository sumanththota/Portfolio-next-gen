import React, { useContext } from "react";
import { Box } from "@mui/material";
import { ColorModeContext } from "../../../../pages/_app";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
// Use AiOutlineTwitter for the latest X icon

const socials = [
  {
    name: "X",
    icon: FaXTwitter,
    link: "https://twitter.com/sum12speak",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://linkedin.com/in/sumanththota",
  },
  { name: "GitHub", icon: FaGithub, link: "https://github.com/sumanththota" },
  {
    name: "LeetCode",
    icon: SiLeetcode,
    link: "https://leetcode.com/sumanththota",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://instagram.com/sumanth_starboy",
  },
];

const Socials = () => {
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row", // Align items horizontally
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            margin: "0 1.5rem",
            color: colorMode.mode === "light" ? "#333" : "#fff",
          }}
        >
          {React.createElement(social.icon, {
            style: {
              fontSize: "2rem",
            },
          })}
        </a>
      ))}
    </Box>
  );
};

export default Socials;
