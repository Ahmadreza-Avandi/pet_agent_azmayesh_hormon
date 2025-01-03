import React from 'react';
import { TextField, MenuItem, Grid, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import { TestResult } from '../types';
import { Info } from 'lucide-react';

interface TestInputProps {
  test: TestResult;
  description: string;
  onChange: (value: string) => void;
  onUnitChange: (unit: string) => void;
}

export function TestInput({ test, description, onChange, onUnitChange }: TestInputProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={4} className="flex items-center">
          <span className="text-gray-700">{test.name}</span>
          <Tooltip title={description} arrow placement="top">
            <Info className="w-4 h-4 text-gray-400 mr-2 cursor-help" />
          </Tooltip>
        </Grid>
        <Grid item xs={8} md={5}>
          <TextField
            type="number"
            value={test.value}
            onChange={(e) => onChange(e.target.value)}
            fullWidth
            variant="outlined"
            size="small"
            InputProps={{
              inputProps: { step: "0.01" }
            }}
          />
        </Grid>
        <Grid item xs={4} md={3}>
          <TextField
            select
            value={test.unit}
            onChange={(e) => onUnitChange(e.target.value)}
            fullWidth
            variant="outlined"
            size="small"
          >
            <MenuItem value="ng/ml">ng/ml</MenuItem>
            <MenuItem value="pg/ml">pg/ml</MenuItem>
            <MenuItem value="μg/dl">μg/dl</MenuItem>
            <MenuItem value="mIU/L">mIU/L</MenuItem>
            <MenuItem value="ng/dl">ng/dl</MenuItem>
            <MenuItem value="μIU/ml">μIU/ml</MenuItem>
          </TextField>
        </Grid>
      </Grid>
    </motion.div>
  );
}