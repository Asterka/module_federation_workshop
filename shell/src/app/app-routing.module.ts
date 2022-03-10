import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const APP_ROUTES: Routes = [
  {
    path: 'flat1',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:8081/remoteEntry.js',
        exposedModule: './ApartmentRouting',
      })
        .then((m) => m.AppRoutingModule)
        .catch(() => {
          console.log('2 Didnt load');
        }),
  },
  {
    path: 'flat2',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:8082/remoteEntry.js',
        exposedModule: './ApartmentRouting',
      })
        .then((m) => m.AppRoutingModule)
        .catch(() => {
          console.log('2 Didnt load');
        }),
  },
  {
    path: 'flat3',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:8083/remoteEntry.js',
        exposedModule: './ApartmentRouting',
      })
        .then((m) => m.AppRoutingModule)
        .catch(() => {
          console.log('3 Didnt load');
        }),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
