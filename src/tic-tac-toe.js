class TicTacToe {

    constructor() {
        this.player = false;
        this.grid = [[],[],[]];
        this.winner = false;
        this.winPlayer = null;
        this.numOfTurns = 0;
    }

    getCurrentPlayerSymbol() {

        if (!this.player) {
            return 'x';
        }
        else {
            return 'o';
        }
    }

    nextTurn(rowIndex, columnIndex) {
        if(!this.grid[rowIndex][columnIndex]) {

            if(!this.player) {
                this.grid[rowIndex][columnIndex] ='x';
            }
            else {
                this.grid[rowIndex][columnIndex] = 'o';
            }
            this.numOfTurns++;

            if ((this.grid[0][0] && this.grid[0][0] == this.grid[0][1] && this.grid[0][0] == this.grid[0][2]) || (this.grid[1][0] && this.grid[1][0] == this.grid[1][1] && this.grid[1][0] == this.grid[1][2]) || (this.grid[2][0] && this.grid[2][0] == this.grid[2][1] && this.grid[2][0] == this.grid[2][2]) || (this.grid[0][0] && this.grid[0][0] == this.grid[1][1] && this.grid[0][0] == this.grid[2][2]) || (this.grid[0][2] && this.grid[0][2] == this.grid[1][1] && this.grid[0][2] == this.grid[2][0]) || (this.grid[0][0] && this.grid[0][0] == this.grid[1][0] && this.grid[0][0] == this.grid[2][0]) || (this.grid[0][1] && this.grid[0][1] == this.grid[1][1] && this.grid[0][1] == this.grid[2][1]) || (this.grid[0][2] && this.grid[0][2] == this.grid[1][2] && this.grid[0][2] == this.grid[2][2])) {
                this.winner = true;

                if(!this.player) this.winPlayer = 'x';
                else {
                    this.winPlayer = 'o';
                }
            }
            this.player = !this.player;

        }
    }

    isFinished() {
        return this.numOfTurns === 9 || this.winner;
    }

    getWinner() {
        return this.winPlayer;
    }

    noMoreTurns() {
        return this.numOfTurns === 9;
    }

    isDraw() {
        return this.numOfTurns === 9 && this.winner === false;
    }

    getFieldValue(rowIndex, colIndex) {
        if(this.grid[rowIndex][colIndex]) {
            return this.grid[rowIndex][colIndex];
        }
        else {
            return null;
        }
    }

}

module.exports = TicTacToe;


