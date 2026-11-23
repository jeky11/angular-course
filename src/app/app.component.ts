import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren, ChangeDetectionStrategy} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AppComponent implements AfterViewInit {

    courses = COURSES;

    @ViewChild(CourseCardComponent, {read:HighlightedDirective})
    isHighlighted: HighlightedDirective;

    @ViewChildren(CourseCardComponent, {read: ElementRef})
    cards : QueryList<ElementRef>;


    constructor() {

    }

    ngAfterViewInit() {
      console.log(this.isHighlighted);
    }

    onCourseSelected(course:Course) {

    }

  protected onToggle(isHighlighted: boolean) {
    console.log(isHighlighted);
  }
}
