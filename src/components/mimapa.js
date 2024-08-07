// src/components/MapaConMarcador.js
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Arreglar el problema de los iconos que no se muestran
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconUrl,
    iconRetinaUrl,
    shadowUrl,
});

const LocationMarker = ({ setLatLng }) => {
    useMapEvents({
        click(e) {
            setLatLng(e.latlng);
        },
    });

    return null;
};

const MiMapa = ({ setLatLng }) => {
    return (
        <MapContainer center={[40.030501, -3.604052]} zoom={13} style={{ height: '50vh', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <LocationMarker setLatLng={setLatLng} />
        </MapContainer>
    );
};


export default MiMapa;