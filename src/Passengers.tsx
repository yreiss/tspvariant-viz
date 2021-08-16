import { Layer, Circle, Rect } from 'react-konva';
import React from "react"

interface IProps {
    passengers: any
}

const Passengers: React.FC<IProps> = ({ passengers }) => {

    return (
        <Layer>
            <Rect x={0} y={0} width={1000} height={1000} stroke="black" strokeWidth={5} drawBorder={true}></Rect>
            {passengers.map(
                // eslint-disable-next-line array-callback-return
                (point: any[][], index: number) => (
                    <Circle
                        x={point[0][0]}
                        y={point[0][1]}
                        radius={5}
                        fill={point[1] ? "green" : "red"}
                        key={index}
                    />
                ))}
        </Layer>
    )
}

export default Passengers;