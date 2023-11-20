import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./HeroSection.module.css"; // Import the CSS module

const HeroSection = () => {
  return (
    <div className={styles["hero-banner"]}>
      {/* Use the CSS classes from the module */}
      <Container>
        <Row>
          <Col className="text-center">
            <img
              src={"https://picsum.photos/200"}
              alt="Hero"
              className={`img-fluid ${styles["img-profile"]}`}
            />
            <div className={styles.caption}>
              <h6>Your Caption Here</h6>
            </div>
            <div className={styles["main-heading"]}>
              <h1>Main Heading</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
