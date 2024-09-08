import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Sun, Cloud, Stars } from 'lucide-react';

const HomePage = () => {
  const features = [
    { title: 'Interactive Lessons', description: 'Engage with fun, interactive lessons designed for grades 6-8', icon: '🎓' },
    { title: 'Progress Tracking', description: 'Monitor your learning journey with easy-to-understand progress reports', icon: '📊' },
    { title: 'Varied Subjects', description: 'Explore a wide range of subjects from math to science and beyond', icon: '🔬' },
    { title: 'Rewards System', description: 'Earn badges and rewards as you complete lessons and challenges', icon: '🏅' },
  ];

  const subjects = [
    { name: 'Math', icon: '🔢', color: '#FF6B6B' },
    { name: 'Science', icon: '🧪', color: '#4ECDC4' },
    { name: 'English', icon: '📚', color: '#45B7D1' },
    { name: 'History', icon: '🏛', color: '#FFA07A' },
    { name: 'Geography', icon: '🌍', color: '#98D8C8' },
    { name: 'Art', icon: '🎨', color: '#FFBE7B' },
  ];

  return (
    <Container fluid className="p-0" style={{ overflow: 'hidden' }}>
      <motion.div
        className="position-relative"
        style={{
          background: 'linear-gradient(135deg, #6A11CB, #2575FC)',
          minHeight: '100vh',
          padding: '4rem 1rem',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Sun Animation */}
        <motion.div
          className="position-absolute"
          style={{ top: 20, left: 20, color: 'white' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <Sun size={40} />
        </motion.div>

        {/* Cloud Animation */}
        <motion.div
          className="position-absolute"
          style={{ top: 100, right: 50, color: 'white' }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Cloud size={50} />
        </motion.div>

        {/* Stars Animation */}
        <motion.div
          className="position-absolute"
          style={{ bottom: 50, left: 50, color: 'white' }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Stars size={30} />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="text-center mb-4"
          style={{ color: '#FFFFFF', fontSize: '4rem', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to Learning Adventure! 🚀
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-center mb-5"
          style={{ fontSize: '1.4rem', color: '#E0E0E0' }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Embark on an exciting journey of knowledge for students in grades 6-8
        </motion.p>

        {/* Features Section */}
        <Row className="justify-content-center mb-5">
          <Col md={8}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Row>
                {features.map((feature, index) => (
                  <Col key={index} sm={6} className="mb-4">
                    <Card className="h-100">
                      <Card.Body className="text-center">
                        <motion.div
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <span style={{ fontSize: '2rem' }}>{feature.icon}</span>
                        </motion.div>
                        <Card.Title>{feature.title}</Card.Title>
                        <Card.Text>{feature.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </motion.div>
          </Col>
        </Row>

        {/* Subjects Section */}
        <Row className="justify-content-center">
          {subjects.map((subject, index) => (
            <Col key={index} xs={6} sm={4} className="text-center mb-3">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{ backgroundColor: subject.color, padding: '1rem', borderRadius: '1rem', color: 'white', fontSize: '1.5rem' }}
              >
                {subject.icon} {subject.name}
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>
    </Container>
  );
};

export default HomePage;
