import { useQuery } from "react-query";
import { get } from "../../request";

const useGetUser = (key, id) => {
	return useQuery(
		[key, id],				// this is the unique key
		async () => {		    // this is the "fetcher" function
			try {
				return get(`userById?userId=${id}`);
			} catch (e) {
				console.error(e);
			}
		},
		{	
      // -- set enabled query only when id is present -- //
      enabled: !!id
		}
	);
};

export default useGetUser;