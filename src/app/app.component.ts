import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  AfterViewInit,
  viewChildren,
  ViewChildren,
  QueryList
} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AppComponent implements AfterViewInit{

  courses = COURSES;

  @ViewChildren(CourseCardComponent)
  cards: QueryList<CourseCardComponent>;

  /*@ViewChild('container')
  containerDiv: ElementRef;

  @ViewChild('cardRef1', {read: ElementRef})
  card1: ElementRef;

  @ViewChild('courseImage')
  courseImage: ElementRef;

  constructor() {
    console.log('constructor card1:', this.card1);
  }*/

  ngAfterViewInit(): void {

    this.cards.changes.subscribe(() => {
      console.log('cards changed:', this.cards);
    })

    //console.log('ngAfterViewInit cards:', this.cards);
    }

  protected onCourseSelected(course: Course) {
    //console.log('containerDiv:', this.containerDiv);
    //console.log('card1:', this.card1);
    console.log('cards:', this.cards);
  }

  protected onCoursesEdited() {
    this.courses.push( {
      id: 11,
      description: "Angular Core Deep Dive",
      iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
      longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
      category: 'INTERMEDIATE',
      lessonsCount: 10
    },);
  }
}
