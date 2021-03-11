// @flow
import React from "react";
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import {BorderlessButton} from "react-native-gesture-handler";
import {Feather} from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native';


interface HeaderProps {
    title: string;
    showCancel?: boolean;
}

export default function Header({showCancel = true, title}: HeaderProps) {
    const navigation = useNavigation();

    function  handleGoBackHome(){
        navigation.navigate('OrphanagesMap')
    }

    return (
        <View style={styles.container}>
            <BorderlessButton
                onPress={navigation.goBack}
            >
                <Feather name='arrow-left'
                         size={25}
                         color='#F39C12'
                         style={{
                             position: 'relative',
                             left: -25
                         }}
                />

            </BorderlessButton>
            <Text style={styles.title}>{title}</Text>

            {
                showCancel &&
                <BorderlessButton
                onPress={handleGoBackHome}
            >
                <Feather name='x'
                         size={30}
                         color='#ff669d'
                         style={{
                             position: 'relative',
                             right: -29
                         }}
                />
            </BorderlessButton>
            }

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        padding: 24,
        backgroundColor: '#f9fafc',
        borderBottomWidth: 1,
        borderColor: '#dde3f0',
        paddingTop: 44,

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#8fa7b3',
        fontSize: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

