import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import NavItems from "../pages/navItems.json";

const Navbar = () => {
    const router = useRouter();
    const gameslug = router.query.gameslug;
    return (
        <div className="flex justify-start">
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
                        >
                            <a className="text-lg font-semibold text-gray-800 mx-5">
                                {item.title}
                            </a>
                        </Link>
                    ) : (
                        <Link
                            href={{
                                pathname: `/${gameslug}`,
                            }}
                            legacyBehavior
                        >
                            <a className="text-lg font-semibold text-gray-800 mx-5">
                                {item.title}
                            </a>
                        </Link>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Navbar;
