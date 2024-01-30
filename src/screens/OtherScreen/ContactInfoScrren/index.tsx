import React from 'react';

import { ScrollView, TouchableOpacity, View, Text } from 'react-native';
import { SecondLayout } from 'src/components/Layout';
import { ContactInfoItemProps } from '../components/ContactInfoItem/type';
import HeadphoneSvg from 'src/assets/svg/headphone.svg';
import EmailSvg from 'src/assets/svg/email.svg';
import WebsiteSvg from 'src/assets/svg/website.svg';
import FacebookSvg from 'src/assets/svg/facebook-no-background.svg';
import styles from './styles';

const contactInfos: ContactInfoItemProps[] = [
  {
    label: 'Tổng đài',
    value: '18006936',
    Icon: HeadphoneSvg,
    onPress: () => {},
  },
  {
    label: 'Email',
    value: '18006936',
    Icon: EmailSvg,
    onPress: () => {},
  },
  {
    label: 'Website',
    value: '18006936',
    Icon: WebsiteSvg,
    onPress: () => {},
  },
  {
    label: 'Facebook',
    value: '18006936',
    Icon: FacebookSvg,
    onPress: () => {},
  },
];

const ContactInfoScreen = () => {
  return (
    <SecondLayout title="Thông tin liên hệ" style={styles.container}>
      <ScrollView>
        {contactInfos.map((contactInfo) => (
          <TouchableOpacity onPress={contactInfo.onPress}>
            <View>
              <contactInfo.Icon />
              <Text>{contactInfo.label}</Text>
            </View>
            <View>
              <Text>{contactInfo.value}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SecondLayout>
  );
};

export default ContactInfoScreen;
