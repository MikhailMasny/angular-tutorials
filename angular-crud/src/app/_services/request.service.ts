import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const CRUD_API = 'https://localhost:5001/api/crud';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(private http: HttpClient) { }

  getAll() : Observable<any> {
    return this.http.get(CRUD_API);
  }

  get(id: number) : Observable<any> {
    return this.http.get(CRUD_API + "/" + id);
  }

  post(stringVar: string): Observable<any> {
    return this.http.post(CRUD_API, {
      stringVar
    }, httpOptions);
  }

  put(id: number, stringVar: string): Observable<any> {
    return this.http.put(CRUD_API + "/" + id, {
      stringVar
    }, httpOptions);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(CRUD_API + "/" + id);
  }
}

