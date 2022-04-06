import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/logo.svg';

export default function Header({type}) {
    const [headerTypeRef, setHeaderType] = useState(false);
    useEffect(() => {
        (type) ? setHeaderType(true) : setHeaderType(false);
    }, [type]);

    if (headerTypeRef) {
        return (
            <div className="header-after-login flex flex-row items-center justify-between">
                <Link to="/">
                    <p className="font-mono text-white">{"<"}devumble{" />"}</p>
                </Link>
                <button className="flex flex-row items-center gap-2 px-3 py-1.5 rounded-md text-white bg-white bg-opacity-0 hover:bg-opacity-30">
                    <span className="logout-text font-semibold text-sm">logout</span>
                </button>
            </div>
        )
    } else {
        return (
            <div className="header-default">
                <Link to="/">
                    <p className="font-mono text-white">{"<"}devumble{" />"}</p>
                </Link>
                <div className="header-options-list-wrapper w-fit h-auto">
                    {/* <button v */}
                </div>
            </div>
        ) 
    }
} 