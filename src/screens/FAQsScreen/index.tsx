import { Box, FlatList, Text } from 'native-base';

import { PrimaryLayout } from '@/components';
import { FaqItem } from './components';

const faqs = [
  {
    question: 'Question 1',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum autem, deleniti sint ratione quaerat error totam debitis rerum, fugit eius, veritatis aliquam esse ipsam ea aut corporis! Ratione, deleniti cumque.',
  },
  {
    question: 'Question 1',
    answer: 'answer 1',
  },
  {
    question: 'Question 1',
    answer: 'answer 1',
  },
  {
    question: 'Question 1',
    answer: 'answer 1',
  },
];

const FAQsScreen = () => {
  return (
    <PrimaryLayout containerClass="bg-third">
      <Box className="flex-1">
        <Text className="font-nunito-700 text-2xl pt-1 px-4">Câu hỏi thường gặp</Text>
        <FlatList
          className="mt-2"
          data={faqs}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <FaqItem {...item} />}
          keyExtractor={(_, index) => index.toString()}
        />
      </Box>
    </PrimaryLayout>
  );
};

export default FAQsScreen;
