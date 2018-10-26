import { Component, OnInit, ViewChild } from "@angular/core";
import { Appointment } from "../appointment";
import { BuddyAPIService } from "./../buddy-api.service";

@Component({
  selector: "app-manage-appointment",
  templateUrl: "./manage-appointment.component.html",
  styleUrls: ["./manage-appointment.component.css"]
})
export class ManageAppointmentComponent implements OnInit {
  @ViewChild("f")
  form: any;

  appointment: Appointment = {
    id: 0,
    patientName: "",
    date: new Date(),
    consultation: ""
  };

  appointmentList: Appointment[] = [];
  consulationChoice = ["Lab Test", "Dentist", "Home Visit", "Ambulance"];
  btnText = "Add";
  constructor(private service: BuddyAPIService) {}

  ngOnInit() {
    this.service.getAllAppointments().subscribe(resp => {
      this.appointmentList = resp;
    });
  }

  edit(appointment) {
    this.appointment = appointment;
    this.btnText = "Update";
  }

  delete(appointment) {
    const idxPos = this.appointmentList.indexOf(appointment);
    this.service.cancelAppointment(appointment).subscribe(resp => {
      this.appointmentList.splice(idxPos, 1);
    });
  }

  submit(appt) {
    console.log(appt);
    if (this.btnText == "Add") {
      this.service.addAppointment(appt).subscribe(resp => {
        console.log(resp);
        this.appointmentList.push(resp);
        this.form.reset();
      });
    } else {
      this.service.updateAppointment(appt).subscribe();
    }
  }
}
