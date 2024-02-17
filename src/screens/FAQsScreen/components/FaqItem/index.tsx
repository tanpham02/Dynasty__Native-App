import { Box, Text } from 'native-base';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { FaqItemProps } from './type';
import { Svg } from '@/assets';
import styles from '@/styles';

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <Box className="mx-3 mb-4 bg-third rounded-lg" style={styles.shadowX}>
      <TouchableOpacity className="flex-row p-3" onPress={() => setIsVisible(!isVisible)}>
        <Text className="flex-1 font-nunito-700 text-zinc-500">{question}</Text>
        {isVisible ? (
          <Svg.Subtract width={20} height={20} className="text-secondary" />
        ) : (
          <Svg.Plus width={20} height={20} className="text-zinc-500" />
        )}
      </TouchableOpacity>
      {isVisible && <Text className="font-nunito-700 text-zinc-800 p-3 pt-0">{answer}</Text>}
    </Box>
  );
};

export default FaqItem;
