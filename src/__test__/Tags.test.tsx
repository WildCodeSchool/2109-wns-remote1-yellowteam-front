import React from 'react'
import { render, screen } from '@testing-library/react'
import Tag from '../molecules/Tags'

describe('Renders the tags', () => {
  it('Renders the text of the tag', () => {
    render(<Tag text="fix" textColor="darkGreen" tagColor="lightGreen" />)
    const tagText = screen.getByText('fix')
    expect(tagText).toBeInTheDocument()
  })
})
