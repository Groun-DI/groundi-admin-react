import React, { useEffect } from "react";

type Props = {
    lat: number,
    lng: number,
    CustomStyle: any
}

const NaverMapService: React.FC<Props> = ({ lat, lng, CustomStyle }) => {
    useEffect(() => {
        new naver.maps.Map("map", {
            center: new naver.maps.LatLng(lat, lng),
            zoom: 13,
        });
    }, [lat, lng]);

    return (
        <>
            <div id="map" style={CustomStyle} />
        </>
    );

};

export default NaverMapService;