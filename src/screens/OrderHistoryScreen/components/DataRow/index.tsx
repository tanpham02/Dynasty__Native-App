import { Box, Text } from 'native-base';
import React from 'react';
import { DataRowProps } from './type';

const DataRow = ({ Icon, label, value }: DataRowProps) => {
  return (
    <Box className="flex-row items-center gap-1 mb-2">
      <Icon width={20} height={20} className="text-zinc-500" />
      <Text className="font-nunito-500 text-sm text-zinc-500">
        {label}: <Text className="font-nunito-700 text-zinc-800">{value}</Text>
      </Text>
    </Box>
  );
};

export default DataRow;
