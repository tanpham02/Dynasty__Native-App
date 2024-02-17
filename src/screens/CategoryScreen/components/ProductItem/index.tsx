import { Box, Flex, Text } from 'native-base';
import React from 'react';
import { ProductItemProps } from './type';
import { ProductType } from '@/models/productModel';

const ProductItem = (props: ProductItemProps) => {
  return <Box >
    <Text>{props.name}</Text>
    <Text>{props.description}</Text>
    {props.types.length > 0 && !props.types.includes(ProductType.NORMAL) &&<Flex>

    </Flex>}


  </Box>
};

export default ProductItem;
