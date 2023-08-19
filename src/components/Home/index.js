import './index.scss'
import { Container, Row, Col } from "react-bootstrap";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion'
// import {fadeIn} from '../va'

const Home = () => {
    return ( 
        <div className="banner">
            <Container>
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
                            >Hello, I'm LIM ZENG KAI</motion.h1> <br />
                            <p>
                            <span className='text'>I am a </span>
                            <span> </span>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Web developer',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'Network Engineer',
                                    1000,
                                    'RF Engineer',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={10}
                                style={{ fontSize: '2em', display: 'inline-block'}}
                                repeat={Infinity}
                                />
                            </p>

                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    ads
                    </Col>
                </Row>
            </Container>
        </div>

    );
}
 
export default Home;