import { ScrollView } from '@/components';
import { PrimaryLayout } from '@/components/Layout';

import AngryEmoji from '@/assets/images/emoji/angry.png';
import NotGoodEmoji from '@/assets/images/emoji/not-good.png';
import HappyEmoji from '@/assets/images/emoji/happy.png';
import LoveEmoji from '@/assets/images/emoji/love.png';
import { Image } from 'react-native';
import { Box, Flex, Text } from 'native-base';
import { Svg } from '@/assets';

const FeedbackScreen = () => {
  return (
    <PrimaryLayout title="Đánh giá">
      <ScrollView>
        <Box className="flex items-center justify-center mt-2">
          <Image source={HappyEmoji} className="w-36 h-36" />
          <Text className="font-nunito-700 text-base">
            Đánh giá trải nghiệm của bạn về sản phẩm
          </Text>
          <Text className="font-nunito-400 text-sm mt-1">
            Mọi góp ý của bạn là giá trị của chúng tôi
          </Text>
          <Flex className="flex-row gap-3 mt-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Svg.StarSolid key={index} width={30} height={30} className="fill-secondary" />
            ))}
          </Flex>
        </Box>
      </ScrollView>
    </PrimaryLayout>
  );
};

export default FeedbackScreen;
