import React from "react";
import Image from "next/image";

import NavBar from "./NavBar";

export default function Header() {
    return (
        <header>
            <NavBar />
            <div className="header flex light-bg">
                <div>
                    <button>Frontend Developer</button>

                    <button>Embedded Systems Engineer</button>

                    <h1 className="white">Intelligence is the ability to avoid doing work, yet getting</h1>
                    <h1 className="white">the work done!</h1>

                    <p className="gray">I design and code beautiful simple things, and I love what I do.</p>
                    <a className="green" href="mailto:butasi.rodgers@gmail.com">Let&#39;s chat!</a>
                </div>
                <Image src="/images/butasi.jpg" width={463} height={513} alt="blaiti"  /> 
            </div>
        </header>
    )
}