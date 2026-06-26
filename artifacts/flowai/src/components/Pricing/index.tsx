import React, { useState, useMemo, useCallback } from 'react';
import { Currency, BillingCycle, CURRENCY_SYMBOLS, PRICING, getPrice } from '../../data/pricing';
import { Button } from '../UI/Button';
import { GlowCard } from '../UI/GlowCard';

interface PricingCardProps {
  name: string;
  price: number;
  currency: Currency;
  billingCycle: BillingCycle;
  popular?: boolean;
  features: string[];
  description: string;
}

const PricingCard = React.memo(({ name, price, currency, billingCycle, popular, features, description }: PricingCardProps) => {
  const symbol = CURRENCY_SYMBOLS[currency];
  
  const CardContent = (
    <GlowCard 
      glowColor={popular ? 'blue' : 'purple'} 
      className={`p-8 flex flex-col h-full bg-[#0a0f25]/40 border-white/[0.08] ${popular ? 'z-10' : ''}`}
    >
      {popular && (
        <div className="absolute top-0 right-8 transform -translate-y-1/2">
          <div className="bg-gradient-to-r from-blue-500 to-violet-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            Most Popular
          </div>
        </div>
      )}
      
      <h3 className="text-xl font-medium text-white mb-2">{name}</h3>
      <p className="text-sm text-gray-400 mb-6 min-h-[40px]">{description}</p>
      
      <div className="mb-6">
        <span className="text-4xl font-bold text-white">{symbol}{price}</span>
        <span className="text-gray-400 ml-2">/mo</span>
        {billingCycle === 'annual' && (
          <div className="text-xs text-emerald-400 mt-2 font-medium">
            {symbol}{Math.floor(price * 12)} / year · 20% off
          </div>
        )}
      </div>
      
      <div className="flex-1">
        <ul className="space-y-4 mb-8 text-sm text-gray-300">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <Button 
        variant={popular ? 'primary' : 'outline'} 
        className="w-full"
      >
        {name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
      </Button>
      {name === 'Enterprise' && (
        <div className="mt-4 text-center">
          <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">Talk to Sales →</a>
        </div>
      )}
    </GlowCard>
  );

  if (popular) {
    return (
      <div className="relative p-[1px] rounded-[25px] bg-gradient-to-b from-blue-500 via-violet-500 to-blue-500/0 h-full scale-105">
        <div className="h-full rounded-[24px] overflow-hidden bg-[#050818]">
          {CardContent}
        </div>
      </div>
    );
  }

  return CardContent;
});

PricingCard.displayName = 'PricingCard';

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('annual');
  const [currency, setCurrency] = useState<Currency>('USD');

  const handleToggle = useCallback(() => {
    setBillingCycle(prev => prev === 'monthly' ? 'annual' : 'monthly');
  }, []);

  const handleCurrencyChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(e.target.value as Currency);
  }, []);

  const starterPrice = useMemo(() => getPrice(currency, 'starter', billingCycle), [currency, billingCycle]);
  const proPrice = useMemo(() => getPrice(currency, 'professional', billingCycle), [currency, billingCycle]);
  const entPrice = useMemo(() => getPrice(currency, 'enterprise', billingCycle), [currency, billingCycle]);

  return (
    <section id="pricing" className="py-20 md:py-28 relative bg-[#050818] border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">Pricing</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Simple, transparent pricing.
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Start for free, then scale as your workflows grow. No hidden fees.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Billing Toggle */}
            <div className="flex items-center gap-3 bg-white/5 p-1 rounded-full border border-white/10">
              <button 
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all ${
                  billingCycle === 'monthly' ? 'bg-white text-black shadow-sm' : 'text-gray-400 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setBillingCycle('annual')}
                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all flex items-center gap-2 ${
                  billingCycle === 'annual' ? 'bg-white text-black shadow-sm' : 'text-gray-400 hover:text-white'
                }`}
              >
                Annual <span className="bg-emerald-500/20 text-emerald-500 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">Save 20%</span>
              </button>
            </div>

            {/* Currency Selector */}
            <select 
              value={currency} 
              onChange={handleCurrencyChange}
              className="bg-white/5 border border-white/10 text-white text-sm rounded-full px-4 py-2 outline-none focus:border-blue-500 transition-colors cursor-pointer appearance-none pr-8 relative"
              style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%239CA3AF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px top 50%', backgroundSize: '10px auto' }}
            >
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="INR">INR (₹)</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          <PricingCard 
            name="Starter"
            price={starterPrice}
            currency={currency}
            billingCycle={billingCycle}
            description="Perfect for small teams getting started"
            features={[
              '5 Active workflows',
              '1,000 runs per month',
              '3 basic integrations',
              'Standard email support',
              '7-day activity history'
            ]}
          />
          <PricingCard 
            name="Professional"
            price={proPrice}
            currency={currency}
            billingCycle={billingCycle}
            popular={true}
            description="The complete platform for growing businesses"
            features={[
              'Unlimited workflows',
              '50,000 runs per month',
              '50+ premium integrations',
              'Priority support response',
              'Advanced analytics dashboard',
              'Smart Document Processing'
            ]}
          />
          <PricingCard 
            name="Enterprise"
            price={entPrice}
            currency={currency}
            billingCycle={billingCycle}
            description="Custom scale for mission-critical workflows"
            features={[
              'Unlimited everything',
              'Custom integrations',
              'Dedicated Success Manager',
              '99.99% Uptime SLA',
              'SOC 2 Type II compliance',
              'SSO & Advanced RBAC',
              'Predictive AI Insights'
            ]}
          />
        </div>

      </div>
    </section>
  );
}
