import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {
  tests: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {

  this.http.get<{message: string, status: string, tests: any}>('http://interviewapi.stgbuild.com/getQuizData')
  .subscribe(res => {

    this.tests = res.tests;

  });
}


}
