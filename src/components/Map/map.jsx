import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Map = () => {
  return (
    <GoogleMap
      defaultZoom={18}
      defaultCenter={{ lat: 28.6448, lng: 77.216721 }}
    />
  );
};
export const WrapperMap = withScriptjs(withGoogleMap(Map));
