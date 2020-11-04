import useSWR from 'swr'
import * as initialD from '../util/initialData.json'

function useMember(id) {
    const fetcher = (...arg) => fetch(...arg).then((res) => res.json());
    const { data, error, mutate } = useSWR(id,
        fetcher,
        { initialData: {initialD} }
    );
    return {
        data: data,
        isLoading: !error && !data,
        isError: error,
        mutate
    }
}

export default useMember;