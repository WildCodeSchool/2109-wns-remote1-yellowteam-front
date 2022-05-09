import React from 'react'
import { screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import CreateProjectModal from '../components/Modals/CreateProjectModal'
import { render } from './test-utils'
import { act } from 'react-dom/test-utils'

describe('CreateProjectModalForm', () => {
  let mocks: any
  let form: any

  beforeEach(() => {
    mocks = {
      mockHandleSubmit: jest.fn((fn) => () => fn()),
      close: jest.fn(),
      register: jest.fn(),
      changeDate: jest.fn(() => console.log('dates')),
      change: jest.fn(),
    }
    form = render(<CreateProjectModal isOpen onClose={mocks.close} />)
  })
  it('should render the basic fields', () => {
    expect(
      screen.getByText('Create a new project for your team')
    ).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'title' })).toBeInTheDocument()
    expect(
      screen.getByRole('textbox', { name: 'description' })
    ).toBeInTheDocument()
    expect(screen.queryByTestId('is_disabled')).toBeTruthy()
    expect(screen.queryByTestId('private')).toBeTruthy()
    expect(screen.queryByTestId('start_date')).toBeTruthy()
    expect(screen.queryByTestId('end_date')).toBeTruthy()
    expect(screen.queryByTestId('due_date')).toBeTruthy()
    expect(screen.queryByTestId('submit')).toBeTruthy()
  })

  it('should validate form fields', async () => {
    fireEvent.input(screen.getByRole('textbox', { name: 'title' }), {
      target: {
        value: 'Project title',
      },
    })
    fireEvent.input(screen.getByRole('textbox', { name: 'description' }), {
      target: {
        value: 'Decription of the wonderful project',
      },
    })
    const labelVisible = screen.getByLabelText('Visible')
    const labelInvisible = screen.getByLabelText('Invisible')

    fireEvent.change(labelVisible, {
      target: { value: 'true' },
    })

    const labelPublic = screen.getByLabelText('Public')
    fireEvent.change(labelPublic, { target: { value: 'true' } })

    const { getByTestId } = form

    fireEvent.submit(getByTestId('form'))

    expect(
      (screen.getByRole('textbox', { name: 'title' }) as HTMLInputElement).value
    ).toBe('Project title')
    expect(
      (screen.getByRole('textbox', { name: 'description' }) as HTMLInputElement)
        .value
    ).toBe('Decription of the wonderful project')
    expect((labelVisible as HTMLInputElement).value).toBe('true')
    expect((labelInvisible as HTMLInputElement).value).toBe('false')
    expect((labelPublic as HTMLInputElement).value).toBe('true')
  })
})
