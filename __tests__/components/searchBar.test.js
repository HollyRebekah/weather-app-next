import {render, fireEvent} from '@testing-library/react'
import SearchBar from '../../app/components/searchBar/index'


describe('SearchBar', () => {
    it('calls the getData function with the search term', () => {
        const mockCallback = jest.fn()
        const { getByRole } = render(<SearchBar handleSearch={mockCallback} />)
        const input = getByRole('textbox')
        const button = getByRole('button')
      
        fireEvent.change(input, { target: { value: 'Manchester' }})
        fireEvent.click(button);
        
        expect(mockCallback).toHaveBeenCalledWith('Manchester')
    })
})


