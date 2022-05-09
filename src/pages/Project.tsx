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
  return <ProjectTable />
}

export default Project
