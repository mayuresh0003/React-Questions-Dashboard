import React from "react";
import ReactDOM from "react-dom/client";
// import PropTypes from "prop-types";

function ReactIMPQuestions() {
    return (
        <div className='container'>
            <h2>15 Most Asked Interview Questions</h2>
            <h5>Ques 1: What is React and why is it used?</h5>
            <u>
                <li>React is a popular JavaScript library used for building user interfaces (UIs) for
                    web applications.</li>
                <li>It's known for its efficiency, flexibility, and reusability in creating interactive
                    UI components.</li>
                <li>React allows developers to build complex UIs by breaking them down into smaller,
                    reusable pieces called components.</li>
                <li>These components can manage their own state, making it easier to build
                    and maintain large-scale applications.</li>
            </u>

            <h5>Ques 2: What is JSX, and why is it used?</h5>
            <u>
                <li>JSX {`->`} JavaScript XML.</li>
                <li>Allows you to write HTML-like code within JavaScript.</li>
                <li>JSX is used in React to define the structure of components.</li>
            </u>

            <h5>Ques 3: What is a React component?</h5>
            <MyComponent />
            <h5>Ques 4: What is the difference between state and props?</h5>
            <StatevsProps propExample={"I am a prop"} />
            <br />
            <u>
                <li>**Mutability:** State is mutable and managed within the component itself,
                    while props are immutable and passed from parent to child components.</li>
                <li>**Ownership:** Components own and manage their own state, while props are owned
                    and managed by the parent component.</li>
                <li>**Usage:** State is used for internal component data that might change over time,
                    while props are used to pass data from parent to child components. </li>
            </u>

            <h5>Ques 5: What is prop drilling?</h5>
            <u>
                <li>Process of passing down props through multiple levels of nested components</li>
            </u>

            <GrandparentComponent />
            <h5>Ques 6: What is a React fragment, and why is it used?</h5>
            <u>
                <li>React fragment is a way to group multiple elements without adding an extra HTML
                    element to the DOM.</li>
            </u>

            <>
                <p>Paragraph 1</p>
                <p>Paragraph 2</p>
            </>
            <h5>
                Ques 7: How do you define and use state in a React Functional component?
                How are they different from normal variables?
            </h5>
            <Counter />
            <h5>
                Ques 8: How do you define and use state in a React class component?
            </h5>
            <CounterNew />
            <h5>Ques 9: How do you pass props to a functional component?</h5>
            <h5>Ques 10: What are PropTypes?</h5>
            {/* 
        StatevsProps.propTypes = {
          propExample: PropTypes.string,
        }; 
      */}
            <h5>Ques 11: How do you use props in a class component?</h5>

            <h5>
                Ques 12: In how many ways can we export/import things from a JS Module?
            </h5>
            <u>
                <ul>Default Export/Import: </ul>
                <li>Use it when you want to export something by default. </li>
                <li>Multiple Default exports are not allowed from the same module.</li>
                <li>We can refer to the default exported thing by any name, so the name is not significant.</li>
                <br />
                Default Export eg - export default Counter;
                <br />
                Default Import eg - import Counter from './counter';
                <br />
                <ul>Named Export/Import:</ul>
                <li>Use it when you have multiple things to be exported from a JS Module.</li>
                <li>Named exports must be referred to by the Exact Same Name while importing them.</li>
                <br />
                Named Export eg - export {Counter};
                <br />
                Named Import eg - import {Counter} from './counter';
            </u>

            <h5>Ques 13: What is Virtual DOM?</h5>
            <ul>
                <li>A logical representation of the
                    actual DOM in the form of React Elements.</li>
                <li>A programming concept where a virtual representation of the UI is kept in the memory.
                    It is an object that has React Elements to represent the UI. </li>
            </ul>

            <h5>Ques 14: Reconciliation vs Rendering?</h5>
            <u>
                <li>Reconciliation: The process of computing the diff between the 2 VDOMs. </li>
                <li>Rendering: The actual updation of the information in the rendering environment. </li>
            </u>

            <h5>Ques 15: What is the Diff Algorithm?</h5>
            <u>
                <li>Whenever the state or props get updated, an updated VDOM tree is generated.</li>
                <li>Diff Algorithm calculates the difference between the 2 VDOMs (the previous VDOM
                    and the updated VDOM).</li>
                <li>After calculating this diff only the actual DOM is updated. This makes React capable
                    of doing fast DOM manipulations.</li>
            </u>

        </div>
    );
}

class CounterNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    incrementCount() {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div>
                {/* <p>Count: {this.state.count}</p> */}
                <DisplayCount countProp={this.state.count} />
                <button onClick={() => this.incrementCount()}>Increment</button>
            </div>
        );
    }
}

// Ans 11 - Sending prop in class component
class DisplayCount extends React.Component {
    render() {
        return <p>Count: {this.props.countProp}</p>;
    }
}

const Counter = () => {
    const [count, setCount] = React.useState(0);
    // Initializing state with count and setCount function

    const increment = () => {
        setCount(count + 1);
        // Updating the state using setCount function
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

const MyComponent = () => {
    return (
        <ul>
            <li>Reusable building block for the UI.</li>
            <li>It can be a class or a function that returns JSX</li>
        </ul>
    );
};

const StatevsProps = (props) => {
    const [stateExample] = React.useState("I am a state");

    return (
        <React.Fragment>
            <li>{stateExample}</li>
            <li>{props.propExample}</li>
        </React.Fragment>
    );
};

// Proptypes
// StatevsProps.propTypes = {
//   propExample: PropTypes.string,
// };

// Prop Drilling
// GrandparentComponent
const GrandparentComponent = () => {
    const data = "Hello from Grandparent";

    return <ParentComponent data={data} />;
};

// ParentComponent
const ParentComponent = ({ data }) => {
    return <ChildComponent data={data} />;
};

// ChildComponent
const ChildComponent = ({ data }) => {
    return <GrandchildComponent data={data} />;
};

// GrandchildComponent
const GrandchildComponent = ({ data }) => {
    return <p>{data}</p>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ReactIMPQuestions />);

export default ReactIMPQuestions;