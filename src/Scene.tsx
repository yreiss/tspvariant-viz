import { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import { Stage } from 'react-konva';
import Points from './Points'
import Solution from './Solution';
import Box from '@material-ui/core/Box';

const routes = [
    [[100, 100], [700, 200], [300, 300], [300, 600], [200, 400]],
    [[100, 100], [300, 300], [700, 200], [300, 600], [200, 400]],
    [[300, 300], [700, 200], [300, 600], [200, 400], [100, 100]],
    [[100, 100], [300, 300], [700, 200], [300, 600], [200, 400]],
    [[300, 300], [700, 200], [300, 600], [200, 400], [100, 100]],
]

const Scene = () => {
    const [pos, setPos] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [playInterval, setPlayInterval] = useState(1000);

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
        return () => clearInterval(interval);
    }, [isPlaying, pos, playInterval]);

    const next = () => {
        if (pos < routes.length - 1) {
            console.log("next called and advanced");
            setPos(pos + 1);
        }
    }

    const reset = () => {
        setPos(0);
    }

    const play = () => {
        setIsPlaying(true)
    }

    const handleChangeInterval = (event: any) => {
        setPlayInterval(event.target.value as number);
    }

    return (
        <Box>
            <Button onClick={next}> Next </Button>
            <Button onClick={reset}> Reset </Button>
            <Button onClick={play}> Play </Button>
            <TextField value={playInterval} label="playback interval" onChange={(handleChangeInterval)} />
            <Stage width={1000} height={1000}>
                <Points />
                <Solution route={routes[pos]} />
            </Stage>
        </Box>
    )
}

export default Scene;