import { useState } from 'react';
import styled from 'styled-components';

type TCell = {
  row: number;
  col: number;
};

const Main = () => {
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
    <Wrapper>
      {grid.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((col, colIndex) => (
            <Col
              key={colIndex}
              onClick={() => revealCard(rowIndex, colIndex)}
              revealed={revealedGrid[rowIndex][colIndex]}
              isClicked={
                previousClick?.row === rowIndex &&
                previousClick?.col === colIndex
              }
            >
              <ColItem>{revealedGrid[rowIndex][colIndex] ? col : ''}</ColItem>
            </Col>
          ))}
        </Row>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 85px;
  flex: 1;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

const Col = styled.div<{
  revealed: string | boolean;
  isClicked: boolean;
}>`
  width: 72.53px;
  height: 72.53px;
  /* background: ${({ revealed }) => (revealed ? '#FDA214' : '#304859')}; */
  background: ${({ isClicked }) => (isClicked ? '#FDA214' : '#304859')};

  // set animation on background and change it after 1 sec

  cursor: pointer;

  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ColItem = styled.span`
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #fcfcfc;
`;

export default Main;
