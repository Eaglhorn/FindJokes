import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { QuoteService } from './quote.service';
import {FfTestPageComponent} from "@app/ff-test-page/ff-test-page.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FfTestPageModule} from "@app/ff-test-page/ff-test-page.module";

@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, SharedModule, HomeRoutingModule],
  declarations: [HomeComponent],
  providers: [QuoteService]
})
export class HomeModule {}
