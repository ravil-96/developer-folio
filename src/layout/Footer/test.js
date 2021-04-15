import { screen } from '@testing-library/react';
import Footer from '.';

describe('Footer', () => {
    test('it shows my name', () => {
        render(<Footer />);
        const content = screen.queryByText(/Ravil Shafiyev/i);
        expect(content).toBeInTheDocument();
    })
})