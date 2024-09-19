import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

let L;  // Declarar `L` fuera para manejar la importación condicional

if (typeof window !== 'undefined') {
    // Importar leaflet solo en el lado del cliente
    L = require('leaflet');

    // Importar las URLs de los iconos
    const iconUrl = require('leaflet/dist/images/marker-icon.png');
    const iconRetinaUrl = require('leaflet/dist/images/marker-icon-2x.png');
    const shadowUrl = require('leaflet/dist/images/marker-shadow.png');

    // Configurar los iconos de Leaflet de forma segura
    const DefaultIcon = L.icon({
        iconUrl: iconUrl,
        iconRetinaUrl: iconRetinaUrl,
        shadowUrl: shadowUrl,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    L.Marker.prototype.options.icon = DefaultIcon;
}

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

