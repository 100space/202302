# 카운터 만들기

> count.html

-   +버튼을 누르면 increment 함수를 이용해서 상태를 +1 해주고,
-   -버튼을 누르면 decrement 함수를 이용해서 상태가 -1 된다.

여기서 중요한 포인트는
처음 랜더 했을 경우 초기값이 10이 뜨는데 어떤 순서에 의해서 10이 되는지를 알아야 한다. 실행 되자마자 10으로 세팅 되는 것이 아니다.

## 실행 순서

1. constructor()가 실행 되면서 상태의 number는 0인 상태가 된다.
2. number가 0 인 상태로 render()가 실행된다.
3. 이후 Count 컴포넌트가 마운트되면서, componentDidMount()가 호출되고 setState()에 의해 number가 10으로 바뀐다.
4. 상태가 바뀌었으므로 render()를 실행하여 this.state.number가 10이 된다.

위에 실행 순서에 의해 최소 실행시 사용자가 보이는 화면에 10으로 보이는 것을 알고 있어야 한다.

## "+"버튼을 눌렀을 때 실행 순서

1. onClick에 의해 increment() 호출이 된다.
2. state.number의 값이 변경 되고, render() 실행되면서 값이 업데이트 된다.
3. componentDidUpdate() 호출이 된다.

# this 바인딩

함수를 호출 할 때 `this`가 가리키는 객체를 지정하지 않으면 호출하는 방법에 따라 `this`가 가리키는 객체가 달라진다. 그렇기 때문에 함수를 호출할 때, `this`가 항상 같은 객체를 가리키도록 하기 위해서 바인딩을 해줘야한다.

decrement 함수로 this 바인딩 하는 방법 몇 가지를 보면

## 방법 1. 화살표 함수 이용하기

```js
decrement = () => {
    this.setState({ number: this.state.number - 1 })
}
render () {
    return (
        <button onClick={this.decrement}> - </button>
    )
}
```

## 방법 2. 이벤트 핸들러 함수를 화살표 함수로 이용하기

```js
decrement2() {
    this.setState({ number: this.state.number - 1 })
}

render () {
    return (
        <button onClick={()=>this.decrement2()}> - </button>
    )
}
```

## 방법 3. 생성자 함수에서 바인딩 하기

```js
constructor (props) {
    super(props)
    this.decrement3 = this.decrement3.bind(this)
}


decrement3() {
    this.setState({ number: this.state.number - 1 })
}

render () {
    return (
        <button onClick={this.decrement}> - </button>
    )
}
```

# componentDidMount, state를 이용하여 roading 구현하기

1. constructor 함수가 실행되면서 loading은 true, number는 0 상태가 된다.
2. 이후 render()가 실행되며 조건식에 의해 `로딩중...`이라는 글자가 랜더 된다.
3. render()가 실행 된 후 componentDidMount() 가 호출 되는데, 이 때 setTimeout에 의해서 setState함수가 1초뒤에 실행된다.
4. 1초뒤 setState 함수가 실행되며 loading이 false, number가 10이 된다.
5. 이 상태로 render()가 다시 실행된다.

# loading 버튼 만들기

Button 컴포넌트로 밑에 컨트롤러를 하나 더 만든다.
누르면 로딩중이라는 문구가 뜨고 일정시간 후 로딩중이라는 문구가 사라지면서 숫자가 바뀐 상태로 보이기 위한 버튼을 만들 예정이다.

## 실행 순서

1. 버튼을 누르면 setLoading 함수가 호출된다.
2. setLoading에 의해 loading이 `true`로 바뀌고, 조건식에 따라 increment와 decrement를 호출한다.
3. 이후 render()을 호출 하는데 loading이 true이기 때문에 `로딩중..`이 보이고, 상태가 바뀌었으므로 componentDidUpdate()가 호출 된다.
4. componentDidUpdate()는 1초 뒤 loading의 상태를 false로 바꿔준다.

# List

React에서 state에 [{},{},{}..] 배열안에 객체로 항목이 있을 경우
이를 map()를 이용해서 JSX 문법으로 변환하면 랜더를 할 수 있다.
