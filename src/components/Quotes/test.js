import { render, screen } from '@testing-library/react';
import Quotes from '.';

describe('Quotes', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    })

    test('it renders a loading message when no joke is loaded', () => {
        render(<Quotes />);
        expect(screen.getByText('Quotes are on their way!')).toBeInTheDocument();
    })

    test('it loads a joke from data on mount',()=>{
        render(<Quotes />);
        expect(screen.getBy)

    })

    test('it starts 10-second interval on mount', () =>{
        render(<Quotes />);
        expect(setInterval).toHaveBeenCalledWith(expect.any(Function), 10000);
    })

})