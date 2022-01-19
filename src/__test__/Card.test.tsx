import { render, screen } from '@testing-library/react'
import React from 'react'
import Card from '../components/Card'
import Tag from '../molecules/Tags'
import PlaceholderIcon from '../static/svg/PlaceholderIcon'

describe('renders the card with all the elements', () => {
  it('renders the title of the card', () => {
    render(
      <Card
        title="Titre de la carte"
        photo={<PlaceholderIcon />}
        tag={<Tag text="fix" textColor="darkBrown" tagColor="lightBrown" />}
      />
    )
    const title = screen.getByText('Titre de la carte')
    expect(title).toBeInTheDocument()
  })
  it('renders the avatar of the card', () => {
    render(
      <Card
        title="Titre de la carte"
        photo={<PlaceholderIcon />}
        tag={<Tag text="fix" textColor="darkBrown" tagColor="lightBrown" />}
      />
    )
    const avatar = document.body.querySelector('svg')
    expect(avatar).toBeInTheDocument()
  })
  it('renders the tag on the card', () => {
    render(
      <Card
        title="Titre de la carte"
        photo={<PlaceholderIcon />}
        tag={<Tag text="fix" textColor="darkBrown" tagColor="lightBrown" />}
      />
    )
    const tagText = screen.getByText('fix')
    expect(tagText).toBeInTheDocument()
  })
})
