
import Link from 'next/link'
import React, { useEffect, useState } from "react";


export default function Main(props) {
    const { children, ...customMeta } = props;

    return (
        <main className="main h-full">
            {children}
        </main>
    )
}
