import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToasterServiceService } from './component/service/toaster-service.service';
import { AppRoutingModule } from './routes';

import { AppComponent } from './app.component';
import { TestCSSComponent } from './component/test-css/test-css.component';
import { RegUserComponent } from './component/reg-user/reg-user.component';
import { InicioComponent } from './component/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    TestCSSComponent,
    RegUserComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, AppRoutingModule
  ],
  providers: [ToasterServiceService, TestCSSComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
