import { Button, Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid
      templateAreas={{
        lg: `"nav nav" "aside main"`,
        base: `"nav" "main"`,
      }}
    >
      <GridItem area="nav" bgColor="coral">
        Nav
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
