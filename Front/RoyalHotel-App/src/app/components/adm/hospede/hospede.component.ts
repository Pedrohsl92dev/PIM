import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospede',
  templateUrl: './hospede.component.html',
  styleUrls: ['./hospede.component.scss']
})
export class HospedeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
