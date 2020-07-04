interface Entity {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(divId: string, lat: number = 0, lng: number = 0) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: lat,
        lng: lng,
      },
    });
  }

  addMarker(Entity: Entity): void {
    
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: Entity.location.lat,
        lng: Entity.location.lng,
      }
    })
  }
}
