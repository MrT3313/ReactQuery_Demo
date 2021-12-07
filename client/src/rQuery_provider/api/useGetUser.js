import { useQuery } from "react-query";
import { get } from "../../request";

const useGetUser = () => {
	return useQuery(
		"users",				// this is the unique key
		async () => {		// this is the "fetcher" function
			try {
				return get(`user`);
			} catch (e) {
				console.error(e);
			}
		},
		{
			// TODO: when BE is mature change this to timed value and refetch
			staleTime: Infinity,
			// enabled: false
		}
	);
};

export default useGetUser;