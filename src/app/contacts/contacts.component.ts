import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

  email:string = '';
  fullname:string = '';
  phoneno:string = '';

  hideMessage = true;
  hideErrorMessage = true;

  constructor (private http:HttpClient) {}


  submitForm() {
    console.log(this.email, this.fullname, this.phoneno)
    let formData = {
      data: {
        "FullName": this.fullname,
        "LeadEmail": this.email,
        "PhoneNo": this.phoneno
      }
    }

    this.http.post<any>('http://localhost:1337/api/forms', formData).subscribe(res => {
      console.log(res)
      if (formData.data !== null) {
        this.hideMessage = false
      } else {
        this.hideErrorMessage = false
      }
    })


  }

}
