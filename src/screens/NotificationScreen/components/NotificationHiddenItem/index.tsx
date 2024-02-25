import { Box } from 'native-base';
import { TouchableOpacity } from 'react-native';

import { Svg } from '@/assets';

const NotificationHiddenItem = () => {
  return (
    <Box className="items-center justify-end flex-row h-full">
      <TouchableOpacity className="bg-zinc-400 w-12 h-12 items-center justify-center">
        <Svg.Eye width={25} height={25} className="text-white" />
      </TouchableOpacity>
      <TouchableOpacity className="bg-secondary w-12 h-12 items-center justify-center">
        <Svg.TrashBin width={25} height={25} className="text-white" />
      </TouchableOpacity>
    </Box>
  );
};

export default NotificationHiddenItem;
