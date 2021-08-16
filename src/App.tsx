import Player from './Player'
import { Grid, makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Context from "./Context"
import { useState } from 'react';
import Scene from './Scene';

const useStyles = makeStyles({
  main_win_dimensions: {
    height: "100vh"
  },
});

const passengers = [[[700, 200], true], [[300, 300], false], [[300, 600], true], [[200, 400], false]]

const App = () => {
  const classes = useStyles();
  const [context, setContext] = useState({ "bestSolution": [], "bestDist": 100000 });
  return (
    <Context.Provider value={{ context, setContext }}>
      <Box className={classes.main_win_dimensions} alignContent="center">
        <Grid container spacing={3}>
          <Grid item xs={1}>
          </Grid>
          <Grid item xs={5}>
            <Player passengers={passengers} />
          </Grid>
          <Grid item xs={5}>
            <Scene dist={context.bestDist} passengers={passengers} route={context.bestSolution} />
          </Grid>
        </Grid>
      </Box>
    </Context.Provider>
  )
}

export default App;
