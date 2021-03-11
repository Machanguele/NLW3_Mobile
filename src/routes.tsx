import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import OrphanageMap from "./pages/OrphanagesMap";
import OrphanageDetails from "./pages/OrphanageDetails";
import OrphanageData from "./pages/OrphanageData";
import Header from "./components/header";
import SelectMapPosition from "./pages/SelectMapPosition";



const {Navigator, Screen} = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer >
               {/*screenOptions={{headerShown: false}}*/}
            <Navigator >
                <Screen name="OrphanagesMap"
                        component={OrphanageMap}
                />
                <Screen name="OrphanageDetails"
                        component={OrphanageDetails}
                        options={{
                            headerShown: true,
                            header: ()=><Header
                                showCancel={false}
                                title="Detalhes do Orfanato" />
                        }}
                />
                <Screen name="CreateOrphanage"
                        component={OrphanageData}

                />

                <Screen name="SelectPosition"
                        component={SelectMapPosition}
                        options={{

                            header: ()=><Header title='Selecionar a posicao'
                                                showCancel={true}/>
                        }}
                />
            </Navigator>
        </NavigationContainer>
    );
}