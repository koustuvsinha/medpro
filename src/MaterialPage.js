import React, { Component, PropTypes } from 'react';
import { Toolbar as MaterialToolbar, Card, Button, COLOR, TYPO } from 'react-native-material-design';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';


export default class MaterialPage extends Component {

  render() {
    return (
      <View style={styles.page}>
          <MaterialToolbar
                title='MedPro'
                primary='googleGreen'
                icon='menu'
                actions={[{
                    icon: 'message',
                    badge: { value: 5, animate: true }
                }]}
                rightIconStyle={{
                    margin: 10
                }}
                style={styles.toolbar}
            />
            <ScrollView>
            <Card style={styles.card}>
              <Card.Media
                image={<Image source={require('../img/red_orange_pills.jpg')} />}
                overlay
                >
                <Text style={[TYPO.paperFontHeadline, COLOR.paperGrey50]}>Inventory</Text>
                <Text style={[TYPO.paperSubhead, COLOR.paperGrey50]}>View and Sort your medical inventory</Text>
              </Card.Media>
              <Card.Body>
                  <Text>To get started, open the Inventory and View, Sort and Update the medicine database</Text>
              </Card.Body>
              <Card.Actions position="right">
                  <Button primary='googleGreen' text="Open your Inventory" />
              </Card.Actions>
            </Card>
            <Card style={styles.card2}>
              <Card.Media
                image={<Image source={require('../img/compare.jpg')} />}
                overlay
                >
                <Text style={[TYPO.paperFontHeadline, COLOR.paperGrey50]}>Compare</Text>
                <Text style={[TYPO.paperSubhead, COLOR.paperGrey50]}>Compare prices and specs</Text>
              </Card.Media>
              <Card.Body>
                  <Text>Compare between wide range of medicines, their prices and their compositions, right here!</Text>
              </Card.Body>
              <Card.Actions position="right">
                  <Button primary='googleGreen' text="Start your comparision" />
              </Card.Actions>
            </Card>
            </ScrollView>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  toolbar : {
  },
  card : {
    marginTop: 70
  },
  card2: {
    marginTop: 10
  },
  page : {
    flex: 1
  }
})
