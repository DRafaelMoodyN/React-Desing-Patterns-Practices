import { useState, useEffect } from "react";
import GeolocationPresentacion from "./GeolocationPresentacion";

const GeolocationContainer = () => {

    const [latitude, setLatitude] = useState<number | null>(null)
    const [longitude, setLongitude] = useState<number | null>(null)

    const handleSuccess = ({
        coords: { latitude, longitude }
    }: { coords: { latitude: number; longitude: number } }) => {
        setLatitude(latitude)
        setLongitude(longitude)
    }

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(handleSuccess)
        }
    }, [navigator])

    return (
        <div>
            <GeolocationPresentacion latitude={latitude} longitude={longitude} />
        </div>
    )
}

export default GeolocationContainer