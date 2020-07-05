export interface Mappable {
  markerContent(): string;
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

  addMarker(Mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: Mappable.location.lat,
        lng: Mappable.location.lng,
      },
    });
    const infoWindow = new google.maps.InfoWindow({
      content: Mappable.markerContent()
    })

    infoWindow.open(this.googleMap, marker)
    marker.addListener("click", ()=>{
      const infoWindow = new google.maps.InfoWindow({
        content: Mappable.markerContent()
      })

      infoWindow.open(this.googleMap, marker)
    })
    infoWindow.open(this.googleMap, marker)

  }
}
