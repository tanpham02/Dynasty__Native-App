import { FlatList } from 'native-base';

import { FaqItem } from '..';

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

const FaqList = () => {
  return (
    <FlatList
      className='mt-2'
      data={faqs}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <FaqItem {...item} />}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};

export default FaqList;
