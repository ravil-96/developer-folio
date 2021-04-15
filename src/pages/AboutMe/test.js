import { render, screen } from '@testing-library/react';
import AboutMe from '.';

describe('AboutMe', () => {
    test('it shows page header', () => {
        render(<AboutMe />)
        expect(screen.getByRole('heading').textContent).toBe('° A Dancer, a Programmer, a Walker and an Arts Enthusiast °');
    })

    test('it shows the paragraph', () =>{
        render(<AboutMe />)
        const myParagraph = screen.getByRole('my-paragraph');
        expect(myParagraph).toBeInTheDocument();
        const myParagraphText = screen.getByRole('my-paragraph').textContent;
        expect(myParagraphText).toStartWith('Tech savvy and an extroverted introvert');
    })
})