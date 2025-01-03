import React, { useState } from 'react';
import { 
  TextField, 
  Button, 
  MenuItem, 
  Grid, 
  Paper,
  Typography,
  Alert,
  Box
} from '@mui/material';
import { Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { submitTestAnalysis } from '../utils/api';
import { LoadingOverlay } from './LoadingOverlay';
import { ResultDisplay } from './ResultDisplay';
import { TestResult } from '../types';
import { hormoneTests } from '../data/hormoneTests';
import { TestCategoryInput } from './TestCategoryInput';

export function TestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [testResults, setTestResults] = useState<TestResult[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setResult(null);

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        animalType: formData.get('animalType') as string,
        age: Number(formData.get('age')),
        weight: Number(formData.get('weight')),
        gender: formData.get('gender') as string,
        symptoms: formData.get('symptoms') as string,
        testResults: testResults.filter(test => test.value !== ''),
      };

      const response = await submitTestAnalysis(data);
      setResult(response.result);
    } catch (err) {
      setError('خطا در ارسال اطلاعات. لطفا دوباره تلاش کنید.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTestUpdate = (name: string, value: string, unit: string) => {
    setTestResults(prev => {
      const existing = prev.findIndex(t => t.name === name);
      if (existing >= 0) {
        const newResults = [...prev];
        newResults[existing] = { name, value, unit };
        return newResults;
      }
      return [...prev, { name, value, unit }];
    });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Paper elevation={3} className="p-6">
          <form onSubmit={handleSubmit} dir="rtl">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  label="نوع حیوان"
                  name="animalType"
                  required
                  fullWidth
                >
                  <MenuItem value="dog">سگ</MenuItem>
                  <MenuItem value="cat">گربه</MenuItem>
                  <MenuItem value="horse">اسب</MenuItem>
                  <MenuItem value="other">سایر</MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="سن (ماه)"
                  name="age"
                  type="number"
                  required
                  fullWidth
                  InputProps={{ inputProps: { min: 0 } }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="وزن (کیلوگرم)"
                  name="weight"
                  type="number"
                  required
                  fullWidth
                  InputProps={{ inputProps: { min: 0, step: "0.1" } }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  label="جنسیت"
                  name="gender"
                  required
                  fullWidth
                >
                  <MenuItem value="male">نر</MenuItem>
                  <MenuItem value="female">ماده</MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="علائم بالینی"
                  name="symptoms"
                  multiline
                  rows={3}
                  required
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6" className="mb-4">
                  نتایج آزمایش‌ها
                </Typography>
                <Box className="space-y-4">
                  {hormoneTests.map((category) => (
                    <TestCategoryInput
                      key={category.title}
                      category={category}
                      testResults={testResults}
                      onTestUpdate={handleTestUpdate}
                    />
                  ))}
                </Box>
              </Grid>

              {error && (
                <Grid item xs={12}>
                  <Alert severity="error">{error}</Alert>
                </Grid>
              )}

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                  fullWidth
                  size="large"
                  className="bg-orange-600 hover:bg-orange-700"
                  startIcon={<Send className="ml-2" />}
                >
                  {isSubmitting ? 'در حال ارسال...' : 'ارسال برای تحلیل'}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </motion.div>

      <AnimatePresence>
        {isSubmitting && <LoadingOverlay />}
      </AnimatePresence>

      {result && <ResultDisplay result={result} />}
    </>
  );
}