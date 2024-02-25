import { FC } from "react";

type property = {
    latitude: number | null
    longitude: number | null
}

const GeolocationPresentacion: FC<property> = ({ latitude, longitude }) => {

    return (
        <div>
            <h1>Geolocation:</h1>
            <div>Latitude: {latitude}</div>
            <div>Longitude: {longitude}</div>
        </div>
    )
}

export default GeolocationPresentacion