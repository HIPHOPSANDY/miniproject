import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar style={{marginHorizontal:10}}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default Search;