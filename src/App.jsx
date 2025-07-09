import './App.css'
import UseEffectHook from './components/use-effect-hook';
import UseRefHook from './components/use-ref-hook';
import UseStateHook from './components/use-state-hook';
import UseContextHook from './components/use-context-hook';
import UseReducerHook from './components/use-reducer-hook';
import UseMemoAndCallbackHook from './components/use-memo-and-callback-hook';
import UseImperativeHandleHook from './components/use-imperative-handle-hook';
import Counter from './custom-hooks/counter';
import useWindowSize from './custom-hooks/use-window-size';
import PostList from './custom-hooks/post-list';
import DebouncedInput from './custom-hooks/debounced-input';
import CounterClass from './components/classBase-component';
import CounterFunction from './components/functional-component';
import Lifecyclemethod from './components/lifecycle-method';
import DataListFn from './components/dataList-functiobase';
import DataList from './components/dalaList-classbase';
import PropDrill from './components/propDrill-vs-useContext';
import ReactIMPQuestions from './components/react-imp-questions';

function App() {
  const { width, height } = useWindowSize();

  return (
    <div className='container'>
      <h1 style={{ textAlign: 'center' }}>React Interview Questions</h1>
      < ReactIMPQuestions />
      <h2>Components in react</h2>
      <h4>Question 1: What is the difference between class components and functional components in React?</h4>
      <p>
        Class components are ES6 classes that extend the React.Component class and have access to lifecycle methods, while functional components are simpler functions that can use hooks to manage state and side effects.
      </p>
      <h2><u>Functional base component</u></h2>
      < CounterFunction />
      <h2><u>Class base component</u></h2>
      < CounterClass />
      <h2>
        <u>React Life cycle Method</u>
      </h2>
      < Lifecyclemethod />
      <h2>
        Question 5: Convert this Class based component to Function Based
        Component and explain it.
      </h2>

      <h3>OUTPUT:</h3>
      <DataList />

      <h3>OUTPUT:</h3>
      <DataListFn />

      <h2>Question: PropDrill vs useContext example code</h2>
      < PropDrill />

      <h1>Hooks Interview Questions in React</h1>
      < UseStateHook />
      < UseEffectHook />
      < UseRefHook />
      < UseContextHook />
      < UseReducerHook />
      < UseMemoAndCallbackHook />
      < UseImperativeHandleHook />

      <h1>Custom Hooks Interview Questions in React</h1>

      <h4>Question 1: Build a custom hook to manage and update a counter with appropriate functionalities?</h4>
      <Counter />

      <h4>Question 2: Buils a custom hook to efficiently track and update window demensions dynamically.</h4>
      <p>Width: {width}</p>
      <p>Height: {height}</p>

      <h4>Question 3: Build a custom hook to fetch data from an API and handle loading and error states.</h4>
      < PostList />

      <h5> Questions 4: Build a custom hook that delay updating a value untill a specified time has pass after the last change?</h5>
      < DebouncedInput />
    </div>
  )
}

export default App
