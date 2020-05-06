import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoService } from './services/todo.service';
import { MatTableDataSource } from '@angular/material/table';
import { Itodo } from './interfaces/itodo';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'placeholder';
  displayedColumns: string[] = ['id', 'userId', 'title', 'completed'];
  dataSource: MatTableDataSource<Itodo>;
  @ViewChild(MatSort)sort: MatSort;
  @ViewChild(MatPaginator)page: MatPaginator;
  constructor(private todoService: TodoService) {}
  async ngOnInit() {
    const data = this.todoService.get();
    this.dataSource = new MatTableDataSource<Itodo>(await this.todoService.get());
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.page;
  }
  filterKeyUp(value: string) {
    this.dataSource.filter = value;
  }
}
