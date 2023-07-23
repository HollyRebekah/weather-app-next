import {render, fireEvent, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom';
import Home from '../../app/page'

describe('Home page', () => {
    beforeEach(() => {
        global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve([])
        }));
      });

    it('should display an error message if the API does not return any data', async () => {
        const {getByTestId, getByRole} = render(<Home />)

        const button = getByRole('button')
        await waitFor(() => {
            fireEvent.click(button);
            expect(getByTestId('error-message')).toBeVisible()
        })  
    })

    afterEach(() => {
        jest.restoreAllMocks();
      });
})