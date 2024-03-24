import { Button, Modal, Text } from 'native-base';
import React from 'react';
import { ShippingMethodBottomSheetProps } from './type';

const ShippingMethodBottomSheet = ({ visible, onClose }: ShippingMethodBottomSheetProps) => {
  return (
    <Modal isOpen={visible} onClose={onClose}>
      <Modal.Content maxWidth='400px'>
        <Modal.CloseButton />
        <Modal.Header>Hình thức đặt hàng</Modal.Header>
        <Modal.Body>
          <Text>Hello</Text>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button>Tiếp tục</Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default ShippingMethodBottomSheet;
