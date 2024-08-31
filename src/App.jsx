import React, { useState } from 'react';

function App() {
  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]);
  const [turn, setTurn] = useState('X');
  const [winner, setWinner] = useState(null);
  const [showWinnerAlert, setShowWinnerAlert] = useState(false)

  const checkWinner = () => {
    for (let i = 0; i < 3; i++) {
      if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== '') {
        setWinner(board[i][0]);
        setShowWinnerAlert(true); //Mostramos la alerta del ganador
      }
      if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== '') {
        setWinner(board[0][i]);
        setShowWinnerAlert(true); //Mostramos la alerta del ganador
      }
    }
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '') {
      setWinner(board[0][0]);
      setShowWinnerAlert(true); //Mostramos la alerta del ganador
    }
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== '') {
      setWinner(board[0][2]);
      setShowWinnerAlert(true); //Mostramos la alerta del ganador
    }
  };

  const handleCellClick = (row, col) => {
    if (board[row][col] === '' && !winner) {
      const newBoard = [...board];
      newBoard[row][col] = turn;
      setBoard(newBoard);
      setTurn(turn === 'X' ? 'O' : 'X');
      checkWinner(); //llamamos la Const para verificar si hay ganador
    }
  };

  const handleReset = () => {
    setBoard([
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]);
    setTurn('X');
    setWinner(null);
    setShowWinnerAlert(false);

  };

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <p>Turn of= <span class="turn-marker">{turn}</span></p> 
      {      showWinnerAlert &&(
       <div className='winner-alert'> 
          <h2> WINNER: <span class="winner-marker">{winner}</span></h2>
       </div>


      )}
      <table>
        <tbody>
          {board.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex} onClick={() => handleCellClick(rowIndex, colIndex)}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleReset}>Reload Game</button>
    </div>
  );
}

export default App;