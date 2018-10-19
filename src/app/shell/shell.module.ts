import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import {FfTestPageComponent} from "@app/ff-test-page/ff-test-page.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [CommonModule, TranslateModule, NgbModule, RouterModule, FormsModule],
  declarations: [HeaderComponent, ShellComponent, FfTestPageComponent]
})
export class ShellModule {}
