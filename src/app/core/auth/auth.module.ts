import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../../../environments/environment';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.config),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [AuthService, AuthGuard],
})
export class AuthModule {}
