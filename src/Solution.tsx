import React from 'react';
import { Layer, Arrow } from 'react-konva';


interface IProps {
    route: any
}

const Solution: React.FC<IProps> = ({ route }) => {

    const arrows: (number[] | any[][])[] = [];
    route.forEach((element: any, index: number) => {
        if (index < route.length - 1) {
            const midx = (route[index + 1][0] + element[0]) / 2;
            const midy = (route[index + 1][1] + element[1]) / 2;
            arrows.push([element[0], element[1], midx, midy, route[index + 1][0], route[index + 1][1]])
        }
    })
    return (
        <Layer>
            {arrows.map(
                // eslint-disable-next-line array-callback-return
                (arrow: any[], index: number) => (
                    <Arrow
                        points={arrow}
                        stroke="#000"
                        strokeWidth={1}
                        pointerWidth={20}
                        key={index}
                    />))}
        </Layer>
    )
}

export default Solution;