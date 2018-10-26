import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Catalog } from "./catalog";
import { Observable } from "rxjs";
import { Transaction } from "./transaction";
import { Appointment } from "./appointment";

@Injectable({
  providedIn: "root"
})
export class BuddyAPIService {
  baseUrl = "http://localhost:3000/";
  appointUrl = this.baseUrl + "appointments";
  headers = new HttpHeaders().set("content-type", "application/json");

  constructor(private http: HttpClient) {}
  getCatalog(): Observable<Catalog[]> {
    return this.http.get<Catalog[]>(this.baseUrl + "medBuddy");
  }

  getTxHistory(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.baseUrl + "history");
  }

  getAllAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.appointUrl);
  }
  cancelAppointment(appointment: Appointment): Observable<Appointment> {
    const deleteUrl = this.appointUrl + "/" + appointment.id;
    return this.http.delete<Appointment>(deleteUrl);
  }

  updateAppointment(appointment: Appointment): Observable<Appointment> {
    const updateUrl = this.appointUrl + "/" + appointment.id;
    return this.http.put<Appointment>(updateUrl, appointment);
  }
  addAppointment(appointment: Appointment): Observable<Appointment> {
    console.log(appointment);
    return this.http.post<Appointment>(this.appointUrl, appointment, {
      headers: this.headers
    });
  }
}
