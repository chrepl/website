import React from 'react'
import { render } from '@testing-library/react'

import { Heading } from './Heading'

describe('Components', () => {
    describe('Heading', () => {
        it('should render given text', () => {
            const { getAllByText } = render(<Heading text="Render Me!" />)

            expect(getAllByText('Render Me!').length).toEqual(2)
        })

        it('should match snapshot', () => {
            const { container } = render(<Heading text="Test" />)

            expect(container).toMatchSnapshot()
        })
    })
})
