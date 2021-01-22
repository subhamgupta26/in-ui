import { Component, ViewEncapsulation, Input, AfterViewInit, ElementRef } from "@angular/core";


@Component({
  selector: 'app-readmore',
  templateUrl: './readmore.component.html',
  styleUrls: ['./readmore.component.css']
})
export class ReadmoreComponent implements AfterViewInit {
  @Input() dataLength: boolean;
  public isCollapsed: boolean = true;
  public isCollapsable: boolean = false;
  constructor(private elementRef: ElementRef) {}
  ngAfterViewInit() {
  }

}
