import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ClimateHistoryListComponent from './ClimateHistoryListComponent';

const ClimateHistoryComponent = ({ city, items }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.cityText}>{city}</Text>
            <FlatList
                data={items}
                renderItem={({ item }) =>
                    <ClimateHistoryListComponent item={item} />
                }
                styles={styles.flatListStyle}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    flatListStyle: {
        marginTop: 15
    },
    cityText: {
        marginTop: 10,
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default ClimateHistoryComponent;