import { Status } from 'src/generated/graphql';

export  interface Project {
    id: string
    title: string;
    status_project: Status;
    due_date: string;
    tasks: {
        id: string;
        title: string;
        status_task: Status;
        user: any
    }[];
    users: any[];
}