import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
// import { StoreModule } from '@ngrx/store';
import { nameReducer } from './name.reducer';

@NgModule({
    // declarations: [AppComponent, HeaderComponent],
    imports: [StoreModule.forRoot({ name: nameReducer })]
})
export class AppModule {
    
}