export type Currency = 'USD' | 'INR' | 'EUR';
export type BillingCycle = 'monthly' | 'annual';

export const CURRENCY_SYMBOLS: Record<Currency, string> = {
  USD: '$', INR: '₹', EUR: '€'
};

export const PRICING: Record<Currency, { starter: number; professional: number; enterprise: number }> = {
  USD: { starter: 29, professional: 79, enterprise: 199 },
  INR: { starter: 1999, professional: 5999, enterprise: 14999 },
  EUR: { starter: 25, professional: 69, enterprise: 179 },
};

export function getPrice(currency: Currency, plan: keyof typeof PRICING['USD'], billing: BillingCycle): number {
  const monthly = PRICING[currency][plan];
  return billing === 'annual' ? Math.floor(monthly * 12 * 0.8) : monthly;
}
