// React Testing Library
import React from 'react';
import { render, cleanup } from '@testing-library/react';
// Import Jest-dom Package
import '@testing-library/jest-dom/extend-expect';
// import About
import About from '..';

// `afterEach` ensures after each test we don't have any leftover memory data
// that could give false results
afterEach(cleanup);

// test for about visibility
describe('About component', () => {
    // First Test
    it('renders', () => {
        render(<About />);
    });
    // Second Test
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
})