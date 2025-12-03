import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="py-12 px-4 mb-8">
                <div className="max-w-7xl mx-auto text-center space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold space-mono">
                        Browse All{" "}
                        <span className="bg-orange-400 px-4 py-2 border-4 border-black inline-block transform -rotate-2">
                            News
                        </span>
                    </h1>

                    <div className="flex items-center gap-2 justify-center">
                        <p className="text-orange-400 text-2xl"> | </p>
                        <p className="text-gray-600 space-mono">
                            Discover your next favorite retro game topics
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <p className="text-gray-600 space-mono">
                    Coming Soon........
                </p>
            </div>
        </div>
    );
};

export default Blogs;