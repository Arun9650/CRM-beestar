import React, { useState } from 'react';
import {useUserFetch}  from '@/hooks/useUserfetch';

const UsersList = () => {
    const [page, setPage] = useState(1);
    const { data, isLoading, isError } = useUserFetch(page, 10); // Fetch 10 users per page

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching data</div>;

    return (
        <div>
            <ul>
                {data.users.map((user:any) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>

            <button
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
            >
                Previous
            </button>

            <button
                onClick={() => setPage((prev) => prev + 1)}
                disabled={data.users.length < 10}
            >
                Next
            </button>
        </div>
    );
};

export default UsersList;