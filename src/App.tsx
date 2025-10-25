import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Grid
      templateAreas={{
        lg: `"nav nav" "aside main"`,
        base: `"nav" "main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem
        area="aside"
        bgColor="gold"
        display={{ base: "none", lg: "block" }}
      >
        aside
      </GridItem>
      <GridItem area="main" bgColor="dodgerblue">
        main
      </GridItem>
    </Grid>
  );
};

export default App;
