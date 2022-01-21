import React, { useState, ReactElement, useEffect } from 'react'
import useAppState from 'src/hooks/useAppState'
import { Box, Text } from '@chakra-ui/react'
import { Project } from 'src/types/Project'
import {
  useGetUserInfosQuery,
  useGetUserProjectsQuery,
} from '../generated/graphql'
import Header from '../molecules/Header'
import TasksBoard from '../components/TasksBoard'
import UserBoardHeader from '../molecules/UserBoardHeader'

const useProjects = () => {
  const { user } = useAppState()
  const { data: userInfos } = useGetUserInfosQuery({
    variables: { id: user.id },
  })
  const { data: projectsData, loading } = useGetUserProjectsQuery({
    variables: { userId: user.id },
  })

  return {
    projectsData,
    loading,
    userInfos,
    user,
  }
}

const ProjectsBoard = (): ReactElement => {
  const { projectsData, userInfos } = useProjects()
  const [selectedProject, setSelectedProject] = useState<Project | undefined>(
    projectsData?.projects.length ? projectsData.projects[0] : undefined
  )
  const [selectedProjectTitle, setSelectedProjectTitle] = useState<
    string | undefined
  >(projectsData?.projects.length ? projectsData.projects[0].title : undefined)

  useEffect(() => {
    setSelectedProjectTitle(projectsData?.projects[0].title)
  }, [projectsData])

  useEffect(() => {
    setSelectedProject(
      projectsData?.projects.filter(
        (project) => project.title === selectedProjectTitle
      )[0]
    )
  }, [selectedProjectTitle])

  if (!projectsData || !userInfos)
    return (
      <Box marginLeft="69px" height="100%">
        <Header userName="" />
        <UserBoardHeader
          selectedTitle=""
          titleList={['']}
          setSelectedTitleCallBack={() => ['']}
        />
        <Text>No data to show</Text>
      </Box>
    )

  return (
    <Box marginLeft="69px" height="100%">
      <Header userName={userInfos.user.first_name} />
      <UserBoardHeader
        selectedTitle={selectedProjectTitle}
        titleList={projectsData.projects.map((p) => p.title)}
        setSelectedTitleCallBack={(title) => setSelectedProjectTitle(title)}
      />
      <TasksBoard
        tasksFinished={selectedProject?.tasks.filter(
          (task) => task.status_task === 'FIHISHED'
        )}
        tasksInProgress={selectedProject?.tasks.filter(
          (task) => task.status_task === 'IN_PROGRESS'
        )}
        tasksNotStarted={selectedProject?.tasks.filter(
          (task) => task.status_task === 'NOT_STARTED'
        )}
      />
    </Box>
  )
}

export default ProjectsBoard
