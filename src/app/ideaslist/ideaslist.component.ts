import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ideaslist',
  templateUrl: './ideaslist.component.html',
  styleUrls: ['./ideaslist.component.css']
})
export class IdeaslistComponent implements OnInit {

  data: string = "I like this read-more component because it's very helpful. This tutorial so good. I will share it with others.";
  dataLength: boolean;
  constructor() { 
    this.isReadMore(this.data)
  }
  ngOnInit(): void {
    
  }

  isReadMore(data:string) {
    // (data.length > 30) ? this.dataLength = false : this.dataLength = true;
    this.dataLength = !(data.length > 30)
  }

}
