import { useState, useEffect } from 'react';
import {
  Star, Zap, Target, ChevronDown, CheckCircle,
  Smartphone, RefreshCw, Mail, AlertCircle,
  BarChart2, Brain, Calendar, ShieldCheck, Clock, Users
} from 'lucide-react';

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
  { src: '', bg: 'from-emerald-800 to-emerald-950', label: 'Daily View' },
  { src: '', bg: 'from-slate-700 to-slate-900', label: 'Weekly View' },
  { src: '', bg: 'from-teal-700 to-teal-950', label: 'Monthly View' },
];

const faqs = [
  {
    q: 'How do I access Trackly after purchase?',
    a: "Your access link arrives by email right after checkout. Open it in any browser — no installation, no setup. You're in within seconds.",
  },
  {
    q: 'Do I need to install anything?',
    a: 'Nothing. Trackly is a web app. It runs entirely in your browser on any device.',
  },
  {
    q: 'Can I use this on my phone?',
    a: 'Yes — built for mobile first. Open it in your browser and track your habits from anywhere.',
  },
  {
    q: 'What happens after I buy?',
    a: 'You get immediate access. Every update we release is included — you never pay again.',
  },
];

const testimonials = [
  {
    name: 'Priya S.',
    role: 'Fitness Coach',
    rating: 5,
    text: "I just wanted a clear system that shows me what I'm doing. This does exactly that — nothing more, nothing less.",
  },
  {
    name: 'Arjun M.',
    role: 'Software Engineer',
    rating: 5,
    text: "I've stuck with this longer than any app I've tried. It doesn't overwhelm me or guilt me for missing a day.",
  },
  {
    name: 'Neha R.',
    role: 'Student',
    rating: 5,
    text: "Makes tracking my week so much simpler and actually enjoyable. Best purchase I've made in a while.",
  },
];

const included = [
  { Icon: Brain, label: 'Fully Customisable', desc: 'Set your own habits — no fixed list, no limits' },
  { Icon: Calendar, label: 'Daily View', desc: 'Clean daily layout to check off habits as you go' },
  { Icon: BarChart2, label: 'Weekly View', desc: 'See your full week and spot where you are consistent' },
  { Icon: RefreshCw, label: 'Monthly View', desc: 'Track streaks and patterns across the whole month' },
  { Icon: Target, label: 'Progress Tracking', desc: 'Visual indicators that show your momentum at a glance' },
  { Icon: Smartphone, label: 'Works Everywhere', desc: 'Phone, tablet, desktop — any browser, any time' },
];

const VIDEO_URL =
  'https://kbheyllkkutfelfahryf.supabase.co/storage/v1/object/public/Videos/product-1-video.mp4';

const CHECKOUT_URL =
  'https://store.elamai.in/buy?s=1&qty%5Bw9Ko3%5D=1&cart_links%5B%5D=w9Ko3';

export default function ProductDetail() {
  const [active, setActive] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { h, m, s } = useCountdown(8 * 3600 + 22 * 60 + 52);
  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div className="min-h-screen bg-white">

      {/* ── Urgency Banner ── */}
      <div className="bg-gray-900 text-white py-2.5 px-4 text-center">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Clock className="h-3.5 w-3.5 text-red-400 flex-shrink-0" />
          <span className="text-xs font-semibold tracking-widest uppercase text-gray-300">Sale Ends In</span>
          <div className="flex items-center gap-1">
            {[{ val: h, label: 'HRS' }, { val: m, label: 'MIN' }, { val: s, label: 'SEC' }].map(({ val, label }, i) => (
              <span key={label} className="flex items-center gap-1">
                {i > 0 && <span className="text-sm font-bold mx-0.5 opacity-50">:</span>}
                <span className="flex flex-col items-center min-w-[2rem]">
                  <span className="text-sm font-bold tabular-nums leading-none">{pad(val)}</span>
                  <span className="text-[9px] text-gray-400 uppercase leading-none mt-0.5">{label}</span>
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Hero ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left — Image Gallery */}
          <div className="lg:sticky lg:top-20">
            <div className="relative rounded-2xl overflow-hidden bg-gray-100 w-full" style={{ aspectRatio: '1/1' }}>
              {images[active].src ? (
                <img src={images[active].src} alt="Trackly Habit Tracker" className="w-full h-full object-cover" />
              ) : (
                <div className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br ${images[active].bg}`}>
                  <span className="text-white text-xl font-bold text-center px-6">{images[active].label}</span>
                  <span className="text-white/50 text-xs mt-1 tracking-wide uppercase">Preview</span>
                </div>
              )}
            </div>
            <div className="flex gap-2 mt-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`flex-1 rounded-lg overflow-hidden border-2 transition-all ${i === active ? 'border-gray-900 opacity-100' : 'border-transparent opacity-50 hover:opacity-75'}`}
                  style={{ aspectRatio: '1' }}
                  aria-label={`View ${i + 1}`}
                >
                  {img.src
                    ? <img src={img.src} alt="" className="w-full h-full object-cover" />
                    : <div className={`w-full h-full bg-gradient-to-br ${img.bg} flex items-center justify-center`}>
                        <span className="text-white text-[9px] font-semibold text-center px-1 leading-tight">{img.label}</span>
                      </div>
                  }
                </button>
              ))}
            </div>
          </div>

          {/* Right — Buy Box */}
          <div className="flex flex-col gap-5">

            {/* Title + rating */}
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-1.5">Habit Tracker</p>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-3">
                Trackly — Build habits that actually stick
              </h1>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map((n) => <Star key={n} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <span className="text-sm font-semibold text-gray-900">4.9</span>
                <span className="text-gray-400 text-sm">(286 reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-gray-900">$13.00</span>
              <span className="text-sm text-gray-400 font-medium">USD · One-time</span>
            </div>

            {/* Trust bullets */}
            <ul className="grid grid-cols-1 gap-2">
              {[
                { Icon: Zap, text: 'Instant access — link sent to your email' },
                { Icon: Smartphone, text: 'Works on any device, any browser' },
                { Icon: Target, text: 'Fully customisable — your habits, your way' },
                { Icon: ShieldCheck, text: 'All future updates included' },
              ].map(({ Icon, text }) => (
                <li key={text} className="flex items-center gap-2.5 text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  {text}
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="h-px bg-gray-100" />

            {/* Email notice */}
            <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
              <AlertCircle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-amber-800 leading-relaxed">
                <span className="font-semibold">Enter a valid email at checkout.</span> Your access link is sent there — if it's wrong, you won't receive it.
              </p>
            </div>

            {/* CTA */}
            <a
              href={CHECKOUT_URL}
              className="block w-full py-4 bg-gray-900 text-white font-bold text-base rounded-xl hover:bg-gray-800 active:scale-[0.98] transition-all text-center tracking-wide"
            >
              Get Instant Access — $13.00
            </a>


            {/* Accordions */}
            <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-100">
              {[
                {
                  label: 'What you will get',
                  content: 'A fully customisable habit tracker web app with daily, weekly, and monthly views. Set your own habits, track your own goals, and see your progress clearly — no fixed categories, no limits.',
                },
                {
                  label: 'How do I get access?',
                  content: 'After checkout, your access link is sent to your email. Open it in any browser — no installation, no downloads. Works on phone and desktop.',
                },
              ].map(({ label, content }, i) => (
                <details key={i} className="group">
                  <summary className="flex items-center justify-between px-4 py-3.5 cursor-pointer list-none select-none">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle className="h-4 w-4 text-gray-400 flex-shrink-0" />
                      <span className="text-sm font-semibold text-gray-900">{label}</span>
                    </div>
                    <ChevronDown className="h-4 w-4 text-gray-400 transition-transform group-open:rotate-180 flex-shrink-0" />
                  </summary>
                  <div className="px-4 pb-4 pt-0.5 pl-11">
                    <p className="text-xs text-gray-500 leading-relaxed">{content}</p>
                  </div>
                </details>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ── What is Trackly? ── */}
      <div className="bg-gray-50 py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3">What is Trackly?</p>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight mb-5">
            Most people know what they should do.<br className="hidden sm:block" /> They just don't track it.
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8">
            Trackly is a web app that gives you a clear, simple system to track your habits daily, weekly, and monthly.
            No spreadsheets. No paper. No app to download. Just open it in your browser and start.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            {[
              { Icon: Calendar, title: 'Daily, Weekly & Monthly', desc: 'Three views built in — check off today, review your week, see the full month.' },
              { Icon: Brain, title: 'Completely Your Own', desc: 'You decide the habits. Add anything, remove anything. No fixed template.' },
              { Icon: BarChart2, title: 'See Your Progress', desc: 'Visual tracking that shows you exactly where you are — no guessing.' },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-gray-900 flex items-center justify-center mb-3">
                  <Icon className="h-4 w-4 text-white" />
                </div>
                <p className="font-bold text-gray-900 text-sm mb-1">{title}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Video Section ── */}
      <div className="py-10 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-red-600 text-center mb-2">See It Live</p>
          <h2 className="text-xl sm:text-3xl font-bold text-gray-900 text-center mb-1">Watch it in action</h2>
          <p className="text-gray-500 text-xs text-center mb-6 max-w-xs mx-auto">A quick look at how Trackly works day to day.</p>
          {/* Mobile: 2 columns, compact. Desktop: 3 columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[VIDEO_URL, VIDEO_URL, VIDEO_URL].map((url, i) => (
              <div
                key={i}
                className={`rounded-xl overflow-hidden bg-gray-900 select-none ${i === 2 ? 'hidden sm:block' : ''}`}
                style={{ aspectRatio: '9/14' }}
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

      {/* ── What's Inside ── */}
      <div className="bg-gray-50 py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-red-600 text-center mb-3">What's Inside</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-2">Built around how you actually live</h2>
          <p className="text-gray-500 text-sm text-center mb-10 max-w-md mx-auto">
            Daily, weekly, and monthly views — fully customisable to track whatever habits matter to you.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {included.map(({ Icon, label, desc }) => (
              <div key={label} className="bg-white rounded-2xl p-5 flex flex-col gap-3 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm mb-0.5">{label}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>



      {/* ── Testimonials ── */}
      <div className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-red-600 text-center mb-3">Reviews</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">What people are saying</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {testimonials.map(({ name, role, rating, text }) => (
              <div key={name} className="bg-gray-50 rounded-2xl border border-gray-100 p-5">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">"{text}"</p>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">{name[0]}</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 leading-none">{name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Email Reminder ── */}
      <div className="py-8 px-4 sm:px-6 bg-amber-50 border-y border-amber-100">
        <div className="max-w-xl mx-auto flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center flex-shrink-0">
            <Mail className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="font-bold text-gray-900 text-sm mb-1">Your access link is delivered by email</p>
            <p className="text-gray-600 text-xs leading-relaxed">
              Enter an email you actually use at checkout. Your access link is sent there — if it's wrong, you won't receive it. Double-check before you confirm.
            </p>
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <div className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-red-600 text-center mb-3">FAQ</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">Common questions</h2>
          <div className="space-y-2">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
                >
                  <span className="text-sm font-semibold text-gray-900">{q}</span>
                  <ChevronDown className={`h-4 w-4 text-gray-400 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4">
                    <p className="text-sm text-gray-500 leading-relaxed">{a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div className="bg-gray-900 py-14 px-4 sm:px-6 text-center">
        <p className="text-xs font-bold tracking-widest uppercase text-red-400 mb-3">Limited Time Price</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Start tracking today.</h2>
        <p className="text-gray-400 text-sm mb-1">One payment. Access starts immediately.</p>
        <p className="text-gray-500 text-xs mb-6 flex items-center justify-center gap-1.5">
          <AlertCircle className="h-3.5 w-3.5 text-amber-400" />
          <span className="text-amber-400">Use a valid email — your access link is sent there</span>
        </p>
        <a
          href={CHECKOUT_URL}
          className="inline-block px-10 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 active:scale-95 transition-all text-sm tracking-wide"
        >
          Get Instant Access — $13.00
        </a>
        <p className="text-gray-600 text-xs mt-4 flex items-center justify-center gap-1.5">
          <Users className="h-3.5 w-3.5" />
          2,400+ people already inside
        </p>
      </div>

    </div>
  );
}
