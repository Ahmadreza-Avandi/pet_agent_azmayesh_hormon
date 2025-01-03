import { AnimalData, DiagnosisResponse } from '../types';

const PROXY_BASE_URL = 'https://irandvm.ir/proxy';

export async function submitTestAnalysis(data: AnimalData): Promise<DiagnosisResponse> {
  const prompt = `
شما یک دامپزشک متخصص با تجربه بالا در تحلیل آزمایش‌های هورمونی هستید. لطفاً با استفاده از اطلاعات زیر، یک تحلیل دقیق و برنامه درمانی جامع ارائه دهید:

### اطلاعات حیوان:
- سن: ${data.age} ماه
- نوع حیوان: ${data.animalType}
- جنسیت: ${data.gender}
- وزن: ${data.weight} کیلوگرم

### علائم بالینی:
${data.symptoms}

### نتایج آزمایش‌های هورمونی:
${data.testResults.map(test => `- ${test.name}: ${test.value} ${test.unit}`).join('\n')}

### لطفاً موارد زیر را در تحلیل خود ارائه دهید:

1. **تحلیل نتایج آزمایش‌ها:**
   - بررسی هر شاخص نسبت به محدوده نرمال
   - ارتباط نتایج با علائم بالینی
   
2. **تشخیص‌های احتمالی:**
   - حداقل سه بیماری مرتبط با نتایج
   - توضیح ارتباط هر بیماری با نتایج آزمایش‌ها
   
3. **پیشنهادات درمانی:**
   - داروهای پیشنهادی با دوز دقیق
   - برنامه درمانی و پیگیری
   - توصیه‌های تغذیه‌ای و مراقبتی

4. **آزمایش‌های تکمیلی:**
   - پیشنهاد آزمایش‌های اضافی در صورت نیاز
   
لطفاً پاسخ را به صورت ساختاریافته و با جزئیات کامل ارائه دهید.
`.trim();

  try {
    const response = await fetch(
      `${PROXY_BASE_URL}?${new URLSearchParams({
        text: prompt
      }).toString()}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      }
    );

    if (!response.ok) {
      throw new Error(`خطا در دریافت پاسخ: ${response.status}`);
    }

    const responseData = await response.json();

    if (!responseData.results) {
      throw new Error('پاسخی از سرور دریافت نشد');
    }

    return {
      result: responseData.results,
      message: responseData.results,
    };
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : 'خطای ناشناخته در ارتباط با سرور'
    );
  }
}