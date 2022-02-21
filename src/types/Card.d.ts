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
}
