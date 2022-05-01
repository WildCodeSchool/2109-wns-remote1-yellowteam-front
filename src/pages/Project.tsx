/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import { ReactElement } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import ProjectTable from 'src/components/Tables/Projects/Projects.table'

export type Dates = {
  startDate: Date | null
  endDate: Date | null
  dueDate: Date | null
}

const Project = (): ReactElement => {
  // const [dates, setDates] = useState<Dates>({
  //   startDate: new Date(),
  //   endDate: new Date(),
  //   dueDate: new Date(),
  // })
  // const [isDisabled, setIsDisabled] = useBoolean()
  // const [isPrivate, setIsPrivate] = useBoolean()

  // const { data, loading: loadingProjects } = useGetManagerProjectsQuery({
  //   variables: {
  //     where: {
  //       owner: {
  //         is: {
  //           id: {
  //             equals: userId,
  //           },
  //         },
  //       },
  //       is_disabled: {
  //         equals: false,
  //       },
  //     },
  //   },
  //   skip: !userId,
  // })
  // const [createProject] = useCreateProjectMutation({
  //   onCompleted: () => {
  //     client.refetchQueries({
  //       include: [GetManagerProjectsDocument],
  //     })
  //   },
  // })

  // const onSubmit = (data: ProjectCreateInput) => {
  //   createProject({
  //     variables: {
  //       data: {
  //         title: data.title,
  //         description: data.description,
  //         users: {
  //           connect: [{ id: userId }],
  //         },
  //         is_disabled: isDisabled,
  //         private: isPrivate,
  //         start_date: JSON.stringify(
  //           dates.startDate
  //             ?.toString()
  //             .replace('(Central European Standard Time)', '')
  //         ),
  //         end_date: JSON.stringify(
  //           dates.endDate
  //             ?.toString()
  //             .replace('(Central European Standard Time)', '')
  //         ),
  //         due_date: JSON.stringify(
  //           dates.dueDate
  //             ?.toString()
  //             .replace('(Central European Standard Time)', '')
  //         ),
  //         status_project: Status.NotStarted,
  //         total_time_spent: 0,
  //         owner: {
  //           connect: {
  //             id: userId,
  //           },
  //         },
  //       },
  //     },
  //   })
  //   onClose()
  //   reset()
  // }

  return <ProjectTable />
}

export default Project
