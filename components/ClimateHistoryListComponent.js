import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Feather';

const ClimateHistoryListComponent = ({ item }) => {
    console.log('--ClimateHistoryListComponent--', item)
    return (
        <View style={styles.listItem}>
            <View style={styles.listItemView}>
                <Icon style={styles.iconStyle} name="sun" size={50} color="gray" />
                <View style={styles.dateView}>
                    <Text style={styles.dayText}>{item.day}</Text>
                    <Text style={styles.dateText}>{item.date}</Text>
                </View>
                <View style={styles.temperatureView}>
                    <Text style={styles.temperatureText}>{item.temperature1}°</Text>
                    <Text style={styles.temperatureText}>{item.temperature2}°</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    listItem: {
        padding: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    listItemView: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 4
    },
    temperatureText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    dayText: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        textTransform: 'uppercase'
    },
    dateText: {
        alignSelf: 'flex-start',
        fontSize: 20,
        textTransform: 'uppercase'
    },
    dateView: {
        alignItems: 'center',
        flex: 1,
    },
    iconStyle: {
        flex: 1.5,
    },
    temperatureView: {
        flex: 1.5,
        alignItems: 'flex-end',
    }
})

export default ClimateHistoryListComponent;