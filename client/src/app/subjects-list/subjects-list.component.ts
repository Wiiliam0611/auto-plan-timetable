import { Component, OnInit } from '@angular/core';
import {Subject} from "../subject";
import {SUBJECTS} from "../mockup-data";


@Component({
  selector: 'app-subjects-list',
  templateUrl: './subjects-list.component.html',
  styleUrls: ['./subjects-list.component.css']
})
export class SubjectsListComponent implements OnInit {

  subjects: Subject[];

  constructor() {
    this.subjects = SUBJECTS;
  }

  ngOnInit() {
  }

}
