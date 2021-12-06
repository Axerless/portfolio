import Link from 'next/link'
import ytLogo from '../public/yt_img.png';
import twitterLogo from '../public/twitter_img.png';
import mailIcon from '../public/mail_img.png';
import gitIcon from '../public/git_logo.png';
import Image from 'next/image';
import React, { useEffect, useState } from "react";


export default function Footer(props) {
    const { children, ...customMeta } = props;

    return (
        <footer id="footerBg" className="flex-col flex items-center sticky justify-between bottom-0 z-30">

            <div className="flex h-30 justify-end mb-2 m-auto">
            <a href="https://github.com/Axerless" target="_blank">
                <Image src={gitIcon} alt="logo" className="yticon" width={60} height={60} />
            </a>

            <Link href="/about">
                <Image src={mailIcon} alt="logo" className="yticon" width={60} height={60} />
            </Link>

            <Link href="https://www.youtube.com/channel/UCH-g0kGG9fBpnI_wdkEQnjQ" target="_blank">
                <Image src={ytLogo} alt="logo" className="yticon" width={60} height={60} />
            </Link>

            <Link href="#" target="_blank">
                <Image src={twitterLogo} alt="logo" className="yticon" width={60} height={60} />
            </Link>

            </div>

                <Link href="/"><div id="myLogo" className="my-2"></div></Link>
        </footer> 
    )
}
