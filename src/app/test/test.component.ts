import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <br><br>
    <input [id]=courseId type="text" value="Angular">
    <br><br>
    <input [disabled]="isDisabled" id="{{courseId}}" type="text" value="Angular"><br><br>
  `,
  styles: [`
    p{
      text-align: center;
      font-size: 30px;
      color: Blue;
    }
  `
  ] 
})
export class TestComponent implements OnInit {
  public courseId = "123";
  public isDisabled = "true";
  public myUrl = window.location.href;
  constructor() { }

  ngOnInit(): void {}
   
  

}
