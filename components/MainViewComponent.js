import React from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity, Text } from 'react-native';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import ClimateItemComponent from './ClimateItemComponent';
import ClimateHistoryComponent from './ClimateHistoryComponent';
import ViewPager from '@react-native-community/viewpager';

const MainViewComponent = ({ item, drawerStatus, onDrawerClose, onDrawerOpen }) => {
    console.log('--MainViewComponent--', item)

    return (
        <View style={styles.container}>
            <ImageBackground
                source={{ uri: item.imageUrl }}
                style={styles.headerImage}
                resizeMode="cover"
            >
                <View style={styles.headerStyle} onPress={drawerStatus === 'isClosed' ? onDrawerOpen : onDrawerClose}>
                    <TouchableOpacity style={styles.menuIcon} onPress={drawerStatus === 'isClosed' ? onDrawerOpen : onDrawerClose}>
                        <Entypo name="menu" size={30} color="white" />
                    </TouchableOpacity>
                    <Text style={{ textAlign: "center", color: "white", fontSize: 30, padding: 10 }}>cliMate</Text>
                    <Ionicons style={styles.searchIcon} name="search-sharp" size={30} color="white" />
                </View>
            </ImageBackground>

            <ViewPager style={styles.viewPager} initialPage={0}>
                <View key="1">
                    <ClimateItemComponent item={item} />
                </View>
                <View key="2">
                    <ClimateHistoryComponent items={item.previousClimates} city={item.city} />
                </View>
            </ViewPager>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: 180,
    },
    searchIcon: {
        padding: 10
    },
    menuIcon: {
        padding: 10
    },
    text: {
        color: '#fff',
        fontSize: 23,
        textAlign: 'center'
    },
    headerImage: {
        height: 280,
        resizeMode: 'cover'
    },
    viewPager: {
        flex: 1,
    },
    headerStyle: {
        flexDirection: "row",
        justifyContent: 'space-between'
    }
})

export default MainViewComponent;