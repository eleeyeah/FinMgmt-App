import { Box, useMediaQuery, useTheme } from "@mui/material";

type Props = {};

const GridTemplateLargeScreens = `
    "a b c"
    "a b c"
    "a b c"
    "a b f"
    "d e f"
    "d e f"
    "d h i"
    "g h i"
    "g h j"
    "g h j"
`;

const gridTemplateSmallScreens = `
"a"     
"a"     
"a"     
"a"
"b"     
"b"     
"b"     
"b"
"c"     
"c"     
"c"
"d"     
"d"     
"d"
"e"     
"e"     
"f"     
"f"     
"f"
"g"
"g"
"g"
"h"
"h"
"h"
"h"
"i"
"i"
"j"
"j"



`;

const Dashboard = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");

  const { palette } = useTheme();

  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={
        isAboveMediumScreens
          ? {
              gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
              gridTemplateRows: "repeat(10, minmax(40px, 1fr))",
              gridTemplateAreas: GridTemplateLargeScreens,
            }
          : {
              gridAutoColumns: "1fr",
              gridAutoRows: "80px",
              gridTemplateAreas: gridTemplateSmallScreens,
            }
      }
    >
      <Box bgcolor="#213a60" gridArea="a"></Box>
      <Box bgcolor="#213a60" gridArea="b"></Box>
      <Box bgcolor="#213a60" gridArea="c"></Box>
      <Box bgcolor="#213a60" gridArea="d"></Box>
      <Box bgcolor="#213a60" gridArea="e"></Box>
      <Box bgcolor="#213a60" gridArea="f"></Box>
      <Box bgcolor="#213a60" gridArea="g"></Box>
      <Box bgcolor="#213a60" gridArea="h"></Box>
      <Box bgcolor="#213a60" gridArea="i"></Box>
      <Box bgcolor="#213a60" gridArea="j"></Box>
    </Box>
  );
};

export default Dashboard;
