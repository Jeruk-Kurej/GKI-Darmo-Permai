import React, { useEffect } from 'react';
import { Head } from '@inertiajs/react';

export default function Register() {
    useEffect(() => {
        window.location.href = '/login';
    }, []);

    return (
        <>
            <Head title="Register" />
            <div className="text-center p-6 text-slate-600 font-medium select-none">
                Registration is disabled. Redirecting to login...
            </div>
        </>
    );
}

Register.layout = {
    title: 'Register Disabled',
    description: 'Registration has been disabled for this application.',
};
