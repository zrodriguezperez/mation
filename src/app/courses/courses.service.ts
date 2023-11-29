import { Injectable } from "@angular/core";
import { Course } from "./course.model";
import { Observable, Observer } from "rxjs";


@Injectable({
    providedIn:'root',
})

export class CoursesService{
    courses:Course[] = [
        {
            name: 'Angular Complete Course',
            description: 'Learn Angular Complete Course',
            status: 'active',
          },
          {
            name: 'Javascript Complete Course',
            description: 'Learn Javascript Complete Course',
            status: 'active',
          },
          {
            name: 'HTML and css Complete Course',
            description: 'Learn HTML and css Complete Course',
            status: 'active',
          },
     ];

     getCourses(): Observable<Course[]> {
        const courseObservable = 
            new Observable((observer: Observer<Course[]>) => {
                setTimeout(()=> {
                    observer.next(this.courses);
                }, 2000);
            });
        return courseObservable;    
     }
}
