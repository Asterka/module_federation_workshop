import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const APP_ROUTES: Routes = [
  {
    path: "",
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:8082/remoteEntry.js',
        exposedModule: './ApartmentRouting',
      }).then((m) => m.AppRoutingModule).catch(()=>{
      }),
      outlet:'2'
    },
];

@NgModule({
  imports: [RouterModule.forChild(APP_ROUTES)],
  exports: [RouterModule],
})
export class Flat2Router {}
