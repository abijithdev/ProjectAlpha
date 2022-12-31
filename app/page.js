import Link from "next/link";

export default function Page() {
    return <>

        <h1>Welcome Sapien !</h1>
        <Link href="/login">Login</Link>
        <Link href="/signup">Register</Link>
    </>
        ;
}