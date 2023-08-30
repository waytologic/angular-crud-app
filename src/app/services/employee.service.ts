import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}
  
  addEmployee(data: any): Observable<any> {
   // return this._http.post('http://localhost:3000/employees', data);
     return this._http.post("https://my-json-server.typicode.com/waytologic/arpino"+'/employees', data);
  }

  updateEmployee(id: number, data: any): Observable<any> {
   // return this._http.put(`http://localhost:3000/employees/${id}`, data);
     return this._http.put("https://my-json-server.typicode.com/waytologic/arpino"+`/employees/${id}`, data);
  }

  getEmployeeList(): Observable<any> {
    //return this._http.get('http://localhost:3000/employees');
     return this._http.get("https://my-json-server.typicode.com/waytologic/arpino"+'/employees');
  }

  deleteEmployee(id: number): Observable<any> {
   // return this._http.delete(`http://localhost:3000/employees/${id}`);
     return this._http.delete("https://my-json-server.typicode.com/waytologic/arpino"+`/employees/${id}`);
  }
}
