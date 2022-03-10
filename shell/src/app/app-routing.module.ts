import { ElevatorStateService } from './elevator-state.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const APP_ROUTES: Routes = [
  {
    path: '1',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:8081/remoteEntry.js',
        exposedModule: './ApartmentRouting',
      })
        .then((m) => m.AppRoutingModule)
  },
  {
    path: '2',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:8082/remoteEntry.js',
        exposedModule: './ApartmentRouting',
      })
        .then((m) => m.AppRoutingModule)
  },
  {
    path: '3',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:8083/remoteEntry.js',
        exposedModule: './ApartmentRouting',
      })
        .then((m) => m.AppRoutingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
