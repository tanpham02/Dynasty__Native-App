export interface CartItemProps {
  name: string;
  extendName: string;
  image: string;
  description: string;
  price: number;
  index: number;
  length: number;
  quantity: number;
  onOpenCartItemDetailBottomSheet: () => void;
}
