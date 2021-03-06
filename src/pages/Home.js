import React, { useState } from 'react';
import Feed from '../components/Feed';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Rightbar from '../components/Rightbar';
import Sidebar from '../components/Sidebar';
import { Box, Stack } from '@mui/material';
import { createTheme } from "@mui/material";
import ThemeProvider from '@mui/material/styles/ThemeProvider';

const Home = () => {
  // state for light/dark mode, passed as object property value to theme and as props to components
  const [mode, setMode] = useState("light");

  // customizing MUI's default theme
  const theme = createTheme({
    palette: {
      recipediaOrange: {
        main: "#fb8c00",
        dark: "#911e1a"
      },
      background: {
        main: "hsl(39, 100%, 93%)",
        dark: "#2b2828"
      },
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={mode === "light" ? "background.main" : "background.dark"} color={"text.primary"}>
        {/* Box is a div, same for Container */}
        <Navbar mode={mode} />
        {/* Stack is a grid with only 1 row */}
        <Stack 
          direction="row" 
          justifyContent="space-between"
          spacing={2}
        > 
          {/* Sidebar = 1 unit, Feed 4x times bigger, Rightbar 2x times bigger; 
          flex determines width within stack, somewhat like fr in grid */}
          <Sidebar flex={1} mode={mode} setMode={setMode} />
          <Feed flex={4} />
          <Rightbar flex={2} mode={mode} />
        </Stack>
        <Footer />
    </Box>
  </ThemeProvider>
  );
}

export default Home;
