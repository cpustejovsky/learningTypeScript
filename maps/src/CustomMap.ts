export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(divId: string, lat: number, lng: number) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 5,
      center: {
        lat: lat,
        lng: lng,
      },
    });
  }
}
