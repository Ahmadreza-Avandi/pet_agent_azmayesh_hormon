import { TestCategory } from '../types';

export const hormoneTests: TestCategory[] = [
  {
    title: 'هورمون‌های تیروئید',
    tests: [
      { name: 'T4', defaultUnit: 'ng/ml', description: 'رایج‌ترین آزمایش برای عملکرد تیروئید' },
      { name: 'Free T4', defaultUnit: 'pg/ml', description: 'تشخیص دقیق‌تر کم‌کاری یا پرکاری تیروئید' },
      { name: 'TSH', defaultUnit: 'mIU/L', description: 'بررسی کم‌کاری تیروئید' },
    ],
  },
  {
    title: 'هورمون‌های استرس',
    tests: [
      { name: 'Cortisol', defaultUnit: 'μg/dl', description: 'تشخیص سندروم کوشینگ یا بیماری آدیسون' },
      { name: 'ACTH', defaultUnit: 'pg/ml', description: 'تست تحریک ACTH و مشکلات غدد فوق کلیوی' },
      { name: 'Aldosterone', defaultUnit: 'ng/dl', description: 'بررسی اختلالات الکترولیتی' },
    ],
  },
  {
    title: 'هورمون‌های تولیدمثلی',
    tests: [
      { name: 'Progesterone', defaultUnit: 'ng/ml', description: 'پایش چرخه تولیدمثل' },
      { name: 'Testosterone', defaultUnit: 'ng/dl', description: 'بررسی مشکلات هورمون‌های جنسی' },
      { name: 'Estrogen', defaultUnit: 'pg/ml', description: 'بررسی چرخه تولیدمثل' },
      { name: 'LH', defaultUnit: 'mIU/ml', description: 'تعیین وضعیت تولیدمثلی' },
    ],
  },
  {
    title: 'هورمون‌های رشد و متابولیسم',
    tests: [
      { name: 'Insulin', defaultUnit: 'μIU/ml', description: 'بررسی دیابت' },
      { name: 'IGF-1', defaultUnit: 'ng/ml', description: 'تشخیص آکرومگالی' },
    ],
  },
  {
    title: 'سایر هورمون‌ها',
    tests: [
      { name: 'PTH', defaultUnit: 'pg/ml', description: 'بررسی مشکلات غدد پاراتیروئید' },
      { name: 'Leptin', defaultUnit: 'ng/ml', description: 'مطالعات تغذیه و چاقی' },
    ],
  },
];