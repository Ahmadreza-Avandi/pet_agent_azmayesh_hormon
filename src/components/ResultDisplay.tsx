import React from 'react';
import { motion } from 'framer-motion';
import { Paper, Typography } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';

interface ResultDisplayProps {
  result: string;
}

export function ResultDisplay({ result }: ResultDisplayProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Paper elevation={3} className="p-6 mt-8 bg-white rounded-lg">
        <Typography variant="h6" className="mb-4 text-gray-900">
          نتیجه تحلیل
        </Typography>
        <div className="prose prose-sm max-w-none">
          <TypeAnimation
            sequence={[result]}
            wrapper="div"
            speed={70}
            style={{ whiteSpace: 'pre-line' }}
            repeat={0}
          />
        </div>
      </Paper>
    </motion.div>
  );
}