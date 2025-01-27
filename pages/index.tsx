import { Box, Divider } from "@mui/material";
import type { NextPage } from "next";

import Hero from "../src/components/Sections/Hero/Hero";
import Skills from "../src/components/Sections/Skills/Skills";
import Perks from "../src/components/Sections/Perks/Perks";
import Projects from "../src/components/Sections/Projects/Projects";

import { useEffect, useRef } from "react";
import CursorAnimation from "../src/gsap/CursorAnimation";
import About from "../src/components/Sections/About/About";
import Layout from "../Layout/Layout";
import { projectsData } from "../src/lib/data";
import Timeline from "../src/components/Sections/Timeline/Timeline";

const Home: NextPage = ({ iconsArray }: any) => {
  // const ball = useRef();

  // useEffect(() => {
  //   if (ball && ball.current) {
  //     CursorAnimation(ball.current);
  //   }
  // }, []);
  return (
    <Layout
      desc={`Sumanth, A  professional software engineer, Can develop all kinds of websites applications according to your needs`}
      title="Sumanth Thota Fullstack Developer Personal Portfolio Website"
    >
      <Box
        sx={{
          margin: "0 auto",
          color: "white",
        }}
      >
        <Hero />

        <Skills />

        <Projects />
        <Timeline />
        <About />

        <Box
          // ref={ball}
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
          // className="ball"
        ></Box>
      </Box>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  function removeEmpty(obj: any) {
    return Object.fromEntries(
      Object.entries(obj).filter(([_, v]) => v != null && v != false)
    );
  }
  try {
    // first, grab our Contentful keys from the .env file
    const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
    const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

    // then, send a request to Contentful (using the same URL from GraphiQL)
    const res = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${space}`,
      {
        method: "POST", // GraphQL *always* uses POST requests!
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${accessToken}`, // add our access token header
        },
        // send the query we wrote in GraphiQL as a string
        body: JSON.stringify({
          // all requests start with "query: ", so we'll stringify that for convenience
          query: `
                {
                  projectCollection {
                    items {
                      title
                      repoUrl
                      siteUrl
                      description
                      img
                    }
                  }
                  iconsCollection {
                    items {
                      filter
                      svg
                      title
                      isBackend
                    }
                  }
                }
                
                  `,
        }),
      }
    );

    // grab the data from our response
    const { data } = await res.json();
    // const data :any = {}
    if (!data || data?.length < 1) {
      throw "Error fetching data";
    }
    let iconsArray = [];
    for (let i = 0; i < data?.iconsCollection?.items.length; i++) {
      let clearedIcon = removeEmpty(data?.iconsCollection.items[i]);
      iconsArray.push(clearedIcon);
    }
    return {
      props: {
        projectsArray: data?.projectCollection.items,
        iconsArray,
      },
    };
  } catch (err) {
    console.log("err: ", err);
    return {
      props: {
        data: null,
      },
    };
  }
}
