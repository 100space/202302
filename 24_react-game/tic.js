class Square extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="square" onClick={this.props.onClick}>
                {this.props.value}
            </div>
        )
    }
}
class Board extends React.Component {
    constructor(props) {
        super(props)
    }
    renderSquare(i) {
        return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />
    }
    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            squares: new Array(9).fill(null),
            xIsNext: true,
        }
    }
    handleClick(i) {
        console.log(i)
        const square = this.state.squares
        const squareArr = [...square]
        if (squareArr[i] || winner(squareArr)) return
        squareArr[i] = this.state.xIsNext ? "X" : "O"
        this.setState({
            squares: squareArr,
            xIsNext: !this.state.xIsNext,
        })
    }
    render() {
        const square = this.state.squares
        const squareArr = [...square]
        const winners = winner(squareArr)
        let status
        if (winners) {
            status = winners
        } else {
            status = this.state.xIsNext ? "X" : "O"
        }
        return (
            <div className="games">
                <div className="game-board">
                    <Board squares={this.state.squares} onClick={(i) => this.handleClick(i)} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                </div>
            </div>
        )
    }
}

const winner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
    ]
    for (let v of lines) {
        const [a, b, c] = v
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }
    return null
}
const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(<Game />)
