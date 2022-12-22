'use-client'
import Link from 'next/link'
import React from 'react'

const Register = () => {
    let a = 0;
    return (
        <div>

            <h2>Registeration</h2>
            {/* <button onClick={() => console.log(a)}></button> */}
            <Link href="/login">Login</Link></div>
    )
}

export default Register     