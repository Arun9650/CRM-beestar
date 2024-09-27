import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Custom hook for fetching paginated users
export const useUserFetch = (page = 1, limit = 10) => {
    return useQuery({
        queryKey: ['users', page], // Include page in the query key to refetch when the page changes
        queryFn: async () => {
            const { data } = await axios.get(`/api/users`, {
                params: { page, limit }, // Pass page and limit as query params
            });
            return data;
        },
    });
};
