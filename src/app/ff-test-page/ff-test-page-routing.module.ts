import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import {FfTestPageComponent} from "@app/ff-test-page/ff-test-page.component";

const routes: Routes = [
  Shell.childRoutes([{ path: 'ff-test-page', component: FfTestPageComponent, data: { title: extract('FfTestPage') } }])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FfTestPageRoutingModule {}
