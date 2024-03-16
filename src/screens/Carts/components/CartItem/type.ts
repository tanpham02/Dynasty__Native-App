export interface CartItemProps {
  name: string;
  extendName: string;
  image: string;
  description: string;
  price: number;
  quantity: number;
  onOpenCartItemDetailBottomSheet: () => void;
}
