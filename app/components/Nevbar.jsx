import Link from 'next/link'
import React from 'react'

function Nevbar() {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                <Link href={"/"}>
                        <button className="btn  btn-ghost">
                            ADDITEM
                        </button>
                    </Link>
                </div>
                <div className="flex-none">
                    <Link href="../../add_topic">
                        <button className="btn  btn-ghost">
                            ADDITEM
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Nevbar