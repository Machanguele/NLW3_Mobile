import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Dimensions, TextInput, Button, TouchableOpacity} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import mapMarker from './src/images/mapMarker.png';
import  {Feather} from '@expo/vector-icons';
import OrphanageMap from "./src/pages/OrphanagesMap";
import Routes from "./src/routes";

export default function App() {
    return (

        <Routes />
        );
}

