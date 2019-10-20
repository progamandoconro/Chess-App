import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';
import Constants from 'expo-constants';

function Separator() {
  return <View style={styles.separator} />;
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>
        ESP32 Server Alarm
        </Text>
        <Button
          title="Python Code"
          onPress={() => Linking.openURL('https://github.com/progamandoconro/ESP32-WROOM')}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          Machine Learning Predictions
        </Text>
        <Button
          title="R code"
          color="#f194ff"
          onPress={() => Linking.openURL('https://github.com/progamandoconro/Titanic-survivors')}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          Random Kanji Generator
        </Text>
        <Button
          title="Golang code"
          onPress={() => Alert.openURL('https://github.com/progamandoconro/Kanji-con-Ro')}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          Visit me on Facebook and Instagram
        </Text>
        <View style={styles.fixToText}>
          <Button
            title="Facebook"
            onPress={() => Alert.openURL('https://www.facebook.com/programaconro/')}
          />
          <Button
            title="Instagram"
            onPress={() => Alert.openURL('https://www.instagram.com/programaconro/')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

