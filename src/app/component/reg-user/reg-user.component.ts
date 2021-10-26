import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegUserService } from '../service/reg-user.service';
import { ToasterServiceService } from '../service/toaster-service.service';

@Component({
  selector: 'app-reg-user',
  templateUrl: './reg-user.component.html',
  styleUrls: ['./reg-user.component.css']
})
export class RegUserComponent implements OnInit {

  usersel:any;
  passsel:any;
  nomsel:any;
  rolsel:any;

  constructor(private toastr:ToasterServiceService, private login:RegUserService) { }

  ngOnInit(): void {
  }

  onSubmitCrear(regForm:NgForm){
    this.crear(regForm.value)
    //console.log(regForm.value)
    this.resetForm(regForm);
  }

  //crear
  crear(datos:any){
    this.login.crear(datos).subscribe(respuesta =>{
      if(respuesta.estado===true){
        //console.log(respuesta.mensaje)
        this.toastr.Success("Se ha registrado con exito", 'Alerta')
      }else{
        //console.log(respuesta.mensaje)
        this.toastr.Error("Error, no se pudo registrar", 'Alerta')
      }
    },
    error => {
      this.toastr.Error(error.message, 'Alerta');
    });
  }

  resetForm(form:  NgForm)  {         
    form.resetForm();  
  }

}
