import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() color = 'blue';


  public get bgColor(): string {
    return `bg-${this.color}-400`;
  }

  ngOnInit(): void {
  }
}
