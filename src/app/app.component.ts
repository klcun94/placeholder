import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';
import { MatTableDataSource } from '@angular/material/table';
import { Itodo } from './interfaces/itodo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'placeholder';
  displayedColumns: string[] = ['id', 'userId', 'title', 'completed'];
  dataSource: MatTableDataSource<Itodo>;
  constructor(private todoService: TodoService) {}
  async ngOnInit() {
    this.dataSource = new MatTableDataSource<Itodo>(await this.todoService.get());
  }
  filterKeyUp(value: string) {
    this.dataSource.filter = value;
  }
}
