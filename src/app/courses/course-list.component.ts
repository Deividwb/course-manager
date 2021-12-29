import {Component, OnInit} from "@angular/core";
import {Course} from "./Course";
import {CourseService} from "./course.service";

//decoraitor descrevendo que essa classe é um componet
@Component({
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
  filteredCourses : Course[] = [];

  _courses : Course[] = [];
  _filterBy!: string;

  constructor(private courseService:CourseService) {}

  ngOnInit(): void {
   this._courses = this.courseService.retrieveAll();
   this.filteredCourses = this._courses;
  }

  set filter(value: string){
    this._filterBy = value;
    this.filteredCourses = this._courses.filter((course: Course) => course
      .name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase())>-1);
  }

  get filter(){
    return this._filterBy;
  }

}
