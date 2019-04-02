import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';
import { DialogsModule } from './modules/dialogs/dialogs.module';
import { MaterialModule } from './modules/material/material.module';
import { CoreModule } from './modules/core/core.module';
import { ErrorModule } from './modules/error/error.module';
import { LoaderModule } from './modules/loader/loader.module';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { environment } from '../environments/environment';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		SharedModule,
		DialogsModule,
		AppRoutingModule,
		MaterialModule,
		CoreModule,
		ErrorModule,
		LoaderModule,
		NgxsModule.forRoot([]),
		NgxsReduxDevtoolsPluginModule.forRoot({
			name: 'HouseholdFinances',
			disabled: environment.production
		})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
