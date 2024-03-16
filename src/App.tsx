import './App.css'
import { Board } from './components/Board.tsx'
import { useTetris } from './hooks/useTetris.ts'
import { UpcomingBlocks } from './components/UpcomingBlocks.tsx';
import { useEffect, useState } from 'react';

function App() {
  const { board, startGame, isPlaying, score, upcomingBlocks } = useTetris();
  const [audio] = useState(new Audio('/tetris.mp3'))

  useEffect(() => {
    if (isPlaying) {
      audio.play()
    } else {
      audio.pause(); // Pausar la música al finalizar el juego
      audio.currentTime = 0; // Reiniciar la reproducción al principio del archivo
    }
  }, [isPlaying, audio])

  useEffect(() => {
  const handleAudioEnded = () => {
    if (isPlaying && audio.currentTime === audio.duration) {
      audio.currentTime = 0; // Reiniciar la reproducción al principio del archivo
      audio.play();
    }
  };

  audio.addEventListener('ended', handleAudioEnded);

  return () => {
    audio.removeEventListener('ended', handleAudioEnded);
  };
}, [isPlaying, audio]);

  return (
    <div className='app'>
      <h1>Tetris</h1>
      <Board currentBoard={board} />
      <div className="controls">
        <h2>Score: {score}</h2>
        {isPlaying ? (
          <UpcomingBlocks upcomingBlocks={upcomingBlocks} />
        ) : (
          <button onClick={startGame}>New Game</button>
        )}
      </div>
    </div>
  )
}

export default App
