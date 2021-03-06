// please load from "http://maps.google.com/maps/api/js?key=<API_KEY>&libraries=places" in <script> tag

declare module google.maps {
  export namespace places {
    export class SearchBox {
      constructor(e: HTMLElement);
    }
  }

  export enum MapTypeId {
    ROADMAP
  }

  export interface MapOption {
    zoom: number;
    mapTypeId: MapTypeId;
    mapTypeControl: boolean;
    streetViewControl: false;
    fullscreenControl: false;
  }

  export class Map {
    constructor(e: HTMLElement, option: MapOption);
  }

  export class LatLng {
    public lag: number;
    public lng: number;

    constructor(lag: number, lng: number);
  }

  export enum Animation {
    DROP
  }

  export interface MarkerOption {
    map: Map;
    animation: Animation;
    position: LatLng;
  }

  export class Marker {
    constructor(option: MarkerOption);
  }

  export interface GeocodeOption {
    location: LatLng;
  }

  export interface GeocoderResult {
    formatted_address: string;
  }

  export class Geocoder {
    geocode(option: GeocodeOption, callback: (results: GeocoderResult[], status: "OK" | string) => void): void;
  }

  export class InfoWindow {
    setContent(s: string): void;

    open(map: Map, marker: Marker): void;
  }

  export interface ClickEvent {
    latLng: {
      lat(): number;
      lng(): number;
    }
  }
}
