import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function CarouselSlider() {
    return (
        <>

            <Carousel>
                <Carousel.Item interval={1000}>
                    <img src="https://i.postimg.cc/RZRCqtjF/books3.jpg" alt="books" style={{ width: '100%', height: '400px' }} />
                    <Carousel.Caption>
                        <p>"A reader lives a thousand lives before he dies. The man who never reads lives only one." - George R.R. Martin</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img src="https://i.postimg.cc/1t1FPw6z/books2.jpg" alt="books2" style={{ width: '100%', height: '400px' }} />
                    <Carousel.Caption>
                        <p>"The more that you read, the more things you will know. The more that you learn, the more places you'll go." - Dr. Seuss</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://i.postimg.cc/TwLM4GxW/book.jpg" alt="books3" style={{ width: '100%', height: '400px' }} />
                    <Carousel.Caption>
                        <p>"Reading is an exercise in empathy; an exercise in walking in someone else’s shoes for a while." - Malorie Blackman</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default CarouselSlider