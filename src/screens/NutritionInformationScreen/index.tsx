import { PrimaryLayout } from '@/components';
import { Box, Text } from 'native-base';

const NutritionInformationScreen = () => {
  return (
    <PrimaryLayout
      renderTitle={() => (
        <Text className="font-nunito-700 text-2xl px-3">Thông tin dinh dưỡng</Text>
      )}
      containerClass="bg-third"
    >
      <Box className="flex-1"></Box>
    </PrimaryLayout>
  );
};

export default NutritionInformationScreen;
