import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comp-b',
  standalone: true,
  imports: [],
  templateUrl: './comp-b.component.html',
  styleUrl: './comp-b.component.scss'
})
export class CompBComponent {
  receivedData: string = '';

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    console.log('ngOnInit() B');
    this.dataService.mySubjectObservable$
      .subscribe((data: string) => {
        console.log('inside compo b , ', data)
        this.receivedData = data;
      });
  }
}
