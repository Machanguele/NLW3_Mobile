import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Dimensions, TextInput, Button, TouchableOpacity} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout, MapEvent} from 'react-native-maps';
import mapMarker from '../images/Local.png';
import {Feather} from '@expo/vector-icons';
import {useNavigation, useFocusEffect} from '@react-navigation/native'
import api from "../services/api";


interface orphanage{
    name: string,
    latitude: number,
    longitude: number,
    id: number,

}

export default function OrphanageMap() {
    const navigation = useNavigation()
    const [orphanage, setOrphanage] = useState<orphanage[]>([]);

    function handleNavigateOrphanageDetails(id: number){
        navigation.navigate('OrphanageDetails', {id})
    }

    function handleCreateOrphanage(){
        navigation.navigate('SelectPosition')
    }


    useFocusEffect(()=>{
        api.get('Orphanages')
            .then(response=>{
                setOrphanage(response.data);
            })
    })

    // console.log(orphanage)

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={
                    {
                        latitude: -25.9093151,
                        longitude: 32.5681151,
                        longitudeDelta: 0.008,
                        latitudeDelta: 0.008

                    }
                }
            >

                {
                    orphanage.map(orphanage=>(
                        <Marker
                            key={orphanage.id}
                            icon={mapMarker}
                            coordinate={{
                                latitude: orphanage.latitude,
                                longitude: orphanage.longitude,
                            }}
                            calloutAnchor={{
                                x: .5,
                                y: -.1,
                            }}
                        >
                            <Callout
                                tooltip={true}
                                onPress={()=>handleNavigateOrphanageDetails(orphanage.id)}
                            >
                                <View style={styles.callOutContainer}>
                                    <Text style={styles.callOutText}>{orphanage.name}</Text>
                                </View>
                            </Callout>
                        </Marker>
                    ))
                }

            </MapView>



            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    {orphanage.length} Orfanatos encontrados
                </Text>
                <TouchableOpacity
                    style={styles.createOrphanageButton}
                    onPress={handleCreateOrphanage}
                >{/**/}
                    <Feather name="plus"
                             size={20}
                             color="#fff"
                    />
                </TouchableOpacity>
            </View>



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    callOutContainer: {
        width: 160,
        height: 48,
        minHeight: 48,
        maxWidth: 160,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(255,255,255,1)',
        borderRadius: 16,
        justifyContent: 'center',
    },
    callOutText: {
        color: 'orange',
        fontWeight: 'bold',
        fontSize: 14,
        alignContent: 'center',
        justifyContent: 'center',
        flex: 1

    },

    createOrphanageButton: {
        backgroundColor: '#15D6C3',
        width: 56,
        height: 56,
        borderRadius: 20,

        justifyContent: 'center',
        alignItems: 'center'

    },
    footer: {
        position: "absolute",
        left: 24,
        right: 24,
        bottom: 32,

        backgroundColor: '#fff',
        borderRadius: 20,
        height: 46,
        paddingLeft: 24,

        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',

        elevation: 3,

    },
    footerText: {
        color: "black"

    }

});
