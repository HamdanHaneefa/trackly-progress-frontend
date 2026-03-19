import { useState, useEffect } from 'react';
import { Star, Zap, PenLine, Target, ChevronDown, BarChart2, Lock, Calendar, Repeat } from 'lucide-react';

function useCountdown(targetSeconds: number) {
  const [timeLeft, setTimeLeft] = useState(targetSeconds);
  useEffect(() => {
    const interval = setInterval(() => setTimeLeft((p) => (p > 0 ? p - 1 : 0)), 1000);
    return () => clearInterval(interval);
  }, []);
  const h = Math.floor(timeLeft / 3600);
  const m = Math.floor((timeLeft % 3600) / 60);
  const s = timeLeft % 60;
  return { h, m, s };
}

const images = [
  { src: '/image.png', bg: '', label: '' },
  { src: '', bg: 'from-emerald-800 to-emerald-950', label: '14 Habit Tabs' },
  { src: '', bg: 'from-slate-700 to-slate-900', label: 'Sleep Tracker' },
  { src: '', bg: 'from-teal-700 to-teal-950', label: 'Progress Charts' },
];

const faqs = [
  { q: 'How do I access the tracker after purchase?', a: "You'll receive an instant digital download link by email. Simply open it, make a copy in Google Sheets, and you're ready to start — no waiting." },
  { q: 'Do I need any special software?', a: 'No. Trackly works entirely in Google Sheets, which is free. All you need is a Google account.' },
  { q: 'Can I use this on my phone?', a: 'Yes — the tracker is fully optimised for the Google Sheets mobile app. Track your habits anywhere, anytime.' },
  { q: 'Will I get future updates?', a: "Absolutely. You get lifetime access to every future update at no extra cost." },
];

const testimonials = [
  { name: 'Priya S.', role: 'Fitness Coach', rating: 5, text: 'I just wanted a clear system that shows me what I\'m doing and how I\'m tracking. This does exactly that — nothing more, nothing less.' },
  { name: 'Arjun M.', role: 'Software Engineer', rating: 5, text: "I've stuck with this longer than any app I've tried because it doesn't overwhelm me or guilt me for missing a day." },
  { name: 'Neha R.', role: 'Student', rating: 5, text: 'Best purchase I\'ve made in a while. Makes tracking my week so much simpler and actually enjoyable.' },
];

const features = [
  { Icon: BarChart2, title: 'Clear Progress Tracking', desc: 'See your habits laid out visually so you always know how you\'re doing at a glance.' },
  { Icon: Calendar, title: 'Focused Daily Structure', desc: 'A clean daily layout helps you stay intentional without feeling overwhelmed.' },
  { Icon: Lock, title: 'Lifetime Access', desc: 'One purchase gives you ongoing access — no subscriptions, no renewals.' },
  { Icon: Repeat, title: 'Built for Real Life', desc: 'Flexible, customisable, and pressure-free so it fits your routine, not the other way around.' },
];

const stats = [
  { pct: '94%', text: 'of users say tracking their habits helped them stay more consistent week to week.' },
  { pct: '90%', text: 'noticed a significant improvement in their daily focus and productivity.' },
  { pct: '96%', text: 'would recommend Trackly to a friend or family member.' },
];

// Placeholder video embed — replace src with your YouTube/Vimeo embed URL
const VIDEO_URL = 'https://kbheyllkkutfelfahryf.supabase.co/storage/v1/object/public/Videos/product-1-video.mp4';

export default function ProductDetail() {
  const [active, setActive] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { h, m, s } = useCountdown(8 * 3600 + 22 * 60 + 52);
  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div className="min-h-screen bg-white">

      {/* ── Countdown Banner ── */}
      <div className="bg-gray-900 text-white py-2.5 px-4 text-center">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <span className="text-xs font-semibold tracking-widest uppercase text-gray-300">Free Sale Ends In</span>
          <div className="flex items-center gap-1">
            {[{ val: h, label: 'HRS' }, { val: m, label: 'MIN' }, { val: s, label: 'SEC' }].map(({ val, label }, i) => (
              <span key={label} className="flex items-center gap-1">
                {i > 0 && <span className="text-base font-bold mx-0.5 opacity-60">:</span>}
                <span className="flex flex-col items-center min-w-[2rem]">
                  <span className="text-base font-bold tabular-nums leading-none">{pad(val)}</span>
                  <span className="text-[9px] text-gray-400 uppercase leading-none mt-0.5">{label}</span>
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Hero: Image + Buy Box ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-8">

        {/* Mobile title above image */}
        <div className="lg:hidden mb-5">
          <h1 className="text-[22px] font-bold text-gray-900 leading-snug mb-2">
            Habit Tracker for Excel &amp; Google Sheets
          </h1>
          <div className="flex items-center gap-1 mb-2">
            {[1,2,3,4,5].map((n) => <Star key={n} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
            <span className="text-gray-500 text-xs ml-1">(286 Reviews)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900">Rs. 0.00 INR</span>
            <span className="text-sm text-gray-400 line-through">Rs. 2,900.00 INR</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Image Gallery */}
          <div className="lg:sticky lg:top-20">
            <div className="relative rounded-2xl overflow-hidden bg-gray-900 w-full" style={{ aspectRatio: '4/3' }}>
              {images[active].src ? (
                <img src={images[active].src} alt="Habit Tracker" className="w-full h-full object-cover" />
              ) : (
                <div className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br ${images[active].bg}`}>
                  <span className="text-white text-lg font-bold text-center px-6">{images[active].label}</span>
                  <span className="text-gray-400 text-xs mt-1">Preview</span>
                </div>
              )}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, i) => (
                  <button key={i} onClick={() => setActive(i)}
                    className={`w-2 h-2 rounded-full transition-all ${i === active ? 'bg-white scale-110' : 'bg-white/40'}`}
                    aria-label={`Image ${i + 1}`} />
                ))}
              </div>
            </div>
            <div className="flex gap-2 mt-3">
              {images.map((img, i) => (
                <button key={i} onClick={() => setActive(i)}
                  className={`flex-1 rounded-xl overflow-hidden border-2 transition-colors ${i === active ? 'border-gray-900' : 'border-gray-200'}`}
                  style={{ aspectRatio: '1' }}>
                  {img.src
                    ? <img src={img.src} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
                    : <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${img.bg}`}>
                        <span className="text-white text-[9px] font-semibold text-center px-1 leading-tight">{img.label}</span>
                      </div>
                  }
                </button>
              ))}
            </div>
          </div>

          {/* Buy Box */}
          <div>
            {/* Desktop title */}
            <div className="hidden lg:block mb-5">
              <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-3">
                Habit Tracker for Excel &amp; Google Sheets
              </h1>
              <div className="flex items-center gap-1.5 mb-3">
                {[1,2,3,4,5].map((n) => <Star key={n} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}
                <span className="text-gray-500 text-sm ml-1">(286 Reviews)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-gray-900">Rs. 0.00 INR</span>
                <span className="text-base text-gray-400 line-through">Rs. 2,900.00 INR</span>
              </div>
            </div>

            {/* Perks */}
            <ul className="space-y-2.5 mb-5">
              {[
                { Icon: Zap, color: 'text-orange-500', text: 'Instant delivery by email' },
                { Icon: PenLine, color: 'text-blue-500', text: 'Track habits with clarity' },
                { Icon: Target, color: 'text-red-500', text: 'Build discipline that lasts' },
              ].map(({ Icon, color, text }) => (
                <li key={text} className="flex items-center gap-2.5 text-sm text-gray-700">
                  <Icon className={`h-4 w-4 flex-shrink-0 ${color}`} />
                  {text}
                </li>
              ))}
            </ul>

            {/* Divider label */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-[11px] text-gray-400 font-medium whitespace-nowrap">Consistency has NEVER been easier</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Quantity box */}
            <div className="border-2 border-gray-900 rounded-xl p-4 mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full border-2 border-gray-900 flex items-center justify-center flex-shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-900" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Buy 1</p>
                  <p className="text-xs text-gray-500">You save Rs. 2,900.00</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-900">Rs. 0.00</p>
                <p className="text-xs text-gray-400 line-through">Rs. 2,900.00</p>
              </div>
            </div>

            {/* CTA sticky on mobile */}
            <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-white border-t border-gray-100 shadow-lg lg:static lg:p-0 lg:border-0 lg:shadow-none lg:bg-transparent">
              <a
                href="https://store.elamai.in/buy?s=1&qty%5Bw9Ko3%5D=1&cart_links%5B%5D=w9Ko3"
                className="block w-full py-4 bg-gray-900 text-white font-bold text-base rounded-xl hover:bg-gray-800 active:scale-[0.98] transition-all tracking-wide text-center"
              >
                Redeem Now
              </a>
            </div>
            <div className="h-20 lg:hidden" />

            {/* Inline review snippet */}
            <div className="mt-2 bg-gray-50 rounded-xl p-4 border border-gray-100">
              <p className="text-sm text-gray-600 italic leading-relaxed mb-2">
                "This tracker made my habits feel simple. Everything is laid out clearly — staying consistent actually feels rewarding."
              </p>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1,2,3,4,5].map((n) => <Star key={n} className="h-3 w-3 fill-yellow-400 text-yellow-400" />)}
                </div>
                <span className="text-xs font-semibold text-gray-700">Jack P.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Features ── */}
      <div className="bg-gray-50 py-14 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-2">Make Progress, One Day at a Time</h2>
          <p className="text-gray-500 text-sm text-center mb-10 max-w-md mx-auto">A system designed to help you build momentum through small, consistent actions.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map(({ Icon, title, desc }) => (
              <div key={title} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm mb-1">{title}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Stats / Backed by Science ── */}
      <div className="bg-gray-900 py-14 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Backed by Science</h2>
            <p className="text-gray-400 text-sm leading-relaxed">Built around proven behaviour and habit principles that actually work in real life.</p>
          </div>
          <div className="space-y-5">
            {stats.map(({ pct, text }) => (
              <div key={pct} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border-4 border-red-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">{pct}</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed pt-1">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Video Section ── */}
      <div className="py-14 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-2">See It in Action</h2>
          <p className="text-gray-500 text-sm text-center mb-8">Watch how Trackly helps you build habits that actually stick.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[VIDEO_URL, VIDEO_URL, VIDEO_URL].map((url, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden shadow-md bg-gray-900 select-none"
                style={{ aspectRatio: '9/16' }}
                onContextMenu={(e) => e.preventDefault()}
              >
                <video
                  src={url}
                  className="w-full h-full object-cover pointer-events-none"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  disablePictureInPicture
                  controlsList="nodownload nofullscreen noremoteplayback"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <div className="bg-gray-50 py-14 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-gray-900 pr-4">{q}</span>
                  <ChevronDown className={`h-4 w-4 text-gray-500 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4">
                    <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Testimonials ── */}
      <div className="py-14 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-1">What People Are Saying</h2>
          <p className="text-gray-500 text-sm text-center mb-10">Join thousands building better habits every day.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {testimonials.map(({ name, role, rating, text }) => (
              <div key={name} className="relative bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                {/* Colored top bar as avatar placeholder */}
                <div className="h-28 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">{name[0]}</span>
                  </div>
                </div>
                {/* Quote badge */}
                <div className="absolute top-20 right-4 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center shadow">
                  <span className="text-white text-base font-black leading-none">"</span>
                </div>
                <div className="p-5 pt-4">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">{text}</p>
                  <p className="text-sm font-bold text-gray-900">{name}</p>
                  <p className="text-xs text-gray-400">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div className="bg-gray-900 py-12 px-4 sm:px-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Ready to start tracking?</h2>
        <p className="text-gray-400 text-sm mb-6">Free today. Yours forever.</p>
        <a
          href="https://store.elamai.in/buy?s=1&qty%5Bw9Ko3%5D=1&cart_links%5B%5D=w9Ko3"
          className="inline-block px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 active:scale-95 transition-all text-sm tracking-wide"
        >
          Redeem Now
        </a>
      </div>

    </div>
  );
}
