import Scene from './Scene'
import { Grid, makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { Stage } from 'react-konva';
import Points from './Points';
import Solution from './Solution';

const useStyles = makeStyles({
  main_win_dimensions: {
    height: "100vh"
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <Box className={classes.main_win_dimensions}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Scene />
        </Grid>
        <Grid item xs={6}>
          <p> Best: 24.7 </p>
          <Stage width={1000} height={1000}>
            <Points />
            <Solution route={[[100, 100], [700, 200], [300, 300], [300, 600], [200, 400]]} />
          </Stage>
        </Grid>
      </Grid>
    </Box>
  )
}

export default App;
