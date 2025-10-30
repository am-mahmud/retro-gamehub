import React from 'react';

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 font-mono">
            <div className="bg-gray-900 border-8 border-gray-800 rounded-lg shadow-2xl p-8 max-w-2xl w-full">
                <div
                    className="bg-black text-amber-400 p-6 rounded-md border border-amber-500/20"
                >
                    <div className="absolute inset-0 z-10 pointer-events-none opacity-5">
                        <div className="h-full w-full" style={{
                            backgroundImage: 'linear-gradient(to bottom, transparent 50%, #2a1d08 50%)',
                            backgroundSize: '100% 2px',
                        }}></div>
                    </div>



                    <div className="relative z-20">
                        <header className="mb-8 border-b border-amber-500/50 pb-2">
                            <h1
                                className="text-6xl font-extrabold tracking-tight mb-2"

                            >
                                404
                            </h1>
                            <p className="text-xl text-gray-400">Error Code: Page_Not_Found</p>
                        </header>

                        <section className="space-y-4">
                            <p className="flex items-center">
                                <span className="text-amber-300 pr-2">&gt;</span>
                                Attempting to establish connection with specified directory...
                            </p>
                            <p className="flex items-center">
                                <span className="text-amber-300 pr-2">&gt;</span>
                                <span className="text-red-500 font-bold">CONNECTION REFUSED.</span> Resource path does not compute.
                            </p>
                            <p className="flex items-center">
                                <span className="text-amber-300 pr-2">&gt;</span>
                                File or subroutine is currently offline or corrupted.
                            </p>

                            <div className="pt-6">
                                <p className="flex items-center mb-4">
                                    <span className="text-amber-300 pr-2">&gt;</span>
                                    Please return to the last known stable operating point.
                                </p>


                                <button
                                    onClick={() => window.location.href = '/'}
                                    className="px-6 py-3 border-2 border-amber-400 text-amber-400 text-lg uppercase font-bold tracking-widest transition-all duration-300 hover:bg-amber-900/50 rounded-md active:bg-amber-900"
                                    aria-label="Go back to the homepage"
                                >
                                    [ GOTO /HOME ]
                                </button>
                            </div>
                        </section>

                        <footer className="mt-8 pt-4 border-t border-amber-500/50">
                            <p className="text-sm text-gray-500">
                                &gt; System Status: <span className="text-yellow-500 font-bold">NON-CRITICAL FAILURE</span>
                            </p>
                            <p className="text-sm text-gray-500">
                                &gt; Console Ready...
                            </p>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;