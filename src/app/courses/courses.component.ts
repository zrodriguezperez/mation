import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';
import { Course } from './course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{

  courses:Course[]=[];
  constructor(private coursesService: CoursesService){}

   ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.coursesService.getCourses().subscribe((data) => {
      this.courses = data;
    });
  }

  onStatusUpdate_x(newValue:string, index:number){
    //console.log(newValue);
    this.courses[index].status = newValue;
  }
}
