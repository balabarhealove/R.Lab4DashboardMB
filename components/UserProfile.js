import React from 'react';
import { StyleSheet, View, Text, Image, Button, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

  return (
    <View style={isDarkMode ? styles.containerDark : styles.containerLight}>
      <View style={styles.profileCard}>
        <Image
          source={{
            uri: 'https://scontent.fcgy2-2.fna.fbcdn.net/v/t39.30808-6/461294877_2889751294512661_7144629209882646004_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=UxxYKar4KtsQ7kNvgGMvhF0&_nc_ht=scontent.fcgy2-2.fna&_nc_gid=A2iwCz-zTF1ITNrNcFvXlt2&oh=00_AYCM8YY0nv8WDNsCVm02oiuhcApkm5qBPu4tjz7-B5-aoA&oe=670C7F51',
          }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Rhealove Ariane M. Balaba</Text>
        <Text style={styles.joined}>@ZheaHaze</Text>
      </View>

      <View style={styles.settingsContainer}>
        <Text style={styles.sectionTitle}>Profile</Text>
        <View style={styles.manageUserRow}>
          <Icon name="user" size={20} color="#4E3B31" />
          <Text style={[styles.settingText, { marginLeft: 10 }]}>Manage User</Text>
        </View>
        <Text style={[styles.settingText, { fontWeight: 'bold' }]}>Settings</Text>

        {/* Notifications with icon */}
        <View style={styles.manageUserRow}>
          <Icon name="bell" size={20} color="#4E3B31" />
          <Text style={[styles.settingText, { marginLeft: 10 }]}>Notifications</Text>
        </View>

        {/* Dark Mode with icon */}
        <View style={styles.darkModeRow}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="moon-o" size={20} color="#4E3B31" />
            <Text style={[styles.settingText, { marginLeft: 13 }]}>Dark Mode</Text>
          </View>
          <Switch onValueChange={toggleSwitch} value={isDarkMode} />
        </View>

        <Button title="Sign Out" onPress={() => alert('Signing out...')} color="#CFA69D" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerLight: {
    flex: 1,
    backgroundColor: '#E0CDBF', // Pastel brown color
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  containerDark: {
    flex: 1,
    backgroundColor: '#4E3B31', // Darker brown for dark mode
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileCard: {
    backgroundColor: '#FFF', // White background for profile card
    padding: 20,
    borderRadius: 10,
    elevation: 5, // Shadow effect for Android
    shadowColor: '#000', // Shadow effect for iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4E3B31', // Darker brown for text
  },
  joined: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
  },
  settingsContainer: {
    alignItems: 'flex-start',
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#FFF',
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#4E3B31',
  },
  settingText: {
    fontSize: 18,
    marginVertical: 10,
    color: '#4E3B31',
  },
  manageUserRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  darkModeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
});
