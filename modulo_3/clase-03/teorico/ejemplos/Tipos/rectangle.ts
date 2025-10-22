// Utilizaremos la exportacion separada
// primero definimos las funciones y constantes y las exportamos al final del archivo

const rectangleArea = (width: number, height: number): number => {
    return width * height;
};

const RECTANGLE_NAME = 'Rectangle';

// Exportacion separada
export { rectangleArea, RECTANGLE_NAME };