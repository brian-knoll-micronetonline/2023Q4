import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tictactoe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TictactoeComponent {
  gameBoard: Array<Array<string>> = [['⨂', '⨂', '⨂'], ['⨂', '⨂', '⨂'], ['⨂', '⨂', '⨂']];
  turn: number = 0;
  playerTurn: string = '◯';
  finishedGame: boolean = false;
  winner: string = '⨂';

  onCellClick(event: MouseEvent, row: number, column: number) {
    console.log(`Clicked row: ${row} column ${column}`);
    if (this.finishedGame || this.gameBoard[row][column] != '⨂') {
      return;
    }

    if (this.turn++ % 2) {
      this.gameBoard[row][column] = '╳';
      this.playerTurn = '◯';
    } else {
      this.gameBoard[row][column] = '◯';
      this.playerTurn = '╳';
    }

    this.CheckForWin();
  }

  CheckForWin() {
    let winners: Array<string> = [];
    winners.push(this.checkDownDiagonal());
    winners.push(this.checkUpDiagonal());
    for (var i = 0; i < 3; i++) {
      winners.push(this.checkRow(i));
    }

    for (var i = 0; i < 3; i++) {
      winners.push(this.checkColumn(i));
    }

    if (winners.some((elem) => elem != '⨂')) {
      this.finishedGame = true;
      this.winner = winners.find((elem) => elem != '⨂') || 'Uh-Oh';
    }
  }

  checkUpDiagonal(): string {
    if (this.gameBoard[2][0] == this.gameBoard[1][1]
      && this.gameBoard[0][2] == this.gameBoard[1][1]) {
      return this.gameBoard[1][1];
    }

    return '⨂';
  }

  checkDownDiagonal(): string {
    if (this.gameBoard[0][0] == this.gameBoard[1][1]
      && this.gameBoard[2][2] == this.gameBoard[1][1]) {
      return this.gameBoard[1][1];
    }

    return '⨂';
  }

  checkColumn(column: number): string {
    if (this.gameBoard[0][column] == this.gameBoard[1][column]
      && this.gameBoard[2][column] == this.gameBoard[1][column]) {
      return this.gameBoard[0][column];
    }

    return '⨂';
  }

  checkRow(row: number): string {
    if (this.gameBoard[row][0] == this.gameBoard[row][1]
      && this.gameBoard[row][2] == this.gameBoard[row][1]) {
      return this.gameBoard[row][0];
    }

    return '⨂';
  }
}
