import { FlatList, useDisclose } from 'native-base';

import { PrimaryLayout } from '@/components';
import { VoucherDetailBottomSheet, VoucherItem } from './components';

const VoucherScreen = () => {
  const { isOpen, onOpen, onClose } = useDisclose();

  return (
    <PrimaryLayout titleScreen='Voucher của bạn'>
      <FlatList
        className='-mt-2'
        renderItem={() => <VoucherItem onView={onOpen} />}
        showsVerticalScrollIndicator={false}
        data={Array.from({ length: 5 }).fill({})}
        keyExtractor={(_, index) => index.toString()}
      />
      <VoucherDetailBottomSheet isOpen={isOpen} onClose={onClose} />
    </PrimaryLayout>
  );
};

export default VoucherScreen;
