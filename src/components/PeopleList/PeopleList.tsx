import React from 'react';
import {
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PersonCard from '../PersonCard';

import { usePeopleListPagination } from '../../hooks/usePeopleListPagination';
import { usePeopleListPaginationFragment$key } from '../../hooks/__generated__/usePeopleListPaginationFragment.graphql';

type Props = {
  root: usePeopleListPaginationFragment$key
};

const PeopleList: React.FC<Props> = props => {
  const {people, handleLoadMore, isLoadingNext, hasError} = usePeopleListPagination({
    root: props.root,
  });

  if (hasError) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          Error loading data. Please try again later.
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={people}
      keyExtractor={item => item?.id ?? ''}
      renderItem={({item}) => <PersonCard person={item} />}
      contentContainerStyle={styles.listContainer}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={isLoadingNext ? <ActivityIndicator /> : null}
    />
  );
};

export default PeopleList;

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: 'white',
    paddingBottom: 16,
  },
  errorContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
  },
});
