import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

export interface ChipColor {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: 'app-society-register',
  templateUrl: './society-register.component.html',
  styleUrls: ['./society-register.component.css']
})
export class SocietyRegisterComponent implements OnInit {
  availableColors: ChipColor[] = [
    { name: 'none', color: undefined },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' },
  ];
  societyregister !: FormGroup;
  constructor() { }

  ngOnInit() {

  }

  FormCreation() {
    this.societyregister = new FormGroup({
      'societyData': new FormGroup({
        'username': new FormControl(null, [Validators.required]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('female'),
      'hobbies': new FormArray([])
    });
  }
}
