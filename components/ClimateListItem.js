import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Feather';

const ClimateListItem = ({ item, onSelectCity }) => {
    console.log('--ClimateListItem--', item);

    return (
        <TouchableOpacity style={styles.listItem} onPress={() => onSelectCity(item.city)}>
            <View style={styles.listItemView}>
                <Text style={styles.temperatureText}>{item.temperature}°</Text>
                <View style={styles.statusView}>
                    <Text style={styles.cityText}>{item.city}</Text>
                    <Text style={styles.statusText}>{item.status}</Text>
                </View>
                <Icon style={styles.iconStyle} name="sun" size={40} color="gray" />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: '#f8f8f8',
    },
    listItemView: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 4
    },
    temperatureText: {
        fontSize: 55,
        flex: 1.5,
        marginLeft: 10,
    },
    cityText: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'flex-start'
    },
    statusText: {
        fontSize: 20,
        alignSelf: 'flex-start'
    },
    statusView: {
        flexDirection: 'column',
        alignSelf: 'center',
        flex: 1,
    },
    iconStyle: {
        flex: 1.5,
        alignSelf: 'center',
        textAlign: 'right',
        marginRight: 15,
    }
})

export default ClimateListItem;