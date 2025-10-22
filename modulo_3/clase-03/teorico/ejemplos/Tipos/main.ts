// Importamos todas las funciones y constantes desde el index

import {
    circleArea,
    CIRCLE_NAME,
    rectangleArea,
    RECTANGLE_NAME,
    triangleArea,
    TRIANGLE_NAME
} from './index';

const circle = circleArea(5);
console.log(`${CIRCLE_NAME} area: ${circle}`);

const rectangle = rectangleArea(10, 5);
console.log(`${RECTANGLE_NAME} area: ${rectangle}`);

const tringle = triangleArea(3, 6);
console.log(`${TRIANGLE_NAME} area: ${tringle}`);