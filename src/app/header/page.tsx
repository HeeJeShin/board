"use client";
import * as S from '@styles/header.styles'



import Link from "next/link";
import {LogoImg} from "@styles/header.styles";
export default function Header (){
    return (
        <>
         <S.Head>

             {/* eslint-disable-next-line @next/next/no-img-element */}
             <S.Logo><Link href="/"><S.LogoImg src="/public/images/logo.png" alt="logo"/></Link>
             </S.Logo>
             <S.HeadNav>
                 <ul>
                     <S.GnbLI>
                         <Link href="/" className="bg-blue-200 rounded px-4 py-2">
                             Home
                         </Link>
                     </S.GnbLI>
                     <S.GnbLI>
                         <Link href="/board" className="bg-cyan-200 rounded px-4 py-2">
                             Todos
                         </Link>
                     </S.GnbLI>
                 </ul>

             </S.HeadNav>
         </S.Head>

        </>

    )
}