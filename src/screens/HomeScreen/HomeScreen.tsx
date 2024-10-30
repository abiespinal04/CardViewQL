import React, {Suspense} from 'react';
import {graphql, useLazyLoadQuery} from 'react-relay';
import PeopleList from '../../components/PeopleList';
import {HomeScreenQuery as HomeScreenQueryType} from './__generated__/HomeScreenQuery.graphql';
import {Text} from 'react-native';

const HomeScreenQuery = graphql`
  query HomeScreenQuery {
    ...usePeopleListPaginationFragment
  }
`;

const HomeScreen: React.FC = () => {
  const data = useLazyLoadQuery<HomeScreenQueryType>(HomeScreenQuery, {});
  return (
    <Suspense fallback={<Text>loading...</Text>}>
      <PeopleList root={data} />
    </Suspense>
  );
};

export default HomeScreen;
