import { Cell } from "./Cell.tsx";
import { BoardShape } from "../types.d";

interface Props {
    currentBoard: BoardShape; // el tablon va a ser una matriz de celdas,
}

const Board = ({currentBoard}: Props) => {
    return(
        <div className="board">
            {/* recorro mi matriz de celdas, por cada fila del tablon creo un nuevo div de classname "row" */}
            {currentBoard.map((row, rowindex) => (
                <div className="row" key={rowindex}>
                    {/* ahora debo recorrer cada fila para poder acceder a las columnas */}
                    {/* el type prop que se le pasa a Cell, es una CellOption */}
                    {row.map((cell, colindex) => (
                        <Cell key={`${rowindex}-${colindex}`} type={cell} /> 
                    ))}
                </div>
            )) }
        </div>
    )
}

export {Board}