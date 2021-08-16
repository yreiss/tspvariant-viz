import React from 'react';
import { Stage } from 'react-konva';
import Passengers from './Passengers'
import Solution from './Solution';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

interface IProps {
    passengers: any
    route: any
    dist: number
}

const Scene: React.FC<IProps> = ({ passengers, route, dist }) => {
    return (
        <Box>
            <Typography variant="h3"> Distance: {dist}</Typography>
            <Stage width={1000} height={1000}>
                {/* <Passengers passengers={[[[700, 200], true], [[300, 300], false], [[300, 600], true], [[200, 400], false]]} /> */}
                <Passengers passengers={passengers} />
                <Solution route={route} />
            </Stage>
        </Box>
    )
}

export default Scene;