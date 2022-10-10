20.1
`App.js` is center of app. any changes to app we will need to modify/add components inside here
    React components follows PascalCase naming convention helps to identify function is component or regular function

need to import React to every component file (`import React from 'react';`)

inside app.js, will see function returns HTML. actually this is called `JavaScript XML (JSX)`, reperesents HTML in JS. Normally, HTML will need to be a string but in this case we are using a webpack and React
    think of functions that return JSX as fxns that use `document.createElement(JSX)`

React components must always return a single parent JSX element, but this may have many children elements

remember: `class` is already a keyword in JS so to include class tag as JSX must write `className`

will use `.map( )` inside JSX expression to cycle through categories
    - when mapping anything in JSX, outermost element must have a unique `key` attribute 
    - note the parentheses in map callback to return JSX. should only return a single JSC element just like how you can only return a single element from a React component

`onClick( )` attribute is expecting a callback function declaration
    imp that we wrap it in a function declaration rather than just calling `categoryelected(category.name)` which would cause function to get called anytime component renders

12.2
`React Testing Library` to provide utility functions on top of `react-dom` and `react-dom/test-utils`
    Jest will be used to provide testing framework and `jest-dom` for some custom matchers

`npm install @testing-library/react @testing-library/jest-dom --save-dev`

for testing, had to downgrade `@testing-library/react` to `12.1.2` since newer version does not support React v17 and earlier

can compare snapshot versions of DOM thanks to Jest

`asFragment( )` fxn returns snapshot of React component (in this case we are using it for the About component)
    `toMatchSnapshot( )` matcher to assert that snapshots will match
    - running test now will autogen create `__tests__/snapshots__/index.tesst.js.snap`
    - after changing component's element, snapshot will stale. can update instance of test by typing `u` to update snapshot (must still currently be in testing)

while testing, best practice is to query elements by their visibile characteristics or accessibility attributes in order to mimic user experience (vs using custom attr like `data-testid` attribute)

20.3
With how React works, cannot simply make a GET request.
Must change object source of what's being rendered

Case: keep track of which page user clicked
so far we've been tracking data using variables with JS. this is fine for static code.
- however, changing value of variable within a componenent does not cause component to rerender
- therefore must introduce some state to component
ex: creating a stopwatch that updates every second would not work how we've done in the past (var = 0 loop through ++ and render HTML element)

                import React from "react"

                function SomeComponent() {
                let seconds = 0

                function startStopwatch() {
                    setInterval(() => {
                        console.log(seconds)
                        seconds += 1
                    }, 1000)
                    }

                    return (
                    <div>
                        {seconds}
                        <button onClick={startStopwatch} >Start</button>
                    </div>
                    )
                }

    - this is because React is using a virtualDOM. count is continuing as intended (check with console.log) but not rendering
we can force component to react to change by using `React Hooks`

`React Hooks`
allow us to manage state within a component
going back to stopwatch example:

                import React, { useState } from "react"

                function SomeComponent() {
                    const [seconds, setSeconds] = useState(0)

                    function startStopwatch() {
                        let updatedSeconds = seconds;
                        setInterval(() => {
                        updatedSeconds += 1;
                        console.log(updatedSeconds);
                        setSeconds(updatedSeconds);
                        }, 1000);
                    }

                    return (
                    <div>
                        {seconds}
                        <button onClick={startStopwatch} >Start</button>
                    </div>
                    )
                }

* `useState( )` function will always return an array. first item is value of state, second item is a `setter` (allows you to set the state to something else)
    can use `useState` without `setter`, but it offers no advantage and it's better to just include `setter`

`useState(0)` is setting it to initial state

`setSeconds(updatedSeconds)`
- instead of changing seconds with `+=` operator, use `setSeconds` method and pass `updatedSeconds` as arg
- this method allows our component to rerender
    `setSeconds` is asynchronous

the callback function in `setSeconds` arg gives access to the state as an arg. therefore can do something like for example:
            `setCount((prevCount/prevState/etc) => prevCount + 1)`
            don't forget, that second arg is being destructed so it can be named as anything (ex. setSeconds, setCount)

Hooks follow 2 rules:
1) only call hooks from React functions
2) only call hooks at the top level (don't use them inside for loops, nested functions within React component, or conditionals) and keep hook closer to top of React component

`Props` in React
ex.:                function App() {
                        return <Child somename="Lyza" ></Child>
                    }

                    function Child(props) {
                        return <div>{props.somename}</div>
                    }

code inside `<div>` would render 'Lyza'. Since components are functions, we can pass in any type of arg we want. and instead of passing it in through parentheses, we need to pass them in as attributes on the component in JSX (can name these attributes whatever we want without needing to add `data-` as prefix)
- inside that component, `props` is nothing more than name of parameter that can be changed to be anything we want

however in our case, `Gallery` is not a child of `Nav` so we can't pass `props` from `Nav` to `Gallery`. We can `lift` state up one level
    - whenever state needs to be used in multiple sibling components, normally a good idea to lift the state up until it can be passed as props to any child components that need it

new props also cause components to re-render. so even if setter may not cause children to re-render, the fact that the prop changed does

want to change tab title. can set it to `document.title = currentCategory` but this will not rerender component. so we must use a Hook to trigger a re-render on var value change.
    `useEffect( )` (vs `useState( )`) is an API that reflects lifecycle methods of component (ex when component mounts, unmounts, updates)
    read more here: https://reactjs.org/docs/hooks-reference.html