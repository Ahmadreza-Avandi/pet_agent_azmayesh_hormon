import React from 'react';
import { Beaker } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center">
          <Beaker className="h-8 w-8 text-orange-600" />
          <h1 className="mr-3 text-2xl font-bold text-gray-900">
            آزمایش‌های هورمونی در دامپزشکی
          </h1>
        </div>
        <p className="mt-2 text-gray-600">
          اطلاعات کامل در مورد آزمایش‌های هورمونی ضروری برای حیوانات مختلف در دامپزشکی
        </p>
      </div>
    </header>
  );
}