import { Flex, Text } from 'native-base';

import { Svg } from '@/assets';
import styles from '@/styles';
import { goBack } from '@/utils/navigationUtil';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { HeaderBarProps } from './type';

const HeaderBar = (props: HeaderBarProps) => {
  const { title, className, renderTitle } = props;

  return (
    <Flex className={`flex-row p-2 items-center gap-2 ${className} ml-2 my-1`}>
      <TouchableOpacity
        onPress={goBack}
        style={styles.shadowX}
        className="bg-gray-5 w-[43px] h-[43px] rounded-lg items-center justify-center mr-4"
      >
        <Svg.ArrowLeft width={24} height={24} />
      </TouchableOpacity>
      {(title && <Text className="font-nunito-700 text-lg">{title}</Text>) || renderTitle?.() || (
        <></>
      )}
    </Flex>
  );
};

export default HeaderBar;
