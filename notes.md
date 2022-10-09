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