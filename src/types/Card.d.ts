interface ICard {
  taskId: string
  title?: string
  photo?: ReactElement
  tag?: ReactElement
}

// Use for component CardDetails with all task informations
interface ICardDetails extends ICard {
  description?: string
  user?: IUserTaskComments
  comments?: IComment[]
  total_time_spent?: int
  private?: boolean
  is_disabled?: boolean
  status_task?: any // TODO change type
  total_time_spent?: int
  start_date?: DateTime
  end_date?: DateTime
  created_at?: DateTime
  updated_at?: DateTime
  user?: any // TODO change type
  project?: any // TODO change type
  files?: any // TODO change type
}
