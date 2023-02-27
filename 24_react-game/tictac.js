class Square extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <button className="square" onClick={this.props.onClick}>
                {this.props.value}
            </button>
        )
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }
    renderSquare(i) {
        return <Square value={this.props.squarse[i]} onClick={() => this.props.onClick(i)} />
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
            squarse: new Array(9).fill(null),
            xIsNext: true,
        }
    }
    handleClick(i) {
        const square = this.state.squarse
        const square2 = [...square]
        if (square2[i]) return
        square2[i] = this.state.xIsNext ? "X" : "O"
        this.setState({
            squarse: square2,
            xIsNext: !this.state.xIsNext,
        })
    }

    render() {
        const winner = winners(this.state.squarse)
        console.log(winner)
        let status
        if (winner) {
            status = `Winner : ${winner} `
        } else {
            status = `Next player : ${this.state.xIsNext ? "X" : "O"}`
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board squarse={this.state.squarse} onClick={(i) => this.handleClick(i)} />
                </div>
                <div className="game-info">{status}</div>
            </div>
        )
    }
}
function winners(squares) {
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
        console.log(v)
        const [a, b, c] = v
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }
    return null
}
const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(<Game />)
