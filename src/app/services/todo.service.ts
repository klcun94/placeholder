import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Itodo } from '../interfaces/itodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  readonly URL = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private httpClient: HttpClient) { }
  async get(): Promise<Itodo[]> {
    return await this.httpClient.get<Itodo[]>(this.URL).toPromise();
  }
}
