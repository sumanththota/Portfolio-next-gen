import { AppBar, Typography, Button, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { useContext } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { INavbar } from "../../Types/Types";
import { ColorModeContext } from "../../../pages/_app";
import Logo from "../Logo/Logo";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import FilterHdrIcon from "@mui/icons-material/FilterHdr";
import HikingIcon from "@mui/icons-material/Hiking";
import { useRouter } from "next/router";
import Socials from "../Sections/Socials/Socials";

export const Links = [
  {
    text: "Home",
    Icon: FilterHdrIcon,
    url: "/",
  },
  {
    text: "About Me",
    Icon: DownhillSkiingIcon,
    url: "/",
  },
  {
    text: "Projects",
    Icon: HikingIcon,
    url: "/",
  },
  {
    text: "Theme",
    Icon: DarkModeIcon,
    url: "/",
    isToggleTheme: true,
  },
];

const Navbar = ({ toggleDrawer, navbarSx }: INavbar) => {
  const colorMode = useContext(ColorModeContext);
  const color = colorMode.mode === "light" ? "black" : "white";
  const router = useRouter();
  return (
    <AppBar
      sx={{
        background: "transparent",
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        py: ".45em",
        zIndex: "555",
        backdropFilter: "blur(1px)",
        position: "fixed",
        ...navbarSx,
      }}
      position="static"
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0 auto",
        }}
        maxWidth="lg"
      >
        <Logo color={color} toggleDrawer={toggleDrawer} colorMode={colorMode} />
        {/* <Button 
                onClick={()=>router.push('/blog')}
                sx={{mr:'1em',fontWeight:'500',':hover':{color:'#0092ff'},color:color}}>
                </Button> */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            sx={{
              color,
              ":hover": {
                color,
              },
              ":focus": {
                color,
              },
            }}
            onClick={() => toggleDrawer()}
            size="large"
            edge="start"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Container>
    </AppBar>
  );
};
export default Navbar;
