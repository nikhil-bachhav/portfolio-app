import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "../Card";
import "./ProjectSection.css";

interface Data {
  title: string;
  imageUrl: string;
  description: string;
  moreLink?: string;
}

const ProjectsSection: React.FC = () => {
  // Example data
  const cardData: Data[] = [
    {
      title: "Card 1",
      imageUrl: "https://picsum.photos/id/11/450/250",
      description: "Description for Card 1",
      moreLink: "https://example.com/card1",
    },
    {
      title: "Card 2",
      imageUrl: "https://picsum.photos/id/29/450/250",
      description: "Description for Card 2",
      moreLink: "https://example.com/card2",
    },
    {
      title: "Card 3",
      imageUrl: "https://picsum.photos/id/68/450/250",
      description: "Description for Card 3",
      moreLink: "https://example.com/card1",
    },
    {
      title: "Card 4",
      imageUrl: "https://picsum.photos/id/274/450/250",
      description: "Description for Card 4",
      moreLink: "https://example.com/card2",
    },
    {
      title: "Card 5",
      imageUrl: "https://picsum.photos/id/34/450/250",
      description: "Description for Card 5",
      moreLink: "https://example.com/card2",
    },
    {
      title: "Card 6",
      imageUrl: "https://picsum.photos/id/45/450/250",
      description: "Description for Card 6",
      moreLink: "https://example.com/card2",
    },
  ];

  return (
    <Container className="py-5 project-container" id="projects">
      <h1 className="section-title">Projects</h1>
      <Row className="justify-content-center">
        {cardData.map((card, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card
              title={card.title}
              imageUrl={card.imageUrl}
              description={card.description}
              moreLink={card.moreLink}
            />
            {/* <div className="card">
              <img
                src={card.imageUrl}
                className="card-img-top"
                alt={card.title}
              />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.description}</p>
                {card.moreLink && (
                  <a href={card.moreLink} className="btn btn-primary">
                    Learn More
                  </a>
                )}
              </div>
            </div> */}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectsSection;
