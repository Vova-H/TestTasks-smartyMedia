const Matrix = () => {

    const example = [
        [1, 2, 3],
        [1, 2, 3],
        [1, 2, 3]
    ]
    const rotate = (matrix) => {
        const rows = matrix.length
        const cols = matrix[0].length;
        const grid = [];
        for (let i = 0; i < cols; i++) { // инициализируем пустой массив 3х3
            grid[i] = new Array(rows);
        }
        for (let i = 0; i < rows; i++) { // меняем местами элементы с матрици в грид
            for (let j = 0; j < cols; j++) {
                grid[j][i] = matrix[i][j];
            }
        }
        return grid;
    }

    console.log("example: ", example)
    console.log("result: ", rotate(example))
}


export default Matrix;
