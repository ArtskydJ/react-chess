import './board.css';
import Square, { ISquareState } from '../square/Square';
import { SyntheticEvent } from 'react';

interface IBoardProps {
  board: ISquareState[];
  onSquareClick: (cord: string) => void;
  handleDrop: (e: SyntheticEvent, cord: string) => void;
}

export default function Board(props: IBoardProps) {
  let fillBoard = props.board.map((i) => (
    <Square
      number={i.number}
      cords={i.cords}
      key={i.cords}
      onClick={props.onSquareClick}
      selected={i.selected}
      piece={i.piece}
      onDrop={props.handleDrop}
    />
  ));

  return (
    <div className="background">
      <div className="board">{fillBoard}</div>
    </div>
  );
}
