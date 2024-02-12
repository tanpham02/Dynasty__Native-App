import { Box, Button, Flex, Input, Select, Text } from 'native-base';
import { useState } from 'react';

import { ScrollView } from '@/components';
import { PrimaryLayout } from '@/components/Layout';
import AngryEmoji from '@/assets/images/emoji/angry.png';
import NotGoodEmoji from '@/assets/images/emoji/not-good.png';
import HappyEmoji from '@/assets/images/emoji/happy.png';
import HappyAndSmileEmoji from '@/assets/images/emoji/happy-and-smile.png';
import LoveEmoji from '@/assets/images/emoji/love.png';
import { Image } from 'react-native';
import { Svg } from '@/assets';
import { TouchableOpacity } from 'react-native';
import styles from '@/styles';
import { feedbackTopics } from './data';
import { showMessage } from 'react-native-flash-message';
import { navigate } from '@/utils/navigationUtil';
import { PATH_SCREEN } from '@/constants/pathName';

const emojis = [HappyEmoji, AngryEmoji, NotGoodEmoji, HappyEmoji, HappyAndSmileEmoji, LoveEmoji];

const FeedbackScreen = () => {
  const [currentStar, setCurrentStar] = useState<number>(0);

  const handleSendFeedback = () => {
    showMessage({
      message: 'Cảm ơn bạn đã gửi những đánh giá quý báu của bạn cho chúng tôi',
      type: 'success',
    });
    navigate(PATH_SCREEN.MAIN);
  };

  return (
    <PrimaryLayout title="Đánh giá" containerClass="bg-gray-5">
      <ScrollView className="">
        <Box className="flex items-center justify-center mt-2">
          <Image source={emojis[currentStar]} className="w-36 h-36" />
          <Text className="font-nunito-700 text-base mt-3">
            Đánh giá trải nghiệm của bạn về sản phẩm
          </Text>
          <Text className="font-nunito-400 text-sm mt-1 text-zinc-500">
            Mọi góp ý của bạn sẽ giúp chúng tôi tốt hơn
          </Text>
          <Flex className="flex-row gap-3 mt-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <TouchableOpacity key={index} onPress={() => setCurrentStar(index + 1)}>
                <Svg.StarSolid
                  width={30}
                  height={30}
                  className={currentStar <= index ? 'fill-zinc-300' : 'fill-secondary'}
                />
              </TouchableOpacity>
            ))}
          </Flex>
          <Box className="flex-col self-start px-4 mt-5 w-full">
            <Text className="font-nunito-500 text-zinc-500">
              Nói cho chúng tôi biết trải nghiệm của bạn về món ăn
            </Text>
            <Select
              bg="#fff"
              borderRadius={8}
              marginTop={2}
              borderWidth={0}
              className="font-nunito-500 text-sm"
              placeholder="Chọn lý do"
            >
              {feedbackTopics.map((feedbackTopic, index) => (
                <Select.Item
                  key={index}
                  label={feedbackTopic}
                  value={feedbackTopic}
                  className="font-nunito-500"
                />
              ))}
            </Select>
            <Input
              multiline
              marginTop={2}
              borderRadius={8}
              borderWidth={0}
              numberOfLines={5}
              textAlignVertical="top"
              placeholder="Đánh giá của bạn"
              className="bg-white font-nunito-400 text-sm"
            />
            <TouchableOpacity
              style={styles.shadowX}
              onPress={handleSendFeedback}
              className="border border-zinc-200 bg-gray-5 items-center py-3 rounded-lg my-4"
            >
              <Text className="font-nunito-600 text-secondary">Gửi đánh giá</Text>
            </TouchableOpacity>
          </Box>
        </Box>
      </ScrollView>
    </PrimaryLayout>
  );
};

export default FeedbackScreen;
