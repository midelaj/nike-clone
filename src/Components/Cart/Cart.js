import React, { useContext } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { Trash, Plus, Heart } from 'lucide-react';
import { CartContext } from '../../context /CartContex';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, totalAmount } = useContext(CartContext);

  const deliveryHandling = 40; // Assuming a fixed delivery charge

  // Helper function to safely format price
  const formatPrice = (price) => {
    return typeof price === 'number' ? price.toFixed(2) : '0.00';
  };

  return (
    <Container className="my-5">
      <Row>
        <Col md={8}>
          <h2 className="mb-4">Bag</h2>
          {cartItems.map((item) => (
            <Card key={item.id} className="mb-3">
              <Card.Body>
                <Row>
                  <Col md={3}>
                    <img src={`http://localhost:3000/assets/${item.productMainImage}`} alt={item.name} className="img-fluid" />
                  </Col>
                  <Col md={6}>
                    <h5>{item.productName}</h5>
                    <p className="text-muted">{item.description}</p>
                    <p className="text-muted">Size: {item.size}</p>
                  </Col>
                  <Col md={3}>
                    <p className="font-weight-bold">MRP : ₹ {item.productPrice}</p>
                    {console.log(item.productPrice)}
                    {console.log(cartItems)
                    }

                    <div className="d-flex justify-content-between align-items-center">
                      <Button variant="light" size="sm" onClick={() => removeFromCart(item.id)}><Trash size={16} /></Button>
                      <Form.Control
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        style={{ width: '60px' }}
                      />
                      <Button variant="light" size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus size={16} /></Button>
                      <Button variant="light" size="sm"><Heart size={16} /></Button>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <h4>Summary</h4>
              <Row className="mb-2">
                <Col>Subtotal</Col>
                <Col className="text-right">₹ {formatPrice(totalAmount)}</Col>
              </Row>
              <Row className="mb-2">
                <Col>Estimated Delivery & Handling</Col>
                <Col className="text-right">₹ {formatPrice(deliveryHandling)}</Col>
              </Row>
              <hr />
              <Row className="font-weight-bold">
                <Col>Total</Col>
                <Col className="text-right">₹ {formatPrice(totalAmount + deliveryHandling)}</Col>
              </Row>
              <Button variant="dark" block className="mt-3">Member Checkout</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;