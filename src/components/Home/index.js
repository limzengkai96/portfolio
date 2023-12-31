import './index.scss'
import { Container, Row, Col } from "react-bootstrap";
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion'
import { useState, useEffect } from 'react';
import KaiImg from '../../assets/images/kai-image.png'
import AnimatedLetters from '../AnimatedLetter';
import About from '../../components/About';
import Education from '../../components/Education';
import Experience from '../../components/Experience';
import Qualification from '../../components/Qualification';
import Project from '../../components/Project';
// import {fadeIn} from '../va'

const Home = () => {
    const [size, setSize] = useState(true);
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['L','I','M',' ', 'Z', 'E', 'N','G',' ','K','A','I'];
    
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 710) {
                setSize(true);
                console.log(size)
            } else {
                setSize(false);
            }
        };

        // Call handleResize initially and add event listener for resize
        handleResize();
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const interval = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 2000);

        // Clean up the interval on unmount
        return () => {
            clearTimeout(interval);
        };
    }, []);

    return ( 
        <div className="banner">
            <Container className='container_color'>
                <Row className="align-items-center"> 
                    <Col xs={12} md={6} xl={7}>
                        <h1>
                            <span className="tagline">Welcome to my Portfolio</span>
                        </h1>
                        <div className='Intro'>
                            <motion.h1
                                initial={{y:30, opacity:0}}
                                animate={{y:0, opacity:1}}
                                transition={{delay:0.5, duration:1}}
                            >Hello, I'm <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                            </motion.h1> <br />
                            <p>
                                <span className='text'>I am a </span>
                                { console.log(size)}
                                {!size ? (
                                    <TypeAnimation
                                        sequence={[
                                            'Web developer',
                                            1000,
                                            'Network Engineer',
                                            1000,
                                            'RF Engineer',
                                            1000,
                                        ]}
                                        wrapper="span"
                                        speed={10}
                                        style={{ fontSize: '72px', display: 'inline-block' }}
                                        repeat={Infinity}
                                    />
                                ) : (
                                    <TypeAnimation
                                        sequence={[
                                            'Web developer',
                                            1000,
                                            'Network Engineer',
                                            1000,
                                            'RF Engineer',
                                            1000,
                                        ]}
                                        wrapper="span"
                                        speed={10}
                                        style={{ fontSize: '42px', display: 'inline-block' }}
                                        repeat={Infinity}
                                    />
                                )}
                            </p>

                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <motion.div
                            initial={{x:-30, opacity:0}}
                            animate={{x:0, opacity:1}}
                            transition={{delay:0.5, duration:1}}
                        >
                            <img src={KaiImg} alt="Kai_Image" />
                        </motion.div>

                    </Col>
                </Row>
                <button className='bg-gray-900 font-semibold text-yellow-500 p-4 mr-6 my-7 border border-yellow-500 transition-colors duration-150 rounded-lg hover:bg-yellow-500 hover:text-gray-900'>
                    Contact Me
                </button>
                <button className='bg-gray-900 font-semibold text-yellow-500 p-4 ml-6 border border-yellow-500 transition-colors duration-150 rounded-lg hover:bg-yellow-500 hover:text-gray-900'>
                    My Resume
                </button>
                <Row className='description'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum officiis dicta quo, praesentium modi esse placeat eum aut, pariatur neque debitis rem! Laborum vero iure dolor quam porro quod?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus autem quaerat, distinctio nisi impedit consequatur optio accusamus adipisci, quas ex magni veritatis similique neque totam unde nobis iusto! Qui!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptate optio aspernatur accusamus, magnam qui voluptatibus fugiat porro illo, placeat nostrum. Veritatis amet illo cupiditate eos praesentium. In, laudantium cupiditate!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolore quae laborum incidunt repellendus dolores sequi quas nesciunt similique. Doloremque, numquam? Dolore debitis veniam facilis cupiditate distinctio, commodi labore quae.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ratione aliquid perferendis animi similique expedita. Eos dolores error incidunt autem similique unde illo nobis saepe. Tenetur cum nesciunt eos ad.
                    </p>
                </Row>
            </Container>

            <About/>
            <Education/>
            <Experience/>
            <Qualification/>
            <Project/>
        </div>

    );
}
 
export default Home;