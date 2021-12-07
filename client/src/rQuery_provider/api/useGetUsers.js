import { useQuery } from "react-query";
import { get } from "../../request";

const useGetUsers = () => {
	return useQuery(
		// unique key of the function
		"users",									
		// "fetcher" function
		async () => {							
			try {
				return get(`users`);
			} catch (e) {
				console.error(e);
			}
		},
		// query config
		{					
			// -- referch query when user refocuses on window -- //
			// refetchOnWindowFocus: true, // DEFAULT
			// refetchOnWindowFocus: false,

			// -- set how long it takes for a query to become "stale" -- //
			// staleTime: 0, // DEFAULT - time in milliseconds
			// staleTime: 3000,
			// staleTime: 10000,
			// staleTime: Infinity, // never becomes stale
			
			// -- 
			
			
			// enabled: false
		}
	);
};

export default useGetUsers;