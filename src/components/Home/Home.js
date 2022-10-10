import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
     return (
          <div>

<Carousel fade> 
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://t4.ftcdn.net/jpg/04/39/13/37/240_F_439133763_FrLdhZsd5aGC23r9ATARuKJBr8ifZjIe.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://t3.ftcdn.net/jpg/03/00/27/36/240_F_300273615_iYVmicXE77f8waxfq9HxVll7R28Vl2CJ.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
              
          </div>
     );
};

export default Home;