import './App.css'
import { Board } from './components/Board.tsx'
import { EmptyCell } from './types.d'

// vamos a primero que todo, crear el pizarron:
const board = Array(20)
  .fill(null)
  .map(() => Array(12).fill(EmptyCell.Empty))


function App() {
  return (
    <>
      <h1>Tetris</h1>
      {/* Muestro el pizarron, pasandole como pizarron actual, el creado   */}
      <Board currentBoard={board}/>
    </>
  )
}

export default App
