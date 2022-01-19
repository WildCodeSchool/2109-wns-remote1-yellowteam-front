import React from 'react'
import { render, screen } from '@testing-library/react'
import UserNavBar from '../components/UserNavBar'

describe('Renders the user navbar with all the elements', () => {
  it('Renders the tasks button', () => {
    render(<UserNavBar />)
    const taskButton = screen.getByTestId('tasks-button')
    expect(taskButton).toBeInTheDocument()
  })
  it('Renders the user icon button', () => {
    render(<UserNavBar />)
    const userIconButton = screen.getByTestId('user-icon-button')
    expect(userIconButton).toBeInTheDocument()
  })
  it('Renders the notification bell button', () => {
    render(<UserNavBar />)
    const userIconButton = screen.getByTestId('notifications-button')
    expect(userIconButton).toBeInTheDocument()
  })
  it('Renders the sign out button', () => {
    render(<UserNavBar />)
    const userIconButton = screen.getByTestId('sign-out-button')
    expect(userIconButton).toBeInTheDocument()
  })
})
