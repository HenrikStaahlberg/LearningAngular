import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StarComponent } from "./star.component";
import { ConvertToSpacesPipe } from "./convert-to-spaces.pip";
import { FormsModule } from "@angular/forms";



@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        StarComponent
    ],
    providers: [

    ],
    exports: [
        StarComponent,
        CommonModule,
        FormsModule,
    ]
})
export class SharedModule {}