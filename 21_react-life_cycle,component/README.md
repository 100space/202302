여태까지는 화면을 꾸밀 때 `javascript`를 이용하여 HTML을 조작했다. (DOM)

## 브라우저 렌더링 과정 (응답을 받고 화면에 보이기 직전 시점이다.)

**HTML을 그릴 때 아래와 같은 과정을 거친다.**

1. 응답이 오면, 응답 바디에 있는 HTML 내용을 파싱한다.
2. 파싱 이후 트리를 만든다.

```html
<!-- example -->
<html>
    <head>
        <title></title>
    </head>
    <body></body>
</html>
```

3. 표현준비를 한다. (사이즈 정렬 ...등등..)
4. Render가 된다.

# React와 렌더가 무슨 관계가 있는가?

-   DOM을 이용하여 화면을 그리는 과정이 매우 불편하고 귀찮았다.
    (예를 들면 엘리먼트를 만들고 innerHTML로 내용을 적고 그 엘리먼트를 다시 원하는 위치에 그려줘야 하기 때문에)
    이 불편한 DOM 조작을 조금 더 쉽게 하기 위해서 사용하는 것이 `react` 라이브러리이다.

# 누가 만들었는가?

-   Meta(FaceBook)에서 만들었다.
    새로운 글이 생기면 상단에 생기는 방식..

    DOM 조작을 쉽게할 수 있는 SPA를 만들기 위해서 개발하게 되었다.
    `Class`문법으로 만들어져 있기 때문에, 진입 장벽이 높았다.

# React

-   라이브러리? or 프레임워크?
    다른 차이점도 많이 있지만 그중 하나를 보면라이브러리와 프레임워크는 디렉토리 구조가 있는가 없는가로 나뉠 수 있다.

-   라이브러리는 디렉토리 구조가 없지만, 프레임워크는 디렉토리 구조가 있다.

-   최초의 페이스북에서 리액트를 만들었을 당시에는 라이브러리로 만들었다. 리액트가 발전하면서 사람들이 더 쉽게 결과물을 만들기 위해서 `CRA`명령어를 사용하면 구조를 만들어주는 기능을 만들면서 라이브러리와 프레임워크의 용어의 혼선이 왔다.

-   **처음 시작하는 단계이니 당연히 라이브러리 단위로 공부할 예정**

## 사용하는 방법

-   CDN을 이용하여 사용할 것이다.

```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

## React에서의 상태

데이터가 바뀌면 화면이 바뀐다는 말을 리액트에서 적용하면 상태가 바뀌면 컴포넌트가 바뀐다라는 의미로 사용할 수 있다.
리액트 컴포넌트에 데이터가 바뀌면 UI가 자동으로 갱신된다는 말이다.
그렇기 때문에 리액트 개발의 핵심은 상태값을 효율적으로 관리하여 , 불필요하게 업데이트 되지 않도록 관리해야 한다.

## ReactDOM의 역할

real DOM은 브라우저가 트리구조를 만들면서 렌더를 바로 진행하지만
reactDOM은 virtual DOM으로 가상의 돔에서 렌더를 하여 실제 돔과 비교를 하고, 달라진 부분을 실제 DOM으로 전달하여 그 부분만 랜더를 시켜서 브라우저 내에서 발생하는 연산의 양을 줄이고 성능을 개선 시킬 수 있다.

## JSX

JSX는 HTML 태그를 변수로 할당하고 호출하면서, 리턴할 수 있는 자바스크립트의 확장 문법이라고 생각하면 된다. 순수 자바스크립트의 문법이 아니기 때문에 babel을 이용하여 트랜스파일 과정을 거져 브라우저가 읽을 수 있는 자바스크립트 문법으로 바꿔야한다.
_BABEL : javascript 컴파일러, 트랜스컴파일러이다. 코드가 실행되기 전 특정 내용의 코드를 변경할 때 사용한다._

```html
<!-- 바벨 CDN -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

<!-- script의 타입을 type="text/babel"로 바꿔준다. -->
```

### JSX 문법

최상위 엘리먼트는 한개로 감싸있어야 한다.
하위 엘리먼트는 몇개가 있어도 상관없다.

```js
// 올바른 문법
<div>
    <h1></h1>
    <h2></h2>
</div>

//틀린 문법
<h1></h1>
<h2></h2>
```

# 리액트를 잘하기 위해서

클래스 문법을 잘 알고, 상속의 개념도 탄탄히 할 필요가 있다.