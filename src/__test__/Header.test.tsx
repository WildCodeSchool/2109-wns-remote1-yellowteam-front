import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '../molecules/Header'

describe('Renders the header with the name', () => {
  it('Matches the name', () => {
    render(<Header userName="John" />)
    const greetingsText = screen.getByText('Welcome John')
    expect(greetingsText).toBeInTheDocument()
  })
  it('Does not match the name', () => {
    render(<Header userName="John" />)
    const greetingsText = screen.queryByText('Welcome Patricia')
    expect(greetingsText).not.toBeInTheDocument()
  })
})
