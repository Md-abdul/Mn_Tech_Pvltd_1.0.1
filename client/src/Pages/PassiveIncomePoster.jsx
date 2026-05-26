import { useState, useEffect } from "react";

const PassiveIncomePoster = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className=" bg-white font-sans overflow-hidden">
      {/* ─── MOBILE only (< sm: 640px) ─── */}
      <div className="flex flex-col items-center px-5 py-8 sm:hidden">
        <div
          className={`transition-all duration-700 ${animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
        >
          <span className="bg-red-600 text-white text-[10px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-full">
            Limited Slots Available
          </span>
        </div>

        <div
          className={`mt-4 text-center transition-all duration-700 delay-100 ${animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
        >
          <h1 className="text-3xl font-black uppercase leading-tight text-gray-900 tracking-tight">
            Passive
            <br />
            <span className="text-red-600">Income</span>
          </h1>
          <p className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mt-1">
            Per Month · At Your Place · At Your Control
          </p>
        </div>

        <div
          className={`relative mt-5 transition-all duration-700 delay-200 ${animate ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <div className="relative w-48 mx-auto">
            <div className="absolute -inset-2 bg-gradient-to-b from-red-50 to-transparent rounded-2xl" />
            <img
              src="https://m.media-amazon.com/images/I/41pTWh+vMML.jpg"
              alt="Digital Standee Display"
              className="relative w-full object-contain drop-shadow-2xl"
            />
          </div>
          <div className="absolute -left-4 top-1/3 bg-red-600 text-white rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-lg shadow-red-300 animate-pulse">
            <span className="text-[8px] font-bold uppercase leading-tight">
              Apply
            </span>
            <span className="text-sm font-black uppercase">Now</span>
          </div>
        </div>

        <div
          className={`mt-5 text-center transition-all duration-700 delay-300 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <p className="text-xs font-semibold uppercase text-gray-400 tracking-widest">
            Earn Upto
          </p>
          <p className="text-5xl font-black text-gray-900 leading-none">10K</p>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
            Per Month
          </p>
        </div>

        <div
          className={`mt-4 text-center transition-all duration-700 delay-[400ms] ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <p className="text-lg font-black italic text-green-600">
            hassle-free
          </p>
          <p className="text-sm font-semibold text-gray-700">profit with us</p>
        </div>

        <div
          className={`mt-6 w-full transition-all duration-700 delay-500 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <button className="w-full bg-red-600 hover:bg-red-700 active:scale-95 text-white text-sm font-extrabold uppercase tracking-widest py-4 rounded-2xl shadow-lg shadow-red-200 transition-all duration-200">
            Apply Now →
          </button>
        </div>

        <div
          className={`mt-8 w-full bg-red-600 rounded-xl py-3 text-center transition-all duration-700 delay-[600ms] ${animate ? "opacity-100" : "opacity-0"}`}
        >
          <p className="text-white text-[11px] font-black uppercase tracking-widest">
            Install a Digital Standee & Earn
          </p>
        </div>
      </div>

      {/* ─── TABLET only (sm: 640px – lg: 1024px) ─── */}
      <div className="hidden sm:flex lg:hidden flex-col min-h-screen">
        <div className="bg-red-600 py-6 px-8 text-center">
          <span className="bg-white text-red-600 text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">
            Limited Slots Available
          </span>
          <h1 className="text-5xl font-black uppercase text-white mt-4 leading-none tracking-tight">
            Passive Income
          </h1>
          <p className="text-red-100 text-sm font-semibold uppercase tracking-widest mt-2">
            Per Month · At Your Place · At Your Control
          </p>
        </div>

        <div className="flex flex-1 items-center">
          <div className="flex-1 px-10 py-10 flex flex-col gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                Earn Upto
              </p>
              <p className="text-7xl font-black text-gray-900 leading-none">
                10K
              </p>
              <p className="text-sm font-bold uppercase tracking-widest text-gray-500">
                Per Month
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <p className="text-2xl font-black italic text-green-600">
                hassle-free
              </p>
              <p className="text-base font-semibold text-gray-600">
                profit with us
              </p>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white font-extrabold uppercase tracking-widest text-sm px-8 py-4 rounded-2xl shadow-md shadow-red-200 transition-all duration-200 active:scale-95 w-fit">
              Apply Now →
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center py-8 relative">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-b from-red-50 via-transparent to-transparent rounded-3xl" />
              <img
                src="https://m.media-amazon.com/images/I/41pTWh+vMML.jpg"
                alt="Digital Standee"
                className="relative w-56 object-contain drop-shadow-2xl"
              />
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-xl shadow-red-300 animate-pulse">
                <span className="text-[9px] font-bold uppercase">Apply</span>
                <span className="text-base font-black uppercase">Now</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-red-600 py-4 text-center">
          <p className="text-white font-black text-sm uppercase tracking-widest">
            Install a Digital Standee & Earn
          </p>
        </div>
      </div>

      {/* ─── DESKTOP only (lg+: 1024px+) ─── */}
      <div className="hidden lg:block min-h-screen">
        <div className="flex items-center min-h-[calc(100vh-73px)] px-16 gap-16 max-w-7xl mx-auto">
          <div
            className={`flex-1 flex flex-col gap-8 transition-all duration-1000 ${animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div>
              <h1 className="text-[80px] xl:text-[96px] font-black uppercase leading-none text-gray-900 tracking-tighter">
                Passive
                <br />
                <span className="text-red-600">Income.</span>
              </h1>
              <p className="text-gray-400 text-base font-semibold uppercase tracking-widest mt-3">
                Per Month · At Your Place · At Your Control
              </p>
            </div>
            <div className="flex items-start gap-12">
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">
                  Earn Upto
                </p>
                <p className="text-6xl xl:text-7xl font-black text-gray-900 leading-none">
                  ₹10K
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-1">
                  Per Month
                </p>
              </div>
              <div className="w-px bg-gray-200 self-stretch" />
              <div>
                <p className="text-2xl xl:text-3xl font-black italic text-green-600 mb-1">
                  hassle-free
                </p>
                <p className="text-sm text-gray-500 font-semibold">
                  No experience needed
                </p>
                <p className="text-sm text-gray-500 font-semibold">
                  Zero maintenance by you
                </p>
                <p className="text-sm text-gray-500 font-semibold">
                  Earn while you sleep
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="bg-red-600 hover:bg-red-700 text-white font-extrabold uppercase tracking-widest text-sm px-10 py-5 rounded-2xl shadow-lg shadow-red-200 transition-all duration-200 active:scale-95">
                Apply Now →
              </button>
              <button className="text-gray-500 hover:text-gray-900 font-semibold text-sm transition-colors underline underline-offset-4">
                Learn how it works
              </button>
            </div>
            <div className="flex items-center gap-6 pt-2">
              {[
                { n: "500+", label: "Active Standees" },
                { n: "₹50L+", label: "Paid to Partners" },
                { n: "4.9★", label: "Partner Rating" },
              ].map(({ n, label }) => (
                <div key={label} className="text-center">
                  <p className="text-xl font-black text-gray-900">{n}</p>
                  <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`flex-1 flex justify-center items-center relative transition-all duration-1000 delay-300 ${animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div className="absolute w-[420px] h-[420px] xl:w-[500px] xl:h-[500px] rounded-full bg-red-50 -z-10" />
            <div className="absolute top-16 right-12 bg-white border border-gray-100 rounded-2xl px-5 py-3 shadow-sm">
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                Monthly Avg
              </p>
              <p className="text-xl font-black text-gray-900">₹8,400</p>
            </div>
            <div className="absolute bottom-20 left-8 bg-white border border-gray-100 rounded-2xl px-5 py-3 shadow-sm">
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                Setup Time
              </p>
              <p className="text-xl font-black text-green-600">1 Day</p>
            </div>
            <div className="relative">
              <img
                src="https://m.media-amazon.com/images/I/41pTWh+vMML.jpg"
                alt="Digital Standee"
                className="w-72 xl:w-80 object-contain drop-shadow-2xl"
              />
              <div className="absolute -left-10 top-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full w-28 h-28 flex flex-col items-center justify-center shadow-2xl shadow-red-300 animate-pulse">
                <span className="text-[10px] font-bold uppercase tracking-wide">
                  Apply
                </span>
                <span className="text-xl font-black uppercase">Now</span>
              </div>
            </div>
          </div>
        </div>

        <div className=" bottom-0 w-full bg-red-600 py-3 text-center z-10">
          <p className="text-white font-black text-sm uppercase tracking-[0.2em]">
            Install a Digital Standee & Earn — Passive Income at Your Location
          </p>
        </div>
      </div>
    </div>
  );
};

export default PassiveIncomePoster;
