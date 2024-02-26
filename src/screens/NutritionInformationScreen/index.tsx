import { Box, Divider, Text } from 'native-base';
import RenderHtml, { HTMLContentModel, HTMLElementModel } from 'react-native-render-html';

import { PrimaryLayout } from '@/components';
import { widthScreen } from '@/utils';

const NutritionInformationScreen = () => {
  const html = 'Thông tin dinh dưỡng';

  return (
    <PrimaryLayout
      headerBarClass='flex-col items-start'
      renderTitle={() => <Text className='font-nunito-700 text-2xl px-4'>Thông tin dinh dưỡng</Text>}
      containerClass='bg-third'
    >
      <Box className='flex-1 bg-white'>
        <Divider className='bg-zinc-200' />
        <Box className='px-5 py-3'>
          <RenderHtml
            contentWidth={widthScreen}
            source={{ html }}
            customHTMLElementModels={{
              p: HTMLElementModel.fromCustomModel({
                tagName: 'blue-circle',
                mixedUAStyles: {
                  marginVertical: 4,
                  fontFamily: 'Nunito-Regular',
                },
                contentModel: HTMLContentModel.block,
              }),
              strong: HTMLElementModel.fromCustomModel({
                tagName: 'blue-circle',
                mixedUAStyles: {
                  fontFamily: 'Nunito-Regular',
                },
                contentModel: HTMLContentModel.block,
              }),
            }}
            systemFonts={['Nunito-Regular']}
          />
        </Box>
      </Box>
    </PrimaryLayout>
  );
};

export default NutritionInformationScreen;
