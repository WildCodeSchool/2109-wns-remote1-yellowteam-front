import { ChangeEvent, useEffect } from 'react'
import { Flex, Select, Text, useColorMode } from '@chakra-ui/react'
import DarkModeToggle from 'react-dark-mode-toggle'
import useBoardState from 'src/hooks/useBoardState'
import useProjects from 'src/hooks/useProjects'
import NotificationsHOC from '../Notifications/NotificationsHOC'
import SearchInput from '../Assets/SearchInput'

const Header = (): JSX.Element => {
  const { toggleColorMode, colorMode } = useColorMode()
  const { selectedProject, dispatchsetSelectedProject } = useBoardState()
  const { projects } = useProjects()

  useEffect(() => {
    if (projects) {
      dispatchsetSelectedProject(projects[0].id)
    }
  }, [projects])

  return (
    <Flex
      direction={['column-reverse', 'column-reverse', 'row', 'row']}
      width="full"
      alignItems={['justify-between', 'justify-between', 'center', 'center']}
      justifyContent={[
        'flex-start',
        'flex-start',
        'space-between',
        'space-between',
      ]}
    >
      <Flex
        w="full"
        alignItems="center"
        direction={['column', 'column', 'row', 'row']}
        my={10}
      >
        <Text mr={5}>Select a project</Text>

        <Select
          width={['full', 'full', '200px']}
          value={selectedProject}
          onChange={(event: ChangeEvent<HTMLSelectElement>) =>
            dispatchsetSelectedProject(event.target.value)
          }
        >
          {projects?.map((p) => (
            <option key={p.id} value={p.id}>
              {`Projet ${p.title}`}
            </option>
          ))}
        </Select>
      </Flex>
      <Flex
        w={['full']}
        alignItems="center"
        justifyContent={[
          'space-between',
          'space-between',
          'flex-end',
          'flex-end',
        ]}
        as="button"
        data-testid="notifications-button"
      >
        <SearchInput />
        <DarkModeToggle
          className="switch"
          onChange={toggleColorMode}
          checked={colorMode === 'dark'}
          size={60}
        />
        <NotificationsHOC />
      </Flex>
    </Flex>
  )
}

export default Header
