import { View, TouchableOpacity, FlatList } from 'react-native';
import { Text, TextInput } from 'src/components';
import SearchSvg from '@/assets/svg/pizza.svg';
import styles from './styles';
import theme from 'src/themes';

interface OptionSearch {
  title: string;
  textColor: string;
  backgroundColor: string;
}

const data: OptionSearch[] = [
  {
    title: 'Món mới',
    textColor: theme.colors.textButton,
    backgroundColor: '#E8EB95',
  },
  {
    title: 'Trà sữa',
    textColor: '#FFFFFF',
    backgroundColor: '#8EC1B8',
  },
  {
    title: 'Cafe',
    textColor: '#FFFFFF',
    backgroundColor: '#6BA4D4',
  },
  {
    title: 'Trà',
    textColor: '#FFFFFF',
    backgroundColor: '#2C65A2',
  },
];

const SearchItem = ({ item }: { item: OptionSearch }) => (
  <TouchableOpacity style={[styles.newProductBtn, { backgroundColor: item.backgroundColor }]}>
    <Text style={[styles.newProductText, { color: item.textColor }]}>{item.title}</Text>
  </TouchableOpacity>
);

const Search = () => {
  return (
    <>
      <View style={styles.searchView}>
        <TextInput placeholder="Bạn muốn tìm món nào" style={styles.input} />
        <SearchSvg style={styles.searchIcon} width={30} height={30} />
      </View>
      <View style={styles.optionView}>
        <FlatList
          style={styles.flatList}
          horizontal
          data={data}
          showsHorizontalScrollIndicator={false}
          renderItem={SearchItem}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </>
  );
};

export default Search;
