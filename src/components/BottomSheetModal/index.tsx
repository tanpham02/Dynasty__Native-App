import ConfirmOrderBottomSheetModal, {
  confirmOrderBottomSheetModalRef,
} from './ConfirmOrderBottomSheetModal';
import PaymentBottomSheetModal, { paymentBottomSheetModalRef } from './PaymentBottomSheetModal';
import SelectVariantOrderBottomSheetModal, {
  selectVariantOrderBottomSheetModalRef,
} from './SelectVariantOrderBottomSheetModal';

const BottomSheetModal = () => {
  return (
    <>
      <SelectVariantOrderBottomSheetModal ref={selectVariantOrderBottomSheetModalRef} />
      <ConfirmOrderBottomSheetModal ref={confirmOrderBottomSheetModalRef} />
      <PaymentBottomSheetModal ref={paymentBottomSheetModalRef} />
    </>
  );
};

export default BottomSheetModal;
