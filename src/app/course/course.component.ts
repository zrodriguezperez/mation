import { Component, ElementRef, EventEmitter, 
         Input, Output, ViewChild } from '@angular/core';
import { Course } from '../courses/course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  @Input() course_x!:Course 
  @ViewChild('statusRef') 
            statusRef!:ElementRef<HTMLSelectElement>
  @Output() statusUpdated = new EventEmitter<string>();

  onStatusUpdate(){
    const selectedValue = this.statusRef.nativeElement.value;
    this.statusUpdated.emit(selectedValue);
  }
}
