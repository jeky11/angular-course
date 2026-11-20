import {AfterViewInit, Component, ContentChild, EventEmitter, Input, model, Output, TemplateRef, ViewChild} from '@angular/core';
import {Course} from '../model/course';
import {COURSES} from '../../db-data';
import {NgClass, NgStyle, NgTemplateOutlet} from '@angular/common';
import {CourseImageComponent} from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  imports: [
    NgClass,
    NgStyle,
    NgTemplateOutlet
  ],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent implements AfterViewInit {

  @Input({required: true})
  course:Course

  @Input({required: false})
  index:number

  @Input({required: false})
  noImageTpl: TemplateRef<any>;

  @Output()
  courseSelected = new EventEmitter<Course>();

  @ContentChild(CourseImageComponent)
  image:CourseImageComponent;

  @ContentChild('container')
  container;




  constructor() {
  }

  ngAfterViewInit(): void {
        console.log('Image:', this.image);
    console.log('container:', this.container);
    }

  ngOnInit() {
  }

  protected onCourseView() {
    console.log('Viewing course:', this.course);

    this.courseSelected.emit(this.course);
  }

  cardClasses() {
    if (this.course.category === 'BEGINNER'){
      return 'beginner';
    }

    return {
      'beginner': this.course.category === 'BEGINNER'
    };
  }

  protected cardStyles() {
    return {'text-decoration':'underline'};
  }
}
