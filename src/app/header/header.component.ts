import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  queryField = new FormControl();

  constructor() { }
  
  ngOnInit() {
  }
  
  onSearch() { 
    if (this.queryField.value == '' || this.queryField.value == null || this.queryField.value == 'null') {
      localStorage.setItem('descricao', ' ');
    } else {
      localStorage.setItem('descricao', this.queryField.value);
    }
    localStorage.setItem('categoria', ' ');
    // location.reload();
    window.location.replace("http://localhost:4200/");
  }

}
