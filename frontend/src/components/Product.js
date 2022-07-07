import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function Product({ product }) {
  const { slug, name, image, rating, numReviews, price, countInStock } =
    product;

  return (
    <Card className="h-100 shadow-sm">
      <Link to={`/product/${slug}`}>
        <img src={image} className="card-img-top" alt={name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${slug}`}>
          <Card.Title>{name}</Card.Title>
        </Link>
        <Rating rating={rating} numReviews={numReviews} />
        <Card.Text className="text-bold">${price} </Card.Text>
        {countInStock === 0 ? (
          <Button variant="light" disabled>
            Out of stock
          </Button>
        ) : (
          <Link to={`/product/${slug}`}>
            <Button variant="outline-info opacity-50">Buy Now!</Button>
          </Link>
        )}
      </Card.Body>
    </Card>
  );
}
