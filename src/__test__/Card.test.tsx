import { screen } from '@testing-library/react'
import React from 'react'
import { Status } from 'src/generated/graphql'
import Card from '../components/Tasks/Task.card'
import Tag from '../components/molecules/Tags'
import PlaceholderIcon from '../static/svg/PlaceholderIcon'
import { render } from './test-utils'

const mockedTask = {
  id: '1',
  title: 'Task 1',
  description: 'Description 1',
  tags: ['tag1', 'tag2'],
  status_task: Status.InProgress,
  user: {
    id: '1',
    name: 'User 1',
    email: 'test@gmail.fr',
    avatar: 'http://test.com/avatar.png',
    first_name: 'john',
  },
}

describe('renders the card with all the elements', () => {
  it('renders the title of the card', () => {
    render(
      <Card
        task={mockedTask}
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
        task={mockedTask}
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
        task={mockedTask}
        title="Titre de la carte"
        photo={<PlaceholderIcon />}
        tag={<Tag text="fix" textColor="darkBrown" tagColor="lightBrown" />}
      />
    )
    const tagText = screen.getByText('fix')
    expect(tagText).toBeInTheDocument()
  })
})
