import { HttpHeaders } from "@angular/common/http";

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + btoa('seemack:carlsburg')
  })
}

export const apiUrl = "http://localhost:8000/";
