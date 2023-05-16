import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  message: string = ""; // biến chưa giá trị của input

  search(event: any): void {
    console.log(event.target.message.value);
  }

}
