import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import motion.div
const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });

function AboutPage() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ padding: '20px', textAlign: 'center' }}
    >
      <h1>About Me</h1>
      <p>Welcome to my blog! Here you'll find articles on various topics that interest me.</p>
      <p>Stay tuned for more updates!</p>
    </MotionDiv>
  );
}

export default AboutPage;
