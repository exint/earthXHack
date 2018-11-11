import { Component } from '@angular/core';

@Component({
  selector: 'ngx-gmaps',
  styleUrls: ['./gmaps.component.scss'],
  template: `
    <nb-card>
      <nb-card-header>Google Maps</nb-card-header>
      <nb-card-body>
        <agm-map [latitude]="latMx" [longitude]="lngMx" [zoom]="5">
          <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>
          <agm-marker [latitude]="lat1" [longitude]="lng1"></agm-marker>
          <agm-marker [latitude]="lat2" [longitude]="lng2"></agm-marker>
          <agm-marker [latitude]="lat3" [longitude]="lng3"></agm-marker>
          <agm-marker [latitude]="lat4" [longitude]="lng4"></agm-marker>
          <agm-marker [latitude]="lat5" [longitude]="lng5"></agm-marker>
        </agm-map>
      </nb-card-body>
    </nb-card>
  `,
})
export class GmapsComponent {

  latMx = 23.2939721;
  lngMx = -111.6412146;

  lat = 25.968151;
  lng = -100.292328;

  lat1 = 19.403753;
  lng1 = -98.987037;

  lat2 = 17.995604;
  lng2 = -94.639368;

  lat3 = 19.110261;
  lng3 = -98.279379;

  lat4 = 19.043100;
  lng4 = -98.052715;

  lat5 = 16.799515;
  lng5 = -93.272165;

   


}
