import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatDividerModule, MatExpansionModule, MatIconModule, MatListModule, MatSidenavModule,
  MatButtonModule, MatCardModule, MatGridListModule, MatDialogModule, MatProgressBarModule,
  MatTableModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { FileDropModule } from 'ngx-file-drop';
import { LoginComponent } from './login/login.component';
import { appRoutingComponents, appRoutingServices, AppRoutingModule } from './app-routing.module';
import { UploadContainerComponent, DialogUploadContainerComponent } from './upload-container/upload-container.component';
import { UploadDialogComponent } from './upload-dialog/upload-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    appRoutingComponents,
    UploadComponent,
    LoginComponent,
    UploadContainerComponent,
    UploadDialogComponent,
    DialogUploadContainerComponent
  ],
  entryComponents: [DialogUploadContainerComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatDialogModule,
    MatProgressBarModule,
    MatTableModule,
    FileDropModule
  ],
  providers: [
    appRoutingServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
