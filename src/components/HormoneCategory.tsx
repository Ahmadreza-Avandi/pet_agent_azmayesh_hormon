import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Test {
  name: string;
  description: string;
}

interface HormoneCategoryProps {
  title: string;
  tests: Test[];
  isOpen: boolean;
  onToggle: () => void;
}

export function HormoneCategory({ title, tests, isOpen, onToggle }: HormoneCategoryProps) {
  return (
    <div className="mb-4 border rounded-lg bg-white shadow-sm">
      <button
        onClick={onToggle}
        className="w-full px-4 py-3 flex items-center justify-between text-left bg-orange-50 hover:bg-orange-100 rounded-t-lg transition-colors"
      >
        <h3 className="text-lg font-semibold text-orange-800">{title}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-orange-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-orange-600" />
        )}
      </button>
      {isOpen && (
        <div className="p-4">
          {tests.map((test, index) => (
            <div key={index} className="mb-3 last:mb-0">
              <h4 className="font-medium text-gray-800">{test.name}</h4>
              <p className="text-gray-600 text-sm mt-1">{test.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}