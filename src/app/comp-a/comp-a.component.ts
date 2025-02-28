import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comp-a',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './comp-a.component.html',
  styleUrl: './comp-a.component.scss'
})
export class CompAComponent {
  inputData = "Avinash";

  constructor(private dataService: DataService) {
    this.dataService.setData(this.inputData);
  }

  ngOnInit() {
    console.log('ngOnInit() A');
  }

  onDataChange(event: string) {
    console.log('onDataChange');
    this.dataService.setData(event);
  }
}
