import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BannerComponent } from './banner/banner.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
      BannerComponent,
      SliderComponent
    ],
    exports: [
      BannerComponent,
      SliderComponent
    ]
})
export class UiModule {}