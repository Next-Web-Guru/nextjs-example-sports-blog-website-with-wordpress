import Link from 'next/link';
import React from 'react';

const fallback = () => (
    <div>
        <h1>You are currently Offline</h1>
        <small>Please check your internet connection</small>
        <small><Link href='/'>Go to Home</Link></small>
    </div>
);

export default fallback;