import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { SampleComponent } from './MyComponent/sample.component';
import { FormsModule } from '@angular/forms';
import{ RouterModule,Routes} from '@angular/router';

const appRoutes:Routes=[
    {path:'sample',component:SampleComponent},
    {path:'courses',component:CoursesComponent}
];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})

export class AppRoutingModule{

}
