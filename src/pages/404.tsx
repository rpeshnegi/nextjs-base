import Link from "next/link";
import React from "react";

export default function Custom404() {
    return (
        <div className='damarket'>
            {/* Error-4O4-START */}
            <section className='container-fluid'>
                <div className='container error'>
                    <div className='row'>
                        <div className='col-sm-12 text-center'>
                            <span className='errorimg'>
                                <img src="/images/4O4.png" className='img-fluid' alt="4O4" />
                            </span>
                            <div className='errortitle'>
                                <h3>{`Whoops! We couldn't find what you are llooking for.`}</h3>
                                <span>In the meantime, you may have been looking for one of the following:</span>
                            </div>
                            <div className='error-redirection'>
                                <ul className='list-inline'>
                                    <li className='list-inline-item'>
                                        <Link href={"/"}>
                                            <a className='success'>
                                                <span><img src="/images/home.svg" alt='home' className='img-fluid' /></span>
                                                <label>Homepage</label>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className='list-inline-item'>
                                        <Link href={"/"}>
                                            <a className='primary'>
                                                <span><img src="/images/myorder.svg" alt='home' className='img-fluid' /></span>
                                                <label>My Order</label>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className='list-inline-item'>
                                        <Link href={"/help"}>
                                            <a className='warning' >
                                                <span><img src="/images/support.svg" alt='home' className='img-fluid' /></span>
                                                <label>Support</label>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Error-4O4-END */}
        </div>)
}
