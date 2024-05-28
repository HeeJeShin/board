"use client";
import styled from "@emotion/styled";

const headNav = styled.nav`
    flex: 1;
    height: 150px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

import Link from "next/link";
export default function Header (){
    return (
        <nav className="flex space-x-4 mb-2">
            <Link href="/" className="bg-blue-200 rounded px-4 py-2">
                Home
            </Link>
            <Link href="/test" className="bg-cyan-200 rounded px-4 py-2">
                Todos
            </Link>
        </nav>
    )
}