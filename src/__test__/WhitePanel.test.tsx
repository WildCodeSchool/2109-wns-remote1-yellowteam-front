import React from 'react'
import { render, RenderOptions, screen } from '@testing-library/react'
import WhitePannel from 'src/components/WhitePannel'
import { Provider } from 'react-redux'
import store from 'src/redux/store'
import { BrowserRouter as Router } from 'react-router-dom'

const AllTheProviders = ({ children }: any) => (
  <Provider store={store}>
    <Router>{children}</Router>
  </Provider>
)

describe('Renders the title and handle close button', () => {
  const component = <div>Random element</div>

  it('Renders the text of the title and the close button', () => {
    render(
      <AllTheProviders>
        <WhitePannel title="Beautiful title" close>
          {component}
        </WhitePannel>
      </AllTheProviders>
    )
    const title = screen.getByText('Beautiful title')
    expect(title).toBeInTheDocument()
    const closeButton = screen.getByRole('button')
    expect(closeButton).toBeInTheDocument()
  })
  it('Renders box when close button is false', () => {
    render(
      <AllTheProviders>
        <WhitePannel title="Beautiful title" close={false}>
          {component}
        </WhitePannel>
      </AllTheProviders>
    )
    const box = screen.getByTestId('box-with-padding')
    expect(box).toBeInTheDocument()
  })
})
