import Head from 'next/head'
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Adminuser (){

    const router = useRouter();
    const {id} = router.query;

    return (
        <>
            <Head>
                <title>Page admin user</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h2>Welcome User {id}</h2>
            <Link href="/">
                <a>Home</a>
            </Link>

        </>
    )
}