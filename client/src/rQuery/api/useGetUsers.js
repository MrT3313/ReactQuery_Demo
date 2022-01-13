import { get } from "../../request";

// rQuery
import { useQuery } from "react-query";
import queryClient from '../queryClient';

const useGetUsers = (throwRandomErrors) => {
	let endpoint = 'users'
	if (throwRandomErrors && Math.random() > .33) endpoint = '_users'

	return useQuery(
		// unique key of the function
		"users",									
		// "fetcher" function
		async () => {				
			// V1 - Standard Query
			// return get(endpoint);

			// V2 - Seed Future Queries (Push Mentality)
			const users = await get(endpoint)
			users.forEach(user => {
				queryClient.setQueryData(['user', user.id], user)
			})
			return users
		},
		// query config
		{					
			// -- referch query when user refocuses on window -- //
			// refetchOnWindowFocus: true, // DEFAULT
			refetchOnWindowFocus: false,

			// -- set how long it takes for a query to become "stale" -- //
			// staleTime: 0, // DEFAULT - time in milliseconds
			// staleTime: 3000,
			// staleTime: Infinity, // never becomes stale
			
			// -- set how long it takes for an inactive query to be garbage collected -- //
			// cacheTime: 0, // immedietly removed from cache			
			cacheTime: 3000, // time in milliseconds
			// cacheTime: Infinity, // never removed from the cache
			
			// -- set retries -- //
			retry: 3, // DEFAULT
			
			// -- set retry delay: uses exponential backoff by default -- // 
			retryDelay: 1000, // time in milliseconds
			// retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
			// retryDelay: false, // no retried
			// retryDelay: 0, // no retried

			// enabled: false

			// -- set refetch / polling interval -- //
			// refetchInterval: 300, // time in milliseconds
			// refetchIntervalInBackground: true,


			// -- SIDE EFFECTS -- //
			// -- they get called for each use of the query -- //
			// onSuccess: (data) => {}
			// onError: (error) => {}
			// onSettled: (data, error) => {}
		}
	);
};

export default useGetUsers;