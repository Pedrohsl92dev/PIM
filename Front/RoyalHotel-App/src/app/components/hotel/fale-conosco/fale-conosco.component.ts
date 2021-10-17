import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FaleConosco } from '@app/models/FaleConosco';
import { FaleConoscoService } from '@app/services/faleConosco.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-fale-conosco',
  templateUrl: './fale-conosco.component.html',
  styleUrls: ['./fale-conosco.component.scss']
})
export class FaleConoscoComponent implements OnInit {

  form: FormGroup;
  faleConosco = {} as FaleConosco;

  get f(): any {
    return this.form.controls;
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private faleConoscoService: FaleConoscoService,
  ) { }

  ngOnInit(): void {
    this.validation();
  }

  public validation(): void {
    this.form = this.fb.group({
      nome: [ '', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      assunto: ['', Validators.required],
      mensagem: ['', Validators.required]
    });
  }

  public enviar(): void {
    if (this.form.valid) {
      this.faleConosco = {...this.form.value};
      this.faleConoscoService.post(this.faleConosco).subscribe(
        () => {
          this.toastr.success('Mensagem enviada!', ' Sucesso');
          this.form.reset();
          this.router.navigate([`/dashboard`]);
        },
        (error: any) => {
          this.toastr.error('Erro ao enviar mensagem.', 'Erro!');
          console.log(error);
        }
      );
    } else {
      this.toastr.error('Preencha os campos obrigatórios.', 'Erro!');
    }
  }

  public resetForm(): void {
    this.form.reset();
    this.router.navigate([`dashboard`]);
  }

  public cssValidator(campoForm: FormControl | AbstractControl): any {
    return { 'is-invalid': campoForm.errors && campoForm.touched };
  }

}
