import { useQuery } from "react-query";
import { get } from "../../request";

const useGetUser = (id) => {
	return useQuery(
		["user", id],				// this is the unique key
		async () => {		    // this is the "fetcher" function
			return get(`userById?userId=${id}`);
		},
		{	
			// enabled query only when id is present
			enabled: !!id,
		}
	);
};

export default useGetUser;