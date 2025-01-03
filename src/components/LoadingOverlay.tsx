import React from 'react';
import { motion } from 'framer-motion';
import { CircularProgress, Box, Typography } from '@mui/material';

export function LoadingOverlay() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <Box className="bg-white p-8 rounded-lg shadow-xl text-center">
        <CircularProgress size={60} className="text-orange-600" />
        <Typography variant="h6" className="mt-4 text-gray-800">
          در حال تحلیل نتایج...
        </Typography>
        <Typography variant="body2" className="mt-2 text-gray-600">
          لطفاً صبر کنید
        </Typography>
      </Box>
    </motion.div>
  );
}