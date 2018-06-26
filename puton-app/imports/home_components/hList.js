import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import InfoDetail from './InfoDetail';

class InfoList extends Component {


  renderHome() {
    return (
      <InfoDetail  />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderHome()}
      </ScrollView>
    );
  }
}

export default InfoList;