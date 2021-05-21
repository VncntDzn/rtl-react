import { render } from '@testing-library/react';
import Title from '../Title';

describe('Checks the title component', () => {
    it('checks the value of the Title component', () => {
        const { getByLabelText } = render(<Title />);
        const titleValue = getByLabelText('title')
        expect(titleValue).toBeInTheDocument()
        expect(titleValue).toHaveTextContent('MY RTL PROJECT')
    })
})