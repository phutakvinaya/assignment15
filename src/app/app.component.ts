import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[FormBuilder,Validators]
})
export class AppComponent {
  title = 'assignment15.1';
  constructor(private fbobj:FormBuilder){}
  MarvellousForm = this.fbobj.group({
    Firstname : ['',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]],
    Lastname:['',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]],
    Phone:['',[Validators.required,Validators.pattern('[- +()0-9]{10}'),Validators.minLength(10)]],
    Email: ['', [Validators.required, Validators.pattern(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/)]],
    City:['',[Validators.required,Validators.minLength(4),Validators.pattern('^[a-zA-Z ]*$')]],
    State:['',[Validators.required]],
    ZipCode:['',[Validators.required, Validators.pattern("^[0-9]*$"),Validators.minLength(5)]],
    comments:['',[Validators.required,Validators.maxLength(2)]],
    state:['',Validators.required]
  })

}
