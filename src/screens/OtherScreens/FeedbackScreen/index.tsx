import { Box } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { useFeedbackForm } from './useFeedbackForm';
import { ButtonPrimary, PrimaryLayout } from '@/components';
import { FeedbackEmotion, FeedbackForm, FeedbackStar } from './components';

const FeedbackScreen = () => {
  const { currentStar, setCurrentStar, handleSendFeedback, formMethods } = useFeedbackForm();

  return (
    <PrimaryLayout titleScreen='Đánh giá' containerClass='bg-white'>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <Box className='flex items-center justify-center mt-2'>
          <FeedbackEmotion currentStar={currentStar} />
          <FeedbackStar currentStar={currentStar} setCurrentStar={setCurrentStar} />
          <FeedbackForm formMethods={formMethods} />
          <ButtonPrimary
            title='Gửi đánh giá'
            color='danger'
            containerClass='mt-4 mx-auto w-[90%]'
            onPress={handleSendFeedback}
          />
        </Box>
      </KeyboardAwareScrollView>
    </PrimaryLayout>
  );
};

export default FeedbackScreen;
