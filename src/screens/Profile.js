/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {screenStyles} from '../style/screenStyle';
import {COLOR} from '../theme/color';
import H3 from '../components/H3';
import Button from '../components/Button';
import {Moon, Notification, UserSquare} from 'iconsax-react-native';

export default function Profile() {
  const data = [
    {
      name: 'Profile',
      items: [
        {
          item: 'Manage User',
          icon: (
            <UserSquare
              size="28"
              style={[{color: COLOR.PRIMARY, marginEnd: 10}]}
            />
          ),
        },
      ],
    },
    {
      name: 'Settings',
      items: [
        {
          item: 'Notifications',
          icon: (
            <Notification
              size="28"
              style={[{color: COLOR.PRIMARY, marginEnd: 10}]}
            />
          ),
        },
        {
          item: 'Dark Mode',
          icon: (
            <Moon size="28" style={[{color: COLOR.PRIMARY, marginEnd: 10}]} />
          ),
        },
      ],
    },
  ];

  const renderItem = ({item}) => (
    <View>
      <H3 title={item.name} />
      <View>
        {item.items.map(subItem => (
          <TouchableOpacity>
            <View style={styles.cart}>
              {subItem.icon}
              <Text key={subItem.item} style={styles.title}>
                {subItem.item}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  return (
    <View style={{flex: 1, backgroundColor: COLOR.WHITE, padding: 20}}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={{
            uri: 'https://cultivatedculture.com/wp-content/uploads/2019/12/LinkedIn-Profile-Picture-Example-Rachel-Montan%CC%83ez.jpeg',
          }}
          style={{width: 100, height: 100, borderRadius: 100, marginBottom: 10}}
        />
        <Text style={styles.username}>Jane Doe</Text>
      </View>
      <FlatList
        style={screenStyles.body}
        data={data}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={styles.empty}>Your favorite list is empty.</Text>
        }
        keyExtractor={(item, index) => index.toString()}
      />
      <Button title={'Log Out'} />
    </View>
  );
}

const styles = StyleSheet.create({
  empty: {
    fontSize: 16,
    textAlign: 'center',
  },
  cart: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  username: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '200',
    marginBottom: 50,
  },
});
