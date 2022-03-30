import React from 'react';

/*
 * This component is used to fetch the users details
 */
function UserListService() {
    const userData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
        const data = await response.json();
    };
    return userData();
}

export default UserListService;