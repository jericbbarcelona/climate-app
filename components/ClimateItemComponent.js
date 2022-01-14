import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Feather from 'react-native-vector-icons/dist/Feather';
import Entypo from 'react-native-vector-icons/dist/Entypo';

const ClimateItemComponent = ({ item }) => {
    console.log('--ClimateItemComponent--', item);
    return (
        <View style={styles.container}>
            <Text style={styles.cityText}>{item.city}</Text>
            <Feather style={styles.iconStyle} name="sun" size={30} color="gray" />
            <Text style={styles.temperatureText}>{item.temperature}°F</Text>
            <Text style={styles.statusText}>{item.status}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 5 }}>
                <Text style={styles.temperatureDescriptionTextStrong}>{item.temperature1}°</Text>
                <Text style={styles.temperatureDescriptionText}>{item.temperature2}°</Text>
            </View>
            <View style={{ flexDirection: 'row', margin: 30, justifyContent: 'space-between' }}>
                <View style={{ marginTop: 5 }}>
                    <Feather style={styles.iconStyle} name="umbrella" size={30} color="gray" />
                    <Text style={styles.temperatureDescriptionText}>40%</Text>
                </View>
                <View style={{ marginTop: 5 }}>
                    <Feather style={styles.iconStyle} name="droplet" size={30} color="gray" />
                    <Text style={styles.temperatureDescriptionText}>40%</Text>
                </View>
                <View style={{ marginTop: 5 }}>
                    <Entypo style={styles.iconStyle} name="air" size={30} color="gray" />
                    <Text style={styles.temperatureDescriptionText}>5 mph</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cityText: {
        marginTop: 10,
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    temperatureText: {
        fontSize: 90,
        textAlign: 'center'
    },
    statusText: {
        fontSize: 20,
        textAlign: 'center'
    },
    iconStyle: {
        textAlign: 'center',
        marginTop: 50
    },
    temperatureDescriptionText: {
        fontSize: 20,
        textAlign: 'center'
    },
    temperatureDescriptionTextStrong: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },
})

export default ClimateItemComponent;