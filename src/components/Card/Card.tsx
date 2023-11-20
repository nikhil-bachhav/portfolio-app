import React from "react";
import { Card as BootstrapCard } from "react-bootstrap";

interface CardProps {
  title: string;
  imageUrl: string;
  description: string;
  moreLink?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  imageUrl,
  description,
  moreLink,
}) => {
  return (
    <div className="card">
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        {moreLink && (
          <a href={moreLink} className="btn btn-primary">
            Learn More
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
