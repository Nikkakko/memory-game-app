import { useState } from 'react';
import './App.css';
import styled from 'styled-components';

type TCell = {
  row: number;
  col: number;
};

function App() {
  const [grid, setGid] = useState<Array<Array<number | string>>>([
    [3, 5, 2, 7],
    [6, 2, 1, 7],
    [3, 5, 1, 0],
    [6, 4, 0, 4],
  ]);

  const [revealedGrid, setRevealedGrid] = useState<
    Array<Array<boolean | string>>
  >(
    new Array(grid?.length)
      .fill('')
      .map(() => new Array(grid[0]?.length).fill(false))
  );

  const [previousClick, setPreviousClick] = useState<TCell | undefined>();

  console.log(previousClick);

  const revealCard = (rowIndex: number, colIndex: number) => {
    const clickedNumber = grid[rowIndex][colIndex];
    const newRevealedGrid = [...revealedGrid];
    newRevealedGrid[rowIndex][colIndex] = true;
    setRevealedGrid(newRevealedGrid);

    if (previousClick) {
      const previousClickedNum = grid[previousClick.row][previousClick.col];
      if (previousClickedNum !== clickedNumber) {
        setTimeout(() => {
          newRevealedGrid[rowIndex][colIndex] = false;
          newRevealedGrid[previousClick.row][previousClick.col] = false;
          setRevealedGrid([...newRevealedGrid]);
        }, 1000);
      }
      setPreviousClick(undefined);
    } else {
      setPreviousClick({ row: rowIndex, col: colIndex });
    }
  };

  return (
    <div className='App'>
      <Grid>
        {grid?.map((row, rowIndex) => (
          <Row key={rowIndex}>
            {row?.map((num, colIndex) => (
              <Card
                key={colIndex}
                onClick={() => revealCard(rowIndex, colIndex)}
              >
                {revealedGrid[rowIndex][colIndex] ? num : ' '}
              </Card>
            ))}
          </Row>
        ))}
      </Grid>
    </div>
  );
}

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: calc(2rem + 2vw);
  margin: 2em 0;
  color: #fff;
  box-shadow: 0 0 2em #00000022;
  cursor: pointer;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  background-color: #fff;
  padding: 2em;
  color: #000;
`;

export default App;
