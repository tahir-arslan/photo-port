import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Gallery from '..'

// declare prop
const portrait = { name: "portraits", description: "Portraits of people in my life" };

afterEach(cleanup)

// render test
describe('Gallery is rendering', () => {
    it('renders', () => {
        render(<Gallery currentCategory={portrait} />);
    });
})

// ensure gallery matches snapshot
it('matches snapshot', () => {
    const { asFragment } = render(<Gallery currentCategory={portrait} />)
    expect(asFragment()).toMatchSnapshot()
})

// <h1> should be portrait
it('renders', () => {
    const { getByTestId } = render(<Gallery currentCategory={portrait} />)
    expect(getByTestId('h1tag')).toHaveTextContent('Portraits')
})

it('renders', () => {
    render(<Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
    />);
})