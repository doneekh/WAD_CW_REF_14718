import { Grade } from "./grade.interfaces";


export interface Student extends StudentCreate {
    id: number;
}


export interface StudentCreate {
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: string;
    gender: string;
    classYear: string | null;
}