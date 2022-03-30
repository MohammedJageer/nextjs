import React, { useEffect, useState, useLayoutEffect } from 'react';
import { useRouter } from "next/router"
import Card from '../../components/card';
import Header from '../../components/header';
import Footer from '../../components/footer';

/*
 * This component is used to fetch the users details
 */
export default function User() {
    const router = useRouter();
    const {
        query: { id },
    } = router;
    const [resItem, setResItem] = useState({ userId: "", id: "", title: "", body: "" });
    const userData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?id=' + id);
        const data = await response.json();
        setResItem(data[0]);
    };

    // Hook
    useEffect(() => {
        userData();
    }, []);

    return (
        <>
            <Header></Header>
            <Card id={resItem.id} title={resItem.title} userId={resItem.userId} body={resItem.body}></Card>
            <Footer></Footer>
        </>
    );
}