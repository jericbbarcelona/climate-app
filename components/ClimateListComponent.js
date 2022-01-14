import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import ClimateListItem from './ClimateListItem';
import { FadeInFlatList } from '@ja-ka/react-native-fade-in-flatlist';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

const ClimateListComponent = ({ items, drawerStatus, onSelectCity, onDrawerOpen, onDrawerClose }) => {
    console.log('--ClimateListComponent--', items);
    return (
        <View style={styles.container}>
            <View style={styles.headerStyle} onPress={drawerStatus === 'isClosed' ? onDrawerOpen : onDrawerClose}>
                <TouchableOpacity style={styles.menuIcon} onPress={drawerStatus === 'isClosed' ? onDrawerOpen : onDrawerClose}>
                    <Entypo name="menu" size={30} color="#5d5d5d" />
                </TouchableOpacity>
                <Text style={styles.headerText}>cliMate</Text>
                <Ionicons style={styles.searchIcon} name="search-sharp" size={35} color="#5d5d5d" />
            </View>
            <FadeInFlatList
                durationPerItem={1500}
                data={items}
                renderItem={({ item }) =>
                    <ClimateListItem item={item} onSelectCity={onSelectCity} />
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10
    },
    headerStyle: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginBottom: 20
    },
    searchIcon: {
        padding: 10
    },
    menuIcon: {
        padding: 10
    },
    headerText: {
        textAlign: "center", 
        color: "#5d5d5d", 
        fontSize: 30, 
        padding: 10
    }
})

export default ClimateListComponent;