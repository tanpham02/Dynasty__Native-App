import { Box, Divider, Text } from 'native-base';
import RenderHtml, { HTMLContentModel, HTMLElementModel } from 'react-native-render-html';

import { PrimaryLayout } from '@/layouts';
import { widthScreen } from '@/utils';

const NutritionInformationScreen = () => {
  const html = 'Thông tin dinh dưỡng';

  return (
    <PrimaryLayout titleScreen='Thông tin dinh dưỡng' containerClass='bg-white'>
      <Box className='flex-1 bg-white px-5 py-3'>
        <RenderHtml
          contentWidth={widthScreen}
          source={{ html }}
          customHTMLElementModels={{
            p: HTMLElementModel.fromCustomModel({
              tagName: 'p',
              mixedUAStyles: {
                marginVertical: 4,
                fontFamily: 'Nunito-Regular',
              },
              contentModel: HTMLContentModel.block,
            }),
            strong: HTMLElementModel.fromCustomModel({
              tagName: 'strong',
              mixedUAStyles: {
                fontFamily: 'Nunito-Regular',
              },
              contentModel: HTMLContentModel.block,
            }),
          }}
          systemFonts={['Nunito-Regular']}
        />
      </Box>
    </PrimaryLayout>
  );
};

export default NutritionInformationScreen;
