export interface Task {
    id: string
    status_task: 'IN_PROGRESS' | 'NOT_STARTED' | 'FIHISHED'
    title: string
    user: {
        avatar: string
        first_name: string
        }
    
}