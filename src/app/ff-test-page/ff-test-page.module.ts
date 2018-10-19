import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {CoreModule} from "@app/core";
import {SharedModule} from "@app/shared";
import {HomeRoutingModule} from "@app/home/home-routing.module";
import {FfTestPageComponent} from "@app/ff-test-page/ff-test-page.component";
import {FfTestPageService} from "@app/ff-test-page/ff-test-page.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FfTestPageRoutingModule} from "@app/ff-test-page/ff-test-page-routing.module";

@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, SharedModule, HomeRoutingModule, FormsModule, ReactiveFormsModule, FfTestPageRoutingModule],
  declarations: [],
  providers: [FfTestPageService]
})
export class FfTestPageModule {

}
