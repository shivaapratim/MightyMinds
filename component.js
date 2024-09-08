





// import React from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import { motion } from 'framer-motion';
// import { Sun, Moon, Cloud, Stars } from 'lucide-react';

// const HomePage = () => {
//   const features = [
//     { title: 'Interactive Lessons', description: 'Engage with fun, interactive lessons designed for grades 6-8', icon: '🎓' },
//     { title: 'Progress Tracking', description: 'Monitor your learning journey with easy-to-understand progress reports', icon: '📊' },
//     { title: 'Varied Subjects', description: 'Explore a wide range of subjects from math to science and beyond', icon: '🔬' },
//     { title: 'Rewards System', description: 'Earn badges and rewards as you complete lessons and challenges', icon: '🏅' },
//   ];

//   const subjects = [
//     { name: 'Math', icon: '🔢', color: '#FF6B6B' },
//     { name: 'Science', icon: '🧪', color: '#4ECDC4' },
//     { name: 'English', icon: '📚', color: '#45B7D1' },
//     { name: 'History', icon: '🏛', color: '#FFA07A' },
//     { name: 'Geography', icon: '🌍', color: '#98D8C8' },
//     { name: 'Art', icon: '🎨', color: '#FFBE7B' },
//   ];

//   return (
//     <Container fluid className="p-0" style={{ overflow: 'hidden' }}>
//       <motion.div
//         className="position-relative"
//         style={{
//           background: 'linear-gradient(135deg, #6A11CB, #2575FC)',
//           minHeight: '100vh',
//           padding: '4rem 1rem',
//         }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <motion.div
//           className="position-absolute"
//           style={{ top: 20, left: 20, color: 'white' }}
//           animate={{ rotate: 360 }}
//           transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
//         >
//           <Sun size={40} />
//         </motion.div>
//         <motion.div
//           className="position-absolute"
//           style={{ top: 100, right: 50, color: 'white' }}
//           animate={{ y: [0, -20, 0] }}
//           transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
//         >
//           <Cloud size={50} />
//         </motion.div>
//         <motion.div
//           className="position-absolute"
//           style={{ bottom: 50, left: 50, color: 'white' }}
//           animate={{ scale: [1, 1.2, 1] }}
//           transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
//         >
//           <Stars size={30} />
//         </motion.div>

//         <motion.h1 
//           className="text-center mb-4"
//           style={{ color: '#FFFFFF', fontSize: '4rem', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           Welcome to Learning Adventure! 🚀
//         </motion.h1>
//         <motion.p 
//           className="text-center mb-5"
//           style={{ fontSize: '1.4rem', color: '#E0E0E0' }}
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           Embark on an exciting journey of knowledge for students in grades 6-8
//         </motion.p>
//         <Row className="justify-content-center mb-5">
//           <Col md={8}>
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//             >
//               <Card className="border-0 shadow-lg" style={{ borderRadius: '20px', background: 'rgba(255,255,255,0.9)' }}>
//                 <Card.Body className="text-center p-5">
//                   <h2 className="mb-4" style={{ color: '#4A148C' }}>Our Mission</h2>
//                   <p style={{ fontSize: '1.2rem', color: '#333' }}>
//                     At Learning Adventure, we believe in making education fun and accessible. 
//                     Our interactive platform is designed to spark curiosity, foster creativity, 
//                     and build confidence in young learners. Join us on this exciting journey of discovery!
//                   </p>
//                   <motion.div
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <Button 
//                       variant="primary" 
//                       size="lg" 
//                       className="mt-3" 
//                       href="/learn"
//                       style={{ 
//                         background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)', 
//                         border: 'none', 
//                         padding: '0.75rem 2rem',
//                         fontSize: '1.2rem',
//                         fontWeight: 'bold',
//                         boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
//                       }}
//                     >
//                       Start Learning Now!
//                     </Button>
//                   </motion.div>
//                 </Card.Body>
//               </Card>
//             </motion.div>
//           </Col>
//         </Row>

//         <h2 className="text-center mb-4" style={{ color: '#FFFFFF', fontSize: '2.5rem' }}>What We Offer</h2>
//         <Row xs={1} md={2} className="g-4 justify-content-center mb-5">
//           {features.map((feature, index) => (
//             <Col key={index}>
//               <motion.div
//                 whileHover={{ scale: 1.05, rotate: 2 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Card className="h-100 border-0 shadow-lg" style={{ borderRadius: '15px', background: 'rgba(255,255,255,0.9)' }}>
//                   <Card.Body className="text-center p-4">
//                     <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{feature.icon}</div>
//                     <Card.Title style={{ color: '#4A148C', fontSize: '1.4rem', fontWeight: 'bold' }}>{feature.title}</Card.Title>
//                     <Card.Text style={{ color: '#333', fontSize: '1.1rem' }}>{feature.description}</Card.Text>
//                   </Card.Body>
//                 </Card>
//               </motion.div>
//             </Col>
//           ))}
//         </Row>
//         <h2 className="text-center mb-4" style={{ color: '#FFFFFF', fontSize: '2.5rem' }}>Explore Subjects</h2>
//         <Row xs={2} md={3} lg={6} className="g-4 justify-content-center">
//           {subjects.map((subject, index) => (
//             <Col key={index}>
//               <motion.div
//                 whileHover={{ scale: 1.1, rotate: 5 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <Card 
//                   className="border-0 shadow-lg text-center" 
//                   style={{ 
//                     borderRadius: '50%', 
//                     width: '120px', 
//                     height: '120px', 
//                     display: 'flex', 
//                     alignItems: 'center', 
//                     justifyContent: 'center',
//                     background: subject.color
//                   }}
//                 >
//                   <Card.Body>
//                     <div style={{ fontSize: '2.5rem' }}>{subject.icon}</div>
//                     <div style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#FFF' }}>{subject.name}</div>
//                   </Card.Body>
//                 </Card>
//               </motion.div>
//             </Col>
//           ))}
//         </Row>
//       </motion.div>
//     </Container>
//   );
// };

// export default HomePage; -->






// import React from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import { motion } from 'framer-motion';
// import { Sun, Moon, Cloud, Stars } from 'lucide-react';

// const HomePage = () => {
//   const features = [
//     { title: 'Interactive Lessons', description: 'Engage with fun, interactive lessons designed for grades 6-8', icon: '🎓' },
//     { title: 'Progress Tracking', description: 'Monitor your learning journey with easy-to-understand progress reports', icon: '📊' },
//     { title: 'Varied Subjects', description: 'Explore a wide range of subjects from math to science and beyond', icon: '🔬' },
//     { title: 'Rewards System', description: 'Earn badges and rewards as you complete lessons and challenges', icon: '🏅' },
//   ];

//   const subjects = [
//     { name: 'Math', icon: '🔢', color: '#FF6B6B' },
//     { name: 'Science', icon: '🧪', color: '#4ECDC4' },
//     { name: 'English', icon: '📚', color: '#45B7D1' },
//     { name: 'History', icon: '🏛', color: '#FFA07A' },
//     { name: 'Geography', icon: '🌍', color: '#98D8C8' },
//     { name: 'Art', icon: '🎨', color: '#FFBE7B' },
//   ];

//   return (
//     <Container fluid className="p-0" style={{ overflow: 'hidden' }}>
//       <motion.div
//         className="position-relative"
//         style={{
//           background: 'linear-gradient(135deg, #6A11CB, #2575FC)',
//           minHeight: '100vh',
//           padding: '4rem 1rem',
//         }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <motion.div
//           className="position-absolute"
//           style={{ top: 20, left: 20, color: 'white' }}
//           animate={{ rotate: 360 }}
//           transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
//         >
//           <Sun size={40} />
//         </motion.div>
//         <motion.div
//           className="position-absolute"
//           style={{ top: 100, right: 50, color: 'white' }}
//           animate={{ y: [0, -20, 0] }}
//           transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
//         >
//           <Cloud size={50} />
//         </motion.div>
//         <motion.div
//           className="position-absolute"
//           style={{ bottom: 50, left: 50, color: 'white' }}
//           animate={{ scale: [1, 1.2, 1] }}
//           transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
//         >
//           <Stars size={30} />
//         </motion.div>

//         <motion.h1 
//           className="text-center mb-4"
//           style={{ color: '#FFFFFF', fontSize: '4rem', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           Welcome to Learning Adventure! 🚀
//         </motion.h1>
//         <motion.p 
//           className="text-center mb-5"
//           style={{ fontSize: '1.4rem', color: '#E0E0E0' }}
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           Embark on an exciting journey of knowledge for students in grades 6-8
//         </motion.p>
//         <Row className="justify-content-center mb-5">
//           <Col md={8}>
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//             >
//               <Card className="border-0 shadow-lg" style={{ borderRadius: '20px', background: 'rgba(255,255,255,0.9)' }}>
//                 <Card.Body className="text-center p-5">
//                   <h2 className="mb-4" style={{ color: '#4A148C' }}>Our Mission</h2>
//                   <p style={{ fontSize: '1.2rem', color: '#333' }}>
//                     At Learning Adventure, we believe in making education fun and accessible. 
//                     Our interactive platform is designed to spark curiosity, foster creativity, 
//                     and build confidence in young learners. Join us on this exciting journey of discovery!
//                   </p>
//                   <motion.div
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <Button 
//                       variant="primary" 
//                       size="lg" 
//                       className="mt-3" 
//                       href="/learn"
//                       style={{ 
//                         background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)', 
//                         border: 'none', 
//                         padding: '0.75rem 2rem',
//                         fontSize: '1.2rem',
//                         fontWeight: 'bold',
//                         boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
//                       }}
//                     >
//                       Start Learning Now!
//                     </Button>
//                   </motion.div>
//                 </Card.Body>
//               </Card>
//             </motion.div>
//           </Col>
//         </Row>

//         <h2 className="text-center mb-4" style={{ color: '#FFFFFF', fontSize: '2.5rem' }}>What We Offer</h2>
//         <Row xs={1} md={2} className="g-4 justify-content-center mb-5">
//           {features.map((feature, index) => (
//             <Col key={index}>
//               <motion.div
//                 whileHover={{ scale: 1.05, rotate: 2 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Card className="h-100 border-0 shadow-lg" style={{ borderRadius: '15px', background: 'rgba(255,255,255,0.9)' }}>
//                   <Card.Body className="text-center p-4">
//                     <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{feature.icon}</div>
//                     <Card.Title style={{ color: '#4A148C', fontSize: '1.4rem', fontWeight: 'bold' }}>{feature.title}</Card.Title>
//                     <Card.Text style={{ color: '#333', fontSize: '1.1rem' }}>{feature.description}</Card.Text>
//                   </Card.Body>
//                 </Card>
//               </motion.div>
//             </Col>
//           ))}
//         </Row>
//         <h2 className="text-center mb-4" style={{ color: '#FFFFFF', fontSize: '2.5rem' }}>Explore Subjects</h2>
//         <Row xs={2} md={3} lg={6} className="g-4 justify-content-center">
//           {subjects.map((subject, index) => (
//             <Col key={index}>
//               <motion.div
//                 whileHover={{ scale: 1.1, rotate: 5 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <Card 
//                   className="border-0 shadow-lg text-center" 
//                   style={{ 
//                     borderRadius: '50%', 
//                     width: '120px', 
//                     height: '120px', 
//                     display: 'flex', 
//                     alignItems: 'center', 
//                     justifyContent: 'center',
//                     background: subject.color
//                   }}
//                 >
//                   <Card.Body>
//                     <div style={{ fontSize: '2.5rem' }}>{subject.icon}</div>
//                     <div style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#FFF' }}>{subject.name}</div>
//                   </Card.Body>
//                 </Card>
//               </motion.div>
//             </Col>
//           ))}
//         </Row>
//       </motion.div>
//     </Container>
//   );
// };

// export default HomePage; -->






// import React from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import { motion } from 'framer-motion';
// import { Sun, Moon, Cloud, Stars } from 'lucide-react';

// const HomePage = () => {
//   const features = [
//     { title: 'Interactive Lessons', description: 'Engage with fun, interactive lessons designed for grades 6-8', icon: '🎓' },
//     { title: 'Progress Tracking', description: 'Monitor your learning journey with easy-to-understand progress reports', icon: '📊' },
//     { title: 'Varied Subjects', description: 'Explore a wide range of subjects from math to science and beyond', icon: '🔬' },
//     { title: 'Rewards System', description: 'Earn badges and rewards as you complete lessons and challenges', icon: '🏅' },
//   ];

//   const subjects = [
//     { name: 'Math', icon: '🔢', color: '#FF6B6B' },
//     { name: 'Science', icon: '🧪', color: '#4ECDC4' },
//     { name: 'English', icon: '📚', color: '#45B7D1' },
//     { name: 'History', icon: '🏛', color: '#FFA07A' },
//     { name: 'Geography', icon: '🌍', color: '#98D8C8' },
//     { name: 'Art', icon: '🎨', color: '#FFBE7B' },
//   ];

//   return (
//     <Container fluid className="p-0" style={{ overflow: 'hidden' }}>
//       <motion.div
//         className="position-relative"
//         style={{
//           background: 'linear-gradient(135deg, #6A11CB, #2575FC)',
//           minHeight: '100vh',
//           padding: '4rem 1rem',
//         }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <motion.div
//           className="position-absolute"
//           style={{ top: 20, left: 20, color: 'white' }}
//           animate={{ rotate: 360 }}
//           transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
//         >
//           <Sun size={40} />
//         </motion.div>
//         <motion.div
//           className="position-absolute"
//           style={{ top: 100, right: 50, color: 'white' }}
//           animate={{ y: [0, -20, 0] }}
//           transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
//         >
//           <Cloud size={50} />
//         </motion.div>
//         <motion.div
//           className="position-absolute"
//           style={{ bottom: 50, left: 50, color: 'white' }}
//           animate={{ scale: [1, 1.2, 1] }}
//           transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
//         >
//           <Stars size={30} />
//         </motion.div>

//         <motion.h1 
//           className="text-center mb-4"
//           style={{ color: '#FFFFFF', fontSize: '4rem', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           Welcome to Learning Adventure! 🚀
//         </motion.h1>
//         <motion.p 
//           className="text-center mb-5"
//           style={{ fontSize: '1.4rem', color: '#E0E0E0' }}
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           Embark on an exciting journey of knowledge for students in grades 6-8
//         </motion.p>
//         <Row className="justify-content-center mb-5">
//           <Col md={8}>
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//             >
//               <Card className="border-0 shadow-lg" style={{ borderRadius: '20px', background: 'rgba(255,255,255,0.9)' }}>
//                 <Card.Body className="text-center p-5">
//                   <h2 className="mb-4" style={{ color: '#4A148C' }}>Our Mission</h2>
//                   <p style={{ fontSize: '1.2rem', color: '#333' }}>
//                     At Learning Adventure, we believe in making education fun and accessible. 
//                     Our interactive platform is designed to spark curiosity, foster creativity, 
//                     and build confidence in young learners. Join us on this exciting journey of discovery!
//                   </p>
//                   <motion.div
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <Button 
//                       variant="primary" 
//                       size="lg" 
//                       className="mt-3" 
//                       href="/learn"
//                       style={{ 
//                         background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)', 
//                         border: 'none', 
//                         padding: '0.75rem 2rem',
//                         fontSize: '1.2rem',
//                         fontWeight: 'bold',
//                         boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
//                       }}
//                     >
//                       Start Learning Now!
//                     </Button>
//                   </motion.div>
//                 </Card.Body>
//               </Card>
//             </motion.div>
//           </Col>
//         </Row>

//         <h2 className="text-center mb-4" style={{ color: '#FFFFFF', fontSize: '2.5rem' }}>What We Offer</h2>
//         <Row xs={1} md={2} className="g-4 justify-content-center mb-5">
//           {features.map((feature, index) => (
//             <Col key={index}>
//               <motion.div
//                 whileHover={{ scale: 1.05, rotate: 2 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Card className="h-100 border-0 shadow-lg" style={{ borderRadius: '15px', background: 'rgba(255,255,255,0.9)' }}>
//                   <Card.Body className="text-center p-4">
//                     <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{feature.icon}</div>
//                     <Card.Title style={{ color: '#4A148C', fontSize: '1.4rem', fontWeight: 'bold' }}>{feature.title}</Card.Title>
//                     <Card.Text style={{ color: '#333', fontSize: '1.1rem' }}>{feature.description}</Card.Text>
//                   </Card.Body>
//                 </Card>
//               </motion.div>
//             </Col>
//           ))}
//         </Row>
//         <h2 className="text-center mb-4" style={{ color: '#FFFFFF', fontSize: '2.5rem' }}>Explore Subjects</h2>
//         <Row xs={2} md={3} lg={6} className="g-4 justify-content-center">
//           {subjects.map((subject, index) => (
//             <Col key={index}>
//               <motion.div
//                 whileHover={{ scale: 1.1, rotate: 5 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <Card 
//                   className="border-0 shadow-lg text-center" 
//                   style={{ 
//                     borderRadius: '50%', 
//                     width: '120px', 
//                     height: '120px', 
//                     display: 'flex', 
//                     alignItems: 'center', 
//                     justifyContent: 'center',
//                     background: subject.color
//                   }}
//                 >
//                   <Card.Body>
//                     <div style={{ fontSize: '2.5rem' }}>{subject.icon}</div>
//                     <div style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#FFF' }}>{subject.name}</div>
//                   </Card.Body>
//                 </Card>
//               </motion.div>
//             </Col>
//           ))}
//         </Row>
//       </motion.div>
//     </Container>
//   );
// };

// export default HomePage; -->






// import React from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import { motion } from 'framer-motion';
// import { Sun, Moon, Cloud, Stars } from 'lucide-react';

// const HomePage = () => {
//   const features = [
//     { title: 'Interactive Lessons', description: 'Engage with fun, interactive lessons designed for grades 6-8', icon: '🎓' },
//     { title: 'Progress Tracking', description: 'Monitor your learning journey with easy-to-understand progress reports', icon: '📊' },
//     { title: 'Varied Subjects', description: 'Explore a wide range of subjects from math to science and beyond', icon: '🔬' },
//     { title: 'Rewards System', description: 'Earn badges and rewards as you complete lessons and challenges', icon: '🏅' },
//   ];

//   const subjects = [
//     { name: 'Math', icon: '🔢', color: '#FF6B6B' },
//     { name: 'Science', icon: '🧪', color: '#4ECDC4' },
//     { name: 'English', icon: '📚', color: '#45B7D1' },
//     { name: 'History', icon: '🏛', color: '#FFA07A' },
//     { name: 'Geography', icon: '🌍', color: '#98D8C8' },
//     { name: 'Art', icon: '🎨', color: '#FFBE7B' },
//   ];

//   return (
//     <Container fluid className="p-0" style={{ overflow: 'hidden' }}>
//       <motion.div
//         className="position-relative"
//         style={{
//           background: 'linear-gradient(135deg, #6A11CB, #2575FC)',
//           minHeight: '100vh',
//           padding: '4rem 1rem',
//         }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <motion.div
//           className="position-absolute"
//           style={{ top: 20, left: 20, color: 'white' }}
//           animate={{ rotate: 360 }}
//           transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
//         >
//           <Sun size={40} />
//         </motion.div>
//         <motion.div
//           className="position-absolute"
//           style={{ top: 100, right: 50, color: 'white' }}
//           animate={{ y: [0, -20, 0] }}
//           transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
//         >
//           <Cloud size={50} />
//         </motion.div>
//         <motion.div
//           className="position-absolute"
//           style={{ bottom: 50, left: 50, color: 'white' }}
//           animate={{ scale: [1, 1.2, 1] }}
//           transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
//         >
//           <Stars size={30} />
//         </motion.div>

//         <motion.h1 
//           className="text-center mb-4"
//           style={{ color: '#FFFFFF', fontSize: '4rem', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           Welcome to Learning Adventure! 🚀
//         </motion.h1>
//         <motion.p 
//           className="text-center mb-5"
//           style={{ fontSize: '1.4rem', color: '#E0E0E0' }}
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           Embark on an exciting journey of knowledge for students in grades 6-8
//         </motion.p>
//         <Row className="justify-content-center mb-5">
//           <Col md={8}>
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//             >
//               <Card className="border-0 shadow-lg" style={{ borderRadius: '20px', background: 'rgba(255,255,255,0.9)' }}>
//                 <Card.Body className="text-center p-5">
//                   <h2 className="mb-4" style={{ color: '#4A148C' }}>Our Mission</h2>
//                   <p style={{ fontSize: '1.2rem', color: '#333' }}>
//                     At Learning Adventure, we believe in making education fun and accessible. 
//                     Our interactive platform is designed to spark curiosity, foster creativity, 
//                     and build confidence in young learners. Join us on this exciting journey of discovery!
//                   </p>
//                   <motion.div
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <Button 
//                       variant="primary" 
//                       size="lg" 
//                       className="mt-3" 
//                       href="/learn"
//                       style={{ 
//                         background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)', 
//                         border: 'none', 
//                         padding: '0.75rem 2rem',
//                         fontSize: '1.2rem',
//                         fontWeight: 'bold',
//                         boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
//                       }}
//                     >
//                       Start Learning Now!
//                     </Button>
//                   </motion.div>
//                 </Card.Body>
//               </Card>
//             </motion.div>
//           </Col>
//         </Row>

//         <h2 className="text-center mb-4" style={{ color: '#FFFFFF', fontSize: '2.5rem' }}>What We Offer</h2>
//         <Row xs={1} md={2} className="g-4 justify-content-center mb-5">
//           {features.map((feature, index) => (
//             <Col key={index}>
//               <motion.div
//                 whileHover={{ scale: 1.05, rotate: 2 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Card className="h-100 border-0 shadow-lg" style={{ borderRadius: '15px', background: 'rgba(255,255,255,0.9)' }}>
//                   <Card.Body className="text-center p-4">
//                     <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{feature.icon}</div>
//                     <Card.Title style={{ color: '#4A148C', fontSize: '1.4rem', fontWeight: 'bold' }}>{feature.title}</Card.Title>
//                     <Card.Text style={{ color: '#333', fontSize: '1.1rem' }}>{feature.description}</Card.Text>
//                   </Card.Body>
//                 </Card>
//               </motion.div>
//             </Col>
//           ))}
//         </Row>
//         <h2 className="text-center mb-4" style={{ color: '#FFFFFF', fontSize: '2.5rem' }}>Explore Subjects</h2>
//         <Row xs={2} md={3} lg={6} className="g-4 justify-content-center">
//           {subjects.map((subject, index) => (
//             <Col key={index}>
//               <motion.div
//                 whileHover={{ scale: 1.1, rotate: 5 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <Card 
//                   className="border-0 shadow-lg text-center" 
//                   style={{ 
//                     borderRadius: '50%', 
//                     width: '120px', 
//                     height: '120px', 
//                     display: 'flex', 
//                     alignItems: 'center', 
//                     justifyContent: 'center',
//                     background: subject.color
//                   }}
//                 >
//                   <Card.Body>
//                     <div style={{ fontSize: '2.5rem' }}>{subject.icon}</div>
//                     <div style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#FFF' }}>{subject.name}</div>
//                   </Card.Body>
//                 </Card>
//               </motion.div>
//             </Col>
//           ))}
//         </Row>
//       </motion.div>
//     </Container>
//   );
// };

// export default HomePage; -->






// import React from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import { motion } from 'framer-motion';
// import { Sun, Moon, Cloud, Stars } from 'lucide-react';

// const HomePage = () => {
//   const features = [
//     { title: 'Interactive Lessons', description: 'Engage with fun, interactive lessons designed for grades 6-8', icon: '🎓' },
//     { title: 'Progress Tracking', description: 'Monitor your learning journey with easy-to-understand progress reports', icon: '📊' },
//     { title: 'Varied Subjects', description: 'Explore a wide range of subjects from math to science and beyond', icon: '🔬' },
//     { title: 'Rewards System', description: 'Earn badges and rewards as you complete lessons and challenges', icon: '🏅' },
//   ];

//   const subjects = [
//     { name: 'Math', icon: '🔢', color: '#FF6B6B' },
//     { name: 'Science', icon: '🧪', color: '#4ECDC4' },
//     { name: 'English', icon: '📚', color: '#45B7D1' },
//     { name: 'History', icon: '🏛', color: '#FFA07A' },
//     { name: 'Geography', icon: '🌍', color: '#98D8C8' },
//     { name: 'Art', icon: '🎨', color: '#FFBE7B' },
//   ];

//   return (
//     <Container fluid className="p-0" style={{ overflow: 'hidden' }}>
//       <motion.div
//         className="position-relative"
//         style={{
//           background: 'linear-gradient(135deg, #6A11CB, #2575FC)',
//           minHeight: '100vh',
//           padding: '4rem 1rem',
//         }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <motion.div
//           className="position-absolute"
//           style={{ top: 20, left: 20, color: 'white' }}
//           animate={{ rotate: 360 }}
//           transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
//         >
//           <Sun size={40} />
//         </motion.div>
//         <motion.div
//           className="position-absolute"
//           style={{ top: 100, right: 50, color: 'white' }}
//           animate={{ y: [0, -20, 0] }}
//           transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
//         >
//           <Cloud size={50} />
//         </motion.div>
//         <motion.div
//           className="position-absolute"
//           style={{ bottom: 50, left: 50, color: 'white' }}
//           animate={{ scale: [1, 1.2, 1] }}
//           transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
//         >
//           <Stars size={30} />
//         </motion.div>

//         <motion.h1 
//           className="text-center mb-4"
//           style={{ color: '#FFFFFF', fontSize: '4rem', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           Welcome to Learning Adventure! 🚀
//         </motion.h1>
//         <motion.p 
//           className="text-center mb-5"
//           style={{ fontSize: '1.4rem', color: '#E0E0E0' }}
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           Embark on an exciting journey of knowledge for students in grades 6-8
//         </motion.p>
//         <Row className="justify-content-center mb-5">
//           <Col md={8}>
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//             >
//               <Card className="border-0 shadow-lg" style={{ borderRadius: '20px', background: 'rgba(255,255,255,0.9)' }}>
//                 <Card.Body className="text-center p-5">
//                   <h2 className="mb-4" style={{ color: '#4A148C' }}>Our Mission</h2>
//                   <p style={{ fontSize: '1.2rem', color: '#333' }}>
//                     At Learning Adventure, we believe in making education fun and accessible. 
//                     Our interactive platform is designed to spark curiosity, foster creativity, 
//                     and build confidence in young learners. Join us on this exciting journey of discovery!
//                   </p>
//                   <motion.div
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <Button 
//                       variant="primary" 
//                       size="lg" 
//                       className="mt-3" 
//                       href="/learn"
//                       style={{ 
//                         background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)', 
//                         border: 'none', 
//                         padding: '0.75rem 2rem',
//                         fontSize: '1.2rem',
//                         fontWeight: 'bold',
//                         boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
//                       }}
//                     >
//                       Start Learning Now!
//                     </Button>
//                   </motion.div>
//                 </Card.Body>
//               </Card>
//             </motion.div>
//           </Col>
//         </Row>

//         <h2 className="text-center mb-4" style={{ color: '#FFFFFF', fontSize: '2.5rem' }}>What We Offer</h2>
//         <Row xs={1} md={2} className="g-4 justify-content-center mb-5">
//           {features.map((feature, index) => (
//             <Col key={index}>
//               <motion.div
//                 whileHover={{ scale: 1.05, rotate: 2 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Card className="h-100 border-0 shadow-lg" style={{ borderRadius: '15px', background: 'rgba(255,255,255,0.9)' }}>
//                   <Card.Body className="text-center p-4">
//                     <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{feature.icon}</div>
//                     <Card.Title style={{ color: '#4A148C', fontSize: '1.4rem', fontWeight: 'bold' }}>{feature.title}</Card.Title>
//                     <Card.Text style={{ color: '#333', fontSize: '1.1rem' }}>{feature.description}</Card.Text>
//                   </Card.Body>
//                 </Card>
//               </motion.div>
//             </Col>
//           ))}
//         </Row>
//         <h2 className="text-center mb-4" style={{ color: '#FFFFFF', fontSize: '2.5rem' }}>Explore Subjects</h2>
//         <Row xs={2} md={3} lg={6} className="g-4 justify-content-center">
//           {subjects.map((subject, index) => (
//             <Col key={index}>
//               <motion.div
//                 whileHover={{ scale: 1.1, rotate: 5 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <Card 
//                   className="border-0 shadow-lg text-center" 
//                   style={{ 
//                     borderRadius: '50%', 
//                     width: '120px', 
//                     height: '120px', 
//                     display: 'flex', 
//                     alignItems: 'center', 
//                     justifyContent: 'center',
//                     background: subject.color
//                   }}
//                 >
//                   <Card.Body>
//                     <div style={{ fontSize: '2.5rem' }}>{subject.icon}</div>
//                     <div style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#FFF' }}>{subject.name}</div>
//                   </Card.Body>
//                 </Card>
//               </motion.div>
//             </Col>
//           ))}
//         </Row>
//       </motion.div>
//     </Container>
//   );
// };

// export default HomePage; -->






// import React from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import { motion } from 'framer-motion';
// import { Sun, Moon, Cloud, Stars } from 'lucide-react';

// const HomePage = () => {
//   const features = [
//     { title: 'Interactive Lessons', description: 'Engage with fun, interactive lessons designed for grades 6-8', icon: '🎓' },
//     { title: 'Progress Tracking', description: 'Monitor your learning journey with easy-to-understand progress reports', icon: '📊' },
//     { title: 'Varied Subjects', description: 'Explore a wide range of subjects from math to science and beyond', icon: '🔬' },
//     { title: 'Rewards System', description: 'Earn badges and rewards as you complete lessons and challenges', icon: '🏅' },
//   ];

//   const subjects = [
//     { name: 'Math', icon: '🔢', color: '#FF6B6B' },
//     { name: 'Science', icon: '🧪', color: '#4ECDC4' },
//     { name: 'English', icon: '📚', color: '#45B7D1' },
//     { name: 'History', icon: '🏛', color: '#FFA07A' },
//     { name: 'Geography', icon: '🌍', color: '#98D8C8' },
//     { name: 'Art', icon: '🎨', color: '#FFBE7B' },
//   ];

//   return (
//     <Container fluid className="p-0" style={{ overflow: 'hidden' }}>
//       <motion.div
//         className="position-relative"
//         style={{
//           background: 'linear-gradient(135deg, #6A11CB, #2575FC)',
//           minHeight: '100vh',
//           padding: '4rem 1rem',
//         }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <motion.div
//           className="position-absolute"
//           style={{ top: 20, left: 20, color: 'white' }}
//           animate={{ rotate: 360 }}
//           transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
//         >
//           <Sun size={40} />
//         </motion.div>
//         <motion.div
//           className="position-absolute"
//           style={{ top: 100, right: 50, color: 'white' }}
//           animate={{ y: [0, -20, 0] }}
//           transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
//         >
//           <Cloud size={50} />
//         </motion.div>
//         <motion.div
//           className="position-absolute"
//           style={{ bottom: 50, left: 50, color: 'white' }}
//           animate={{ scale: [1, 1.2, 1] }}
//           transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
//         >
//           <Stars size={30} />
//         </motion.div>

//         <motion.h1 
//           className="text-center mb-4"
//           style={{ color: '#FFFFFF', fontSize: '4rem', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           Welcome to Learning Adventure! 🚀
//         </motion.h1>
//         <motion.p 
//           className="text-center mb-5"
//           style={{ fontSize: '1.4rem', color: '#E0E0E0' }}
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           Embark on an exciting journey of knowledge for students in grades 6-8
//         </motion.p>
//         <Row className="justify-content-center mb-5">
//           <Col md={8}>
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//             >
//               <Card className="border-0 shadow-lg" style={{ borderRadius: '20px', background: 'rgba(255,255,255,0.9)' }}>
//                 <Card.Body className="text-center p-5">
//                   <h2 className="mb-4" style={{ color: '#4A148C' }}>Our Mission</h2>
//                   <p style={{ fontSize: '1.2rem', color: '#333' }}>
//                     At Learning Adventure, we believe in making education fun and accessible. 
//                     Our interactive platform is designed to spark curiosity, foster creativity, 
//                     and build confidence in young learners. Join us on this exciting journey of discovery!
//                   </p>
//                   <motion.div
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <Button 
//                       variant="primary" 
//                       size="lg" 
//                       className="mt-3" 
//                       href="/learn"
//                       style={{ 
//                         background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)', 
//                         border: 'none', 
//                         padding: '0.75rem 2rem',
//                         fontSize: '1.2rem',
//                         fontWeight: 'bold',
//                         boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
//                       }}
//                     >
//                       Start Learning Now!
//                     </Button>
//                   </motion.div>
//                 </Card.Body>
//               </Card>
//             </motion.div>
//           </Col>
//         </Row>

//         <h2 className="text-center mb-4" style={{ color: '#FFFFFF', fontSize: '2.5rem' }}>What We Offer</h2>
//         <Row xs={1} md={2} className="g-4 justify-content-center mb-5">
//           {features.map((feature, index) => (
//             <Col key={index}>
//               <motion.div
//                 whileHover={{ scale: 1.05, rotate: 2 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Card className="h-100 border-0 shadow-lg" style={{ borderRadius: '15px', background: 'rgba(255,255,255,0.9)' }}>
//                   <Card.Body className="text-center p-4">
//                     <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{feature.icon}</div>
//                     <Card.Title style={{ color: '#4A148C', fontSize: '1.4rem', fontWeight: 'bold' }}>{feature.title}</Card.Title>
//                     <Card.Text style={{ color: '#333', fontSize: '1.1rem' }}>{feature.description}</Card.Text>
//                   </Card.Body>
//                 </Card>
//               </motion.div>
//             </Col>
//           ))}
//         </Row>
//         <h2 className="text-center mb-4" style={{ color: '#FFFFFF', fontSize: '2.5rem' }}>Explore Subjects</h2>
//         <Row xs={2} md={3} lg={6} className="g-4 justify-content-center">
//           {subjects.map((subject, index) => (
//             <Col key={index}>
//               <motion.div
//                 whileHover={{ scale: 1.1, rotate: 5 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <Card 
//                   className="border-0 shadow-lg text-center" 
//                   style={{ 
//                     borderRadius: '50%', 
//                     width: '120px', 
//                     height: '120px', 
//                     display: 'flex', 
//                     alignItems: 'center', 
//                     justifyContent: 'center',
//                     background: subject.color
//                   }}
//                 >
//                   <Card.Body>
//                     <div style={{ fontSize: '2.5rem' }}>{subject.icon}</div>
//                     <div style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#FFF' }}>{subject.name}</div>
//                   </Card.Body>
//                 </Card>
//               </motion.div>
//             </Col>
//           ))}
//         </Row>
//       </motion.div>
//     </Container>
//   );
// };

// export default HomePage; -->






// import React from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import { motion } from 'framer-motion';
// import { Sun, Moon, Cloud, Stars } from 'lucide-react';

// const HomePage = () => {
//   const features = [
//     { title: 'Interactive Lessons', description: 'Engage with fun, interactive lessons designed for grades 6-8', icon: '🎓' },
//     { title: 'Progress Tracking', description: 'Monitor your learning journey with easy-to-understand progress reports', icon: '📊' },
//     { title: 'Varied Subjects', description: 'Explore a wide range of subjects from math to science and beyond', icon: '🔬' },
//     { title: 'Rewards System', description: 'Earn badges and rewards as you complete lessons and challenges', icon: '🏅' },
//   ];

//   const subjects = [
//     { name: 'Math', icon: '🔢', color: '#FF6B6B' },
//     { name: 'Science', icon: '🧪', color: '#4ECDC4' },
//     { name: 'English', icon: '📚', color: '#45B7D1' },
//     { name: 'History', icon: '🏛', color: '#FFA07A' },
//     { name: 'Geography', icon: '🌍', color: '#98D8C8' },
//     { name: 'Art', icon: '🎨', color: '#FFBE7B' },
//   ];

//   return (
//     <Container fluid className="p-0" style={{ overflow: 'hidden' }}>
//       <motion.div
//         className="position-relative"
//         style={{
//           background: 'linear-gradient(135deg, #6A11CB, #2575FC)',
//           minHeight: '100vh',
//           padding: '4rem 1rem',
//         }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <motion.div
//           className="position-absolute"
//           style={{ top: 20, left: 20, color: 'white' }}
//           animate={{ rotate: 360 }}
//           transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
//         >
//           <Sun size={40} />
//         </motion.div>
//         <motion.div
//           className="position-absolute"
//           style={{ top: 100, right: 50, color: 'white' }}
//           animate={{ y: [0, -20, 0] }}
//           transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
//         >
//           <Cloud size={50} />
//         </motion.div>
//         <motion.div
//           className="position-absolute"
//           style={{ bottom: 50, left: 50, color: 'white' }}
//           animate={{ scale: [1, 1.2, 1] }}
//           transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
//         >
//           <Stars size={30} />
//         </motion.div>

//         <motion.h1 
//           className="text-center mb-4"
//           style={{ color: '#FFFFFF', fontSize: '4rem', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           Welcome to Learning Adventure! 🚀
//         </motion.h1>
//         <motion.p 
//           className="text-center mb-5"
//           style={{ fontSize: '1.4rem', color: '#E0E0E0' }}
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           Embark on an exciting journey of knowledge for students in grades 6-8
//         </motion.p>
//         <Row className="justify-content-center mb-5">
//           <Col md={8}>
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//             >
//               <Card className="border-0 shadow-lg" style={{ borderRadius: '20px', background: 'rgba(255,255,255,0.9)' }}>
//                 <Card.Body className="text-center p-5">
//                   <h2 className="mb-4" style={{ color: '#4A148C' }}>Our Mission</h2>
//                   <p style={{ fontSize: '1.2rem', color: '#333' }}>
//                     At Learning Adventure, we believe in making education fun and accessible. 
//                     Our interactive platform is designed to spark curiosity, foster creativity, 
//                     and build confidence in young learners. Join us on this exciting journey of discovery!
//                   </p>
//                   <motion.div
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <Button 
//                       variant="primary" 
//                       size="lg" 
//                       className="mt-3" 
//                       href="/learn"
//                       style={{ 
//                         background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)', 
//                         border: 'none', 
//                         padding: '0.75rem 2rem',
//                         fontSize: '1.2rem',
//                         fontWeight: 'bold',
//                         boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
//                       }}
//                     >
//                       Start Learning Now!
//                     </Button>
//                   </motion.div>
//                 </Card.Body>
//               </Card>
//             </motion.div>
//           </Col>
//         </Row>

//         <h2 className="text-center mb-4" style={{ color: '#FFFFFF', fontSize: '2.5rem' }}>What We Offer</h2>
//         <Row xs={1} md={2} className="g-4 justify-content-center mb-5">
//           {features.map((feature, index) => (
//             <Col key={index}>
//               <motion.div
//                 whileHover={{ scale: 1.05, rotate: 2 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Card className="h-100 border-0 shadow-lg" style={{ borderRadius: '15px', background: 'rgba(255,255,255,0.9)' }}>
//                   <Card.Body className="text-center p-4">
//                     <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{feature.icon}</div>
//                     <Card.Title style={{ color: '#4A148C', fontSize: '1.4rem', fontWeight: 'bold' }}>{feature.title}</Card.Title>
//                     <Card.Text style={{ color: '#333', fontSize: '1.1rem' }}>{feature.description}</Card.Text>
//                   </Card.Body>
//                 </Card>
//               </motion.div>
//             </Col>
//           ))}
//         </Row>
//         <h2 className="text-center mb-4" style={{ color: '#FFFFFF', fontSize: '2.5rem' }}>Explore Subjects</h2>
//         <Row xs={2} md={3} lg={6} className="g-4 justify-content-center">
//           {subjects.map((subject, index) => (
//             <Col key={index}>
//               <motion.div
//                 whileHover={{ scale: 1.1, rotate: 5 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <Card 
//                   className="border-0 shadow-lg text-center" 
//                   style={{ 
//                     borderRadius: '50%', 
//                     width: '120px', 
//                     height: '120px', 
//                     display: 'flex', 
//                     alignItems: 'center', 
//                     justifyContent: 'center',
//                     background: subject.color
//                   }}
//                 >
//                   <Card.Body>
//                     <div style={{ fontSize: '2.5rem' }}>{subject.icon}</div>
//                     <div style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#FFF' }}>{subject.name}</div>
//                   </Card.Body>
//                 </Card>
//               </motion.div>
//             </Col>
//           ))}
//         </Row>
//       </motion.div>
//     </Container>
//   );
// };

// export default HomePage; -->