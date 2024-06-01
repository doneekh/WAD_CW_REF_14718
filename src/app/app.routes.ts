import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { GradesComponent } from './pages/grade/grade';
import { GradeSingleComponent } from './pages/grade-single/grade-single.component';
import { GradeEditComponent } from './pages/grade-edit/grade-edit.component';
import { GradeCreateComponent } from './pages/grade-create/grade-create.component';
import { StudentComponent } from './pages/student/student.component';
import { StudentSingleComponent } from './pages/student-single/student-single.component';
import { StudentEditComponent } from './pages/student-edit/student-edit.component';
import { StudentCreateComponent } from './pages/student-create/student-create.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path:"grade",
        component: GradesComponent
    },
    {
        path:"grade/:id",
        component: GradeSingleComponent
    },
    {
        path:"grade/:id/edit", 
        component: GradeEditComponent
    },
    {
        path:"grade-create",
        component: GradeCreateComponent
    },
    {
        path:"student",
        component: StudentComponent
    },
    {
        path:"student/:id",
        component: StudentSingleComponent
    },
    {
        path:"student/:id/edit",
        component: StudentEditComponent
    },
    {
        path:"student-create",
        component: StudentCreateComponent
    }
];
