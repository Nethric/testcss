import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TestCSSService } from '../service/test-css.service';
import { ToasterServiceService } from '../service/toaster-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-test-css',
  templateUrl: './test-css.component.html',
  styleUrls: ['./test-css.component.css']
})
export class TestCSSComponent implements OnInit {

  constructor(private toastr:ToasterServiceService, private login:TestCSSService, private router:Router) { }

  usersel:any;
  passsel:any;
  nomsel:any;
  rolsel:any;

  ngOnInit(): void {
  }

  //First test!
  test(){
    this.toastr.Success("Welcome", 'Anuncio')
  }

  onSubmitLog(loginForm:NgForm){
    this.sesion(loginForm.value)
  }

  //login
  sesion(datos:any){
    this.login.login(datos).subscribe(respuesta =>{
      if(respuesta.estado===true){
        this.toastr.Success("Ha ingresado", 'Anuncio');
        console.log(respuesta.mensaje)
        //this.router.navigate(['inicio']);
      }else{
        this.toastr.Error("Usuario o contraseña incorrecto", 'Anuncio')
        console.log(respuesta.mensaje)
      }
    },
    error => {
      this.toastr.Error(error.message, 'Alerta');
    });
  }

}
