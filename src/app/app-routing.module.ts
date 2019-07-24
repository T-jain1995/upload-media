import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UploadContainerComponent } from './upload-container/upload-container.component';

export const appRoutingComponents = [
];

/**
 * List of services used by the help module router.
 *
 * @const
 * @type {Object}
 */
export const appRoutingServices = [
];

/**
 * Route configuration for help module.
 *
 * @const
 * @type {Routes}
 */
const routes: Routes = [
  {
    component: UploadContainerComponent,
    data: {
      title: 'Upload'
    },
    path: ':upload'
  }
];

/**
 * Routing module for app module.
 *
 * @export
 * @class AppRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
