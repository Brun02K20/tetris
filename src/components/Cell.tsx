import { CellOptions } from "../types.d"

interface Props {
    type: CellOptions
}

const Cell = ({type}: Props) => {
    // basicamente, cada celda, es un div, que si la celda esta vacia sera de color girs, y si no
    // sera del color del tuipo de bloque correspondiente
    return <div className={`cell ${type}`}></div>
}

export {Cell}