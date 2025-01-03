import React from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ChevronDown } from 'lucide-react';
import { TestInput } from './TestInput';
import { TestCategory, TestResult } from '../types';

interface TestCategoryInputProps {
  category: TestCategory;
  testResults: TestResult[];
  onTestUpdate: (name: string, value: string, unit: string) => void;
}

export function TestCategoryInput({ category, testResults, onTestUpdate }: TestCategoryInputProps) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ChevronDown />}
        className="bg-orange-50 hover:bg-orange-100"
      >
        <Typography className="font-semibold text-orange-800">{category.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="space-y-4">
          {category.tests.map((test) => {
            const existingResult = testResults.find(r => r.name === test.name);
            return (
              <TestInput
                key={test.name}
                test={{
                  name: test.name,
                  value: existingResult?.value || '',
                  unit: existingResult?.unit || test.defaultUnit
                }}
                description={test.description}
                onChange={(value) => onTestUpdate(test.name, value, existingResult?.unit || test.defaultUnit)}
                onUnitChange={(unit) => onTestUpdate(test.name, existingResult?.value || '', unit)}
              />
            );
          })}
        </div>
      </AccordionDetails>
    </Accordion>
  );
}