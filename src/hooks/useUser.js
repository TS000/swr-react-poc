import useSWR from 'swr'
function useUser(id) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    `https://rickandmortyapi.com/api/character/${id}`,
    fetcher
  );
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useUser;
