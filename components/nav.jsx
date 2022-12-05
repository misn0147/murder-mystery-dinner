import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import NavItems from "../pages/navItems.json";

const Nav = () => {
    const [navActive, setNavActive] = useState(null);
    const [activeIdx, setActiveIdx] = useState(-1);

    const router = useRouter();
    const gameslug = router.query.gameslug;

    return (
        <div className={`${navActive ? "active" : "hidden"} nav__menu-list`}>
            {NavItems.map((item) => (
                <div
                    onClick={() => {
                        setActiveIdx(item.id);
                        setNavActive(false);
                    }}
                    key={item.id}
                >
                    {item.href ? (
                        <Link
                            href={{
                                pathname: `/${gameslug}/${item.href}`,
                            }}
                            legacyBehavior
                            className={activeIdx == item.id ? null : "hidden"}
                        >
                            <a className={router.pathname == `/${gameslug}/${item.href}` ? "active:bg-blue" : "bold"}>{item.title}</a>
                        </Link>
                    ) : (
                        <Link
                            href={{
                                pathname: `/${gameslug}`,
                            }}
                            legacyBehavior
                        >
                            <a className={router.pathname == `/${gameslug}` ? "active:bg-blue" : "bold"}>{item.title}</a>
                        </Link>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Nav;
