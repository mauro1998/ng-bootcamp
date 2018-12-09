import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './data-service/in-memory-data-service';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      delay: 200,
      passThruUnknownUrl: true,
      apiBase: 'api/',
    }),
  ],
})
export class CoreModule {}
