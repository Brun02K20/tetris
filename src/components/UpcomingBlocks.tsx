import { Block, SHAPES } from '../types.d';
import "../App.css"
interface Props {
  upcomingBlocks: Block[];
}

function UpcomingBlocks({ upcomingBlocks }: Props) {
  return (
    <div>
        <br></br>
        <h1 style={{textAlign: "left"}} className='text'>NEXT</h1>
        <div className="upcoming">
      {upcomingBlocks.map((block, blockIndex) => {
        const shape = SHAPES[block].shape.filter((row) =>
          row.some((cell) => cell)
        );
        return (
          <div key={blockIndex}>
            {shape.map((row, rowIndex) => {
              return (
                <div key={rowIndex} className="row">
                  {row.map((isSet, cellIndex) => {
                    const cellClass = isSet ? block : 'hidden';
                    return (
                      <div
                        key={`${blockIndex}-${rowIndex}-${cellIndex}`}
                        className={`cell ${cellClass}`}
                      ></div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
    </div>
  );
}

export {UpcomingBlocks};