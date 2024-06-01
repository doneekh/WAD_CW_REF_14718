export interface Grade extends GradeCreate {
    id: number;
}

export interface GradeCreate {
    studentId: 0,
    courseName: string,
    courseDescription: string,
    credits: number,
    instructorName: string,
    assignmentName: string,
    assignmentDescription: string,
    dueDate: string,
    maxPoints: number,
    pointsEarned: number,
    enrollmentDate: string,
    finalGrade: string,
}