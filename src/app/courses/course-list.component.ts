import {Component, OnInit} from "@angular/core";
import {Course} from "./Course";
import {CourseService} from "./course.service";

//decoraitor descrevendo que essa classe é um componet
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
  courses : Course[] = [];

  constructor(private courseService:CourseService) {}

  ngOnInit(): void {
   this.courses = this.courseService.retrieveAll();
  }

}
