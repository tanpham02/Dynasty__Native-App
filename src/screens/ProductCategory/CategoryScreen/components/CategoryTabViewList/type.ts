export interface CategoryTabViewListProps {
  onScrollToIndex: (index: number) => void;
  activeTabKey: number;
  setActiveTabKey: (index: number) => void;
}
