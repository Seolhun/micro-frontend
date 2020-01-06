import { useRouter, NextRouter } from 'next/router';

interface UseRouterType<T extends {}> extends NextRouter {
  query: T;
}

export const useRouterType = <T extends {}>(): UseRouterType<T> => {
  const router = useRouter();

  const parsedQuery = router.query as T;
  return {
    ...router,
    query: {
      ...parsedQuery,
    },
  };
};

export default useRouterType;
