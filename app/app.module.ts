import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { AppComponent } from "./app.component";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { routes, navigatableComponents } from "./app.routing";

@NgModule({
  imports: [NativeScriptModule, 
            NativeScriptFormsModule,
            NativeScriptHttpModule,
            NativeScriptRouterModule,
            NativeScriptRouterModule.forRoot(routes)
            ],
  declarations: [AppComponent, ...navigatableComponents],
  bootstrap: [AppComponent]
})
export class AppModule {}
