import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as employeeData from '../assets/dummy.json';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashblockComponent } from './components/splashblock/splashblock.component';
import { PageSplashComponent } from './components/page-splash/page-splash.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogPopupComponent } from './components/dialog-popup/dialog-popup.component';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import { DialogEvalsComponent } from './components/dialog-evals/dialog-evals.component';
import { AddblockComponent } from './components/addblock/addblock.component';
import { AddpopupComponent } from './components/addpopup/addpopup.component';


@NgModule({
  declarations: [
    AppComponent,
    SplashblockComponent,
    PageSplashComponent,
    TopnavComponent,
    DialogPopupComponent,
    DialogEvalsComponent,
    AddblockComponent,
    AddpopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSnackBarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
