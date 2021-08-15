import { Layer, Circle } from 'react-konva';

const Points = () => {
    const points: any = [[[700, 200], true], [[300, 300], false], [[300, 600], true], [[200, 400], false]];
    return (
        <Layer>
            {points.map(
                // eslint-disable-next-line array-callback-return
                (point: any[][]) => (
                    <Circle
                        x={point[0][0]}
                        y={point[0][1]}
                        radius={5}
                        fill={point[1] ? "green" : "red"}
                    />
                ))}
        </Layer>
    )
}

export default Points;