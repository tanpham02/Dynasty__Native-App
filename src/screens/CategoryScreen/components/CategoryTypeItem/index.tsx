import { Box, Flex, Image, Text } from 'native-base';

import { CategoryTypeItemProps } from './type';

const CategoryTypeItem = ({ icon, name, isActive }: CategoryTypeItemProps) => {
  return (
    <Flex
      className={`px-1 py-2 w-[102px] min-h-[50px] ${isActive ? 'bg-white border-b-2 border-secondary' : 'border-b border-zinc-200'}`}
    >
      <Box className="flex-row items-center h-full flex-1">
        <Image
          source={{
            uri: icon,
          }}
          width={3.5}
          height={3.5}
          resizeMode="contain"
          className="object-contain mr-1.5"
          alt={name}
        />
        <Text className="text-black font-nunito-500 text-xs flex-1" numberOfLines={2}>
          {name}
        </Text>
      </Box>
    </Flex>
  );
};

export default CategoryTypeItem;
