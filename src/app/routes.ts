import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './component/inicio/inicio.component';
import { RegUserComponent } from './component/reg-user/reg-user.component';
import { TestCSSComponent } from './component/test-css/test-css.component';


const routes: Routes = [
  { path: '', component: TestCSSComponent},
  { path:'registrarse', component: RegUserComponent},
  { path:'inicio', component:InicioComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
