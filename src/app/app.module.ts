import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Angular2SocialLoginModule } from 'angular2-social-login';
import { FacebookModule } from 'ngx-facebook';
import { ImageZoomModule } from 'angular2-image-zoom';
import { AppRoutingModule } from './app.routing';
import { CloudinaryModule, CloudinaryConfiguration } from '@cloudinary/angular-4.x';
import { Cloudinary } from 'cloudinary-core';
import { FileUploadModule } from 'ng2-file-upload';
import { SharedModule} from './shared/module/shared.module';
import { UiTreeModule } from './shared/layout/ui-tree/ui-tree.module';
import { GlobalModule } from './global/global.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './global/login/login.component';
import { AccountModule } from './account/account.module';
import { CoreModule } from './core/module/core.module';
import { NotificationModule } from './shared/layout/notification/notification.module';
import { FooterModule } from './shared/layout/footer/footer.module';
import { ApiService } from './shared/services/api.service';

// tslint:disable-next-line:max-line-length
const cloud = CloudinaryModule.forRoot({Cloudinary}, { cloud_name: 'asian-tech', api_key: '829637522354547', api_secret: '8xXUcttJ7oaA1L-xGoWsuhbfBSo' } as CloudinaryConfiguration);

declare var require: any;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    Angular2SocialLoginModule,
    FacebookModule.forRoot(),
    cloud,
    FileUploadModule,
    AppRoutingModule,
    AccountModule,
    GlobalModule,
    CoreModule.forRoot(),
    UiTreeModule,
    NotificationModule,
    FooterModule
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
