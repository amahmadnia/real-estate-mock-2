// Persian digit conversion
export const toPersianDigits = (num) => {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return num.toString().replace(/\d/g, (digit) => persianDigits[digit]);
};

// Format price with Persian digits and separators
export const formatPrice = (price) => {
  const formatted = price.toLocaleString('fa-IR');
  return toPersianDigits(formatted);
};

// Format number with Persian digits
export const formatNumber = (num) => {
  return toPersianDigits(num.toString());
};
