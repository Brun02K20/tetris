// En el tetris hay 7 tipos de bloques diferentes, por lo tanto, podemos usar una enumeracion
export enum Block {
    I = 'I',
    J = 'J',
    L = 'L',
    O = 'O',
    S = 'S',
    T = 'T',
    Z = 'Z',
}

// en el tetris obviamente, vamos a tener celdas vacias
export enum EmptyCell {
    Empty = "Empty"
}

// una celda puede estar con bloque, o vacia
export type CellOptions = Block | EmptyCell

// defino que mi pizarron, es una matriz de celdas que pueden estar ocupadas o vacias
export type BoardShape = CellOptions[][]