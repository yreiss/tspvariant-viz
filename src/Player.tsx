import { Box, Button, makeStyles, TextField } from '@material-ui/core';
import React, { useEffect, useState, useContext } from 'react';
import Scene from './Scene'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PauseIcon from '@material-ui/icons/Pause';
import Context from "./Context";


const routes = [
    [[100, 100], [700, 200], [300, 300], [300, 600], [200, 400]],
    [[100, 100], [300, 300], [700, 200], [300, 600], [200, 400]],
    [[300, 300], [700, 200], [300, 600], [200, 400], [100, 100]],
    [[100, 100], [300, 300], [700, 200], [300, 600], [200, 400]],
    [[300, 300], [700, 200], [300, 600], [200, 400], [100, 100]],
]

const useStyles = makeStyles({
    button: {
        background: "none",
        border: "none",
        '&:hover': {
            color: "blue",
        },
    },
    slider: {
        paddingTop: 18,
    },
});

const calcDist = (route: any) => {
    let dist = 0;
    for (let i = 0; i < route.length - 1; i++) {
        const p1 = route[i];
        const p2 = route[i + 1];
        dist += Math.sqrt(Math.pow(p2[0] - p1[0], 2) + Math.pow(p2[1] - p1[1], 2))
    }
    return dist;
}

interface IProps {
    passengers: any
}

const Player: React.FC<IProps> = ({ passengers }) => {
    const [pos, setPos] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [playInterval, setPlayInterval] = useState(1000);
    const [curDist, setCurDist] = useState(0)
    const classes = useStyles();
    const myContext = useContext(Context) as any;

    useEffect(() => {
        const interval = setInterval(() => {
            if (isPlaying && pos < routes.length - 1) {
                setPos(pos + 1);
            }
            else {
                setIsPlaying(false);
            }
        }, playInterval);
        if (!isPlaying) {
            clearInterval(interval);
        }

        let dist = calcDist(routes[pos]);
        setCurDist(dist);
        if (dist && dist < myContext.context.bestDist) {
            myContext.setContext({ "bestSolution": routes[pos], "bestDist": dist })
        }

        return () => clearInterval(interval);
    }, [isPlaying, pos, playInterval, myContext]);

    const next = () => {
        if (pos < routes.length - 1) {
            setPos(pos + 1);
        }
    }

    const prev = () => {
        if (pos > 0) {
            setPos(pos - 1);
        }
    }

    const reset = () => {
        setPos(0);
    }

    const togglePlay = () => {
        setIsPlaying(!isPlaying)
    }

    const handleChangeInterval = (event: any) => {
        setPlayInterval(event.target.value as number);
    }


    return (
        <div>
            <Box>
                <Scene passengers={passengers} route={routes[pos]} dist={curDist} />
            </Box>
            <Box display="flex" flexDirection="row">
                {/* <Button onClick={next}> Next </Button> */}
                <Button onClick={reset}> Reset </Button>
                <Button onClick={prev} className={classes.button}><SkipPreviousIcon /></Button>
                <Button onClick={togglePlay} className={classes.button}>{isPlaying ? <PauseIcon /> : <PlayArrowIcon />}</Button>
                <Button onClick={next} className={classes.button}><SkipNextIcon /></Button>
                <TextField value={playInterval} label="playback interval" onChange={(handleChangeInterval)} />
            </Box>
        </div>
    )
}

export default Player;