import { VStack, Text } from 'native-base';
import { FormProvider } from 'react-hook-form';

import { FeedbackFormProps } from './type';
import { FormController } from '@/components';
import { feedbackTopics } from '../../data';

const { FormSelect, FormInput } = FormController;

const FeedbackForm = ({ formMethods }: FeedbackFormProps) => {
  return (
    <FormProvider {...formMethods}>
      <VStack space={3} className='w-[90%] mt-4'>
        <Text className='font-nunito-500 text-zinc-600 text-[15px]'>
          Nói cho chúng tôi biết trải nghiệm của bạn về món ăn
        </Text>
        <FormSelect
          name='reason'
          placeholder='Chọn lý do'
          options={feedbackTopics.map((feedbackTopic) => ({ label: feedbackTopic, value: feedbackTopic }))}
        />
        <FormInput name='feedback' placeholder='Đánh giá của bạn' numberOfLines={3} multiline />
      </VStack>
    </FormProvider>
  );
};

export default FeedbackForm;
