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
   this.retrieveAll()
  }

  retrieveAll():void{
    this.courseService.retrieveAll().subscribe({
      next:courses => {
        this._courses = courses;
        this.filteredCourses = this._courses;
        this.filteredCourses = this._courses;
      },
      error:err => console.log('Error',err)
    })
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
