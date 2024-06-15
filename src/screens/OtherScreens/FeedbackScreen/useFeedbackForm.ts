import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { showMessage } from 'react-native-flash-message';

import { PATH_SCREEN } from '@/constants';
import { navigate } from '@/utils';

export const useFeedbackForm = () => {
  const [currentStar, setCurrentStar] = useState<number>(0);

  const formMethods = useForm();

  const { handleSubmit } = formMethods;

  const sendFeedback = (data) => {
    showMessage({
      message: 'Cảm ơn bạn đã gửi những đánh giá quý báu của bạn cho chúng tôi',
      type: 'success',
    });
    navigate(PATH_SCREEN.HOME_SCREEN);
  };

  const handleSendFeedback = handleSubmit(sendFeedback);

  return { currentStar, setCurrentStar, handleSendFeedback, formMethods } as const;
};
