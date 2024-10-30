import {usePaginationFragment} from 'react-relay';
import {graphql} from 'react-relay';
import {usePeopleListPaginationFragment$key} from './__generated__/usePeopleListPaginationFragment.graphql';
import React from 'react';

const UsePeopleListFragment = graphql`
  fragment usePeopleListPaginationFragment on Root
  @refetchable(queryName: "UsePeopleListPaginationQuery")
  @argumentDefinitions(
    first: {type: "Int", defaultValue: 10}
    after: {type: "String"}
  ) {
    allPeople(first: $first, after: $after)
      @connection(key: "UsePeopleList_allPeople") {
      edges {
        node {
          id
          name
          birthYear
          gender
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

type UsePeopleListPaginationProps = {
  root: usePeopleListPaginationFragment$key;
};

export const usePeopleListPagination = ({
  root,
}: UsePeopleListPaginationProps) => {
  const {data, loadNext, hasNext, isLoadingNext} = usePaginationFragment(
    UsePeopleListFragment,
    root,
  );

  const people = React.useMemo(
    () => data?.allPeople?.edges?.map?.(edge => edge?.node),
    [data],
  );

  const handleLoadMore = React.useCallback(() => {
    if (hasNext && !isLoadingNext) {
      loadNext(10);
    }
  }, [hasNext, isLoadingNext, loadNext]);

  return {
    people,
    handleLoadMore,
    isLoadingNext,
    hasError: !data || !data.allPeople,
  };
};
