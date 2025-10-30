import React from 'react';
import Newsletter from '../../components/NewsLetter/NewsLetter';



const About = () => {
    return (
        <div>

            <title>About - GameHub</title>

            
                <h1 className='text-3xl font-bold space-mono text-center mt-4'>GameHub – Where Retro Lives</h1>
                <div className='border-4 mt-4 border-black p-2 text-xl'>
                    <p>Welcome to GameHub, your ultimate destination for retro and classic games! Whether you’re a nostalgic gamer looking to relive the golden age of arcade adventures or a newcomer eager to explore legendary titles, GameHub brings the magic of gaming history right to your fingertips.</p>
                </div>
                <div className='border-4 mt-4 border-black p-2 text-xl'>
                    <p>At GameHub, we celebrate the games that defined generations—platformers, shooters, puzzle games, RPGs, and more. Every game in our library comes with detailed information, ratings, and download links to ensure you can jump straight into the action. From Super Mario Bros. to Pac-Man, from epic adventures like The Legend of Zelda to iconic battles in Street Fighter II, GameHub is your portal to timeless gaming experiences.</p>
                </div>
                <div className='border-4 mt-4 border-black p-2 text-xl'>
                    <p>Our mission is simple: to make retro gaming accessible, fun, and engaging. With intuitive search features, categorized collections, and high-quality cover art, we ensure that every visit is easy to navigate and enjoyable. Whether you’re hunting for a classic favorite or discovering hidden gems, GameHub makes it effortless to explore the world of retro gaming.</p>
                </div>


                  <div>
                <Newsletter></Newsletter>
            </div>
        </div>
    );
};

export default About;