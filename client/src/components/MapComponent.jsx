import { Map, MapsApiProvider } from "google-maps-api-react-map";

const center = {
  lat: 8.5410261,
  lng: 39.2705461,
};

const MapContainer = ({ center }) => {
  return (
    <div className="h-[30vh] lg:h-[40vh]  w-full">
      {" "}
      {/* Set a fixed height */}
      <Map center={center}></Map>
    </div>
  );
};

const MapComponent = () => {
  return (
    <div className="App">
      <MapsApiProvider apiKey="AIzaSyB3qFUU_gfc1n5MooL0ypzqPPUqQ-eIw6E">
        <MapContainer center={center} />
      </MapsApiProvider>
    </div>
  );
};

export default MapComponent;
