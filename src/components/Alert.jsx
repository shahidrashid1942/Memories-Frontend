import React from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import motion from framer-motion
import { useAlert } from '../context/alert/AlertContext';

function Alert() {
    const { alert } = useAlert();

    return (
        <AnimatePresence>
            <div className='m-auto flex justify-center items-center'>
                {alert && (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                        style={{ zIndex: 999 }}
                        role="alert"
                        className={`alert ${!alert.statusCode && "alert-error"} z-20 fixed top-[10vh] w-[80%] `}
                    >
                        <div>
                            {alert.statusCode ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                    <defs>
                                        <mask id="lineMdCheckAll0">
                                            <g fill="none" stroke="#fff" strokeDasharray={22} strokeDashoffset={22} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                                                <path d="M2 13.5l4 4l10.75 -10.75">
                                                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="22;0"></animate>
                                                </path>
                                                <path stroke="#000" strokeWidth={4} d="M7.5 13.5l4 4l10.75 -10.75" opacity={0}>
                                                    <set attributeName="opacity" begin="0.4s" to={1}></set>
                                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="22;0"></animate>
                                                </path>
                                                <path d="M7.5 13.5l4 4l10.75 -10.75" opacity={0}>
                                                    <set attributeName="opacity" begin="0.4s" to={1}></set>
                                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="22;0"></animate>
                                                </path>
                                            </g>
                                        </mask>
                                    </defs>
                                    <rect width={24} height={24} fill="currentColor" mask="url(#lineMdCheckAll0)"></rect>
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2">
                                        <path strokeDasharray="60" strokeDashoffset="60" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z">
                                            <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"></animate>
                                        </path>
                                        <path strokeDasharray="8" strokeDashoffset="8" d="M12 7V13">
                                            <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"></animate>
                                            <animate attributeName="stroke-width" begin="1s" dur="3s" keyTimes="0;0.1;0.2;0.3;1" repeatCount="indefinite" values="2;3;3;2;2"></animate>
                                        </path>
                                    </g>
                                    <circle cx="12" cy="17" r="1" fill="currentColor" fillOpacity="0">
                                        <animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.4s" values="0;1"></animate>
                                        <animate attributeName="r" begin="1.3s" dur="3s" keyTimes="0;0.1;0.2;0.3;1" repeatCount="indefinite" values="1;2;2;1;1"></animate>
                                    </circle>
                                </svg>

                            )}
                        </div>

                        <span>{alert.message}</span>
                    </motion.div >
                )
                }
            </div>
        </AnimatePresence>
    );
}

export default Alert;
