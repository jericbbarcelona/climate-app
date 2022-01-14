import React from 'react';
import { View, StyleSheet, NativeModules } from 'react-native';
import Drawer from 'react-native-drawer'
import ClimateListComponent from './components/ClimateListComponent';
import MainViewComponent from './components/MainViewComponent';
const { ClimateMockResponseManager } = NativeModules;

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      drawerStatus: 'isClosed',
      climates: [],
      selectedCity: {}
    }
  }

  componentDidMount() {
    this.getClimateResponse();
  }

  getClimateResponse = async () => {
    let response = await ClimateMockResponseManager.getClimateResponse();
    let parsedClimates = JSON.parse(response);
    this.setState({
      climates: parsedClimates.climates,
      selectedCity: parsedClimates.climates.filter((item) => item.city === "Tokyo")[0] // Set Tokyo as initial value
    })
  }

  onSelectCity = (city) => {
    if (!city) {
      return
    }
    this.setState({
      selectedCity: this.state.climates.filter((item) => item.city === city)[0]
    })
    this.closeControlPanel()
  }

  closeControlPanel = () => {
    this._drawer.close()
    this.setState({ drawerStatus: 'isClosed' })
  };

  openControlPanel = () => {
    this._drawer.open()
    this.setState({ drawerStatus: 'isOpened' })
  };

  render() {

    return (
      <View style={styles.container}>
        <Drawer
          tapToClose={true}
          ref={(ref) => this._drawer = ref}
          content={
            <ClimateListComponent
              items={this.state.climates}
              drawerStatus={this.state.drawerStatus}
              onDrawerOpen={this.openControlPanel}
              onDrawerClose={this.closeControlPanel}
              onSelectCity={this.onSelectCity} />}
        >
          <MainViewComponent
            onDrawerClose={this.closeControlPanel}
            onDrawerOpen={this.openControlPanel}
            item={this.state.selectedCity}
            drawerStatus={this.state.drawerStatus} />
        </Drawer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});