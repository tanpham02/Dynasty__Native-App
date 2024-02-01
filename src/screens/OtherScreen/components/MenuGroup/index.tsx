import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { MenuGroupProps } from './type';
import NextArrowSvg from '@/assets/svg/pizza.svg';
import { navigate } from 'App';

const MenuGroup = ({ label, items }: MenuGroupProps) => {
  return (
    <View style={styles.menuContainer}>
      <Text style={styles.menuLabel}>{label}</Text>
      <View style={styles.menuList}>
        {items?.map((item, index) => (
          <>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => item?.pathName && navigate(item.pathName)}
            >
              <item.Icon />
              <Text style={styles.menuText}>{item.label}</Text>
              {!item?.hideArrow && <NextArrowSvg width={12} height={20} />}
            </TouchableOpacity>
            {index + 1 < items.length && <View style={styles.divider}></View>}
          </>
        ))}
      </View>
    </View>
  );
};

export default MenuGroup;
