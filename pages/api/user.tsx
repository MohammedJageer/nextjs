/*
 * This component is used to fetch the user details
 */
function User() {

    const userData = async (id) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?id='+id);
        const data = await response.json();
        return data;
    };

    return userData;
}

export default User;