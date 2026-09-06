import { Link } from "react-router-dom";
import founderImg from "../assets/images/founder.webp";

function SiteRequirementsInfographic() {
  return (
    <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 relative overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
            </svg>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm sm:text-base">Site Feasibility Blueprint</h4>
            <p className="text-gray-400 text-xs">Standardized Outlet Specifications</p>
          </div>
        </div>
        <span className="text-[11px] font-bold text-green-400 bg-green-500/10 border border-green-500/20 px-2.5 py-1 rounded-full">
          Standard Specs
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-5">
        <div className="bg-zinc-950/70 border border-zinc-800/80 rounded-xl p-3.5 sm:p-4">
          <p className="text-gray-400 text-xs">Floor Area</p>
          <p className="text-yellow-400 font-extrabold text-base sm:text-xl mt-0.5">100–1000 <span className="text-xs font-normal text-gray-300">sq.ft.</span></p>
          <p className="text-gray-500 text-[11px] mt-1">Kiosk / Dine-In / Lounge</p>
        </div>

        <div className="bg-zinc-950/70 border border-zinc-800/80 rounded-xl p-3.5 sm:p-4">
          <p className="text-gray-400 text-xs">Power Connection</p>
          <p className="text-yellow-400 font-extrabold text-base sm:text-xl mt-0.5">3 KW – 5 KW</p>
          <p className="text-gray-500 text-[11px] mt-1">3-Phase Commercial</p>
        </div>

        <div className="bg-zinc-950/70 border border-zinc-800/80 rounded-xl p-3.5 sm:p-4">
          <p className="text-gray-400 text-xs">Ideal Frontage</p>
          <p className="text-white font-bold text-base sm:text-lg mt-0.5">10–12 Feet</p>
          <p className="text-gray-500 text-[11px] mt-1">Clear Glass Front</p>
        </div>

        <div className="bg-zinc-950/70 border border-zinc-800/80 rounded-xl p-3.5 sm:p-4">
          <p className="text-gray-400 text-xs">Floor Level</p>
          <p className="text-white font-bold text-base sm:text-lg mt-0.5">Ground Floor</p>
          <p className="text-gray-500 text-[11px] mt-1">High Street / Food Hub</p>
        </div>
      </div>

      <div className="bg-zinc-950/50 border border-zinc-800/60 rounded-xl p-3.5">
        <p className="text-xs font-semibold text-gray-300 mb-2 flex items-center gap-1.5">
          <span className="text-yellow-400">●</span> Prime Location Target Clusters:
        </p>
        <div className="flex flex-wrap gap-1.5">
          {["Metro Station Exits", "Colleges & Institutes", "High Streets", "Corporate Tech Parks", "Food Courts"].map((tag) => (
            <span key={tag} className="text-[11px] bg-zinc-800 text-gray-300 px-2.5 py-1 rounded-md border border-zinc-700/60">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function TurnkeySetupInfographic() {
  return (
    <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 relative overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-5">
        <div>
          <span className="text-xs uppercase tracking-wider text-yellow-400 font-bold">Launch Package</span>
          <h4 className="text-white font-black text-lg sm:text-xl mt-0.5">100% Turnkey Delivery</h4>
        </div>
        <div className="text-right">
          <span className="text-yellow-400 font-black text-2xl sm:text-3xl">14</span>
          <span className="text-gray-400 text-xs block">Days to Launch</span>
        </div>
      </div>

      <div className="space-y-3 mb-5">
        <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/70 border border-zinc-800/70">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-lg bg-yellow-400/10 text-yellow-400 flex items-center justify-center font-bold text-xs">01</span>
            <div>
              <p className="text-white font-semibold text-xs sm:text-sm">Complete Kitchen Fabrication</p>
              <p className="text-gray-500 text-[11px]">Stainless steel counters, fryers, exhaust & cold storage</p>
            </div>
          </div>
          <span className="text-green-400 text-xs font-bold">Included</span>
        </div>

        <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/70 border border-zinc-800/70">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-lg bg-yellow-400/10 text-yellow-400 flex items-center justify-center font-bold text-xs">02</span>
            <div>
              <p className="text-white font-semibold text-xs sm:text-sm">Initial Raw Material Batch</p>
              <p className="text-gray-500 text-[11px]">Branded premixes, fresh pav, signature Mumbai chutneys</p>
            </div>
          </div>
          <span className="text-yellow-400 text-xs font-bold">₹30,000 Included</span>
        </div>

        <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/70 border border-zinc-800/70">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-lg bg-yellow-400/10 text-yellow-400 flex items-center justify-center font-bold text-xs">03</span>
            <div>
              <p className="text-white font-semibold text-xs sm:text-sm">Comprehensive Staff Training</p>
              <p className="text-gray-500 text-[11px]">Certified training on prep speed, recipes & hygiene SOPs</p>
            </div>
          </div>
          <span className="text-green-400 text-xs font-bold">Certified</span>
        </div>

        <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/70 border border-zinc-800/70">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-lg bg-yellow-400/10 text-yellow-400 flex items-center justify-center font-bold text-xs">04</span>
            <div>
              <p className="text-white font-semibold text-xs sm:text-sm">Swiggy & Zomato Onboarding</p>
              <p className="text-gray-500 text-[11px]">Menu digitization, live menu integration & launch campaigns</p>
            </div>
          </div>
          <span className="text-green-400 text-xs font-bold">Ready Day 1</span>
        </div>
      </div>

      <div className="p-3 rounded-xl bg-yellow-400/10 border border-yellow-400/20 text-center text-xs text-yellow-400 font-semibold">
        Zero Chef Dependency • 100% Standardized Operations • High Gross Margins
      </div>
    </div>
  );
}

function PosTechnologyInfographic() {
  return (
    <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 relative overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="text-gray-400 text-xs font-semibold ml-2 font-mono">Urban POS Cloud OS</span>
        </div>
        <span className="text-[10px] text-green-400 font-semibold bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded-full flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Live 2-Way Sync
        </span>
      </div>

      <div className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-4 mb-4">
        <div className="flex justify-between items-center text-gray-400 text-[11px] border-b border-zinc-800/80 pb-2 mb-2 font-mono">
          <span>LIVE TICKET #1084</span>
          <span className="text-yellow-400 font-semibold">ZOMATO API DIRECT</span>
        </div>
        <div className="space-y-1.5 text-gray-300 text-xs font-mono">
          <div className="flex justify-between">
            <span>2x Mumbai Classic Vada Pav</span>
            <span className="text-white font-semibold">₹98</span>
          </div>
          <div className="flex justify-between">
            <span>1x Urban Crispy Paneer Burger</span>
            <span className="text-white font-semibold">₹129</span>
          </div>
          <div className="flex justify-between">
            <span>2x Strawberry Mojito (Chill)</span>
            <span className="text-white font-semibold">₹198</span>
          </div>
        </div>
        <div className="border-t border-dashed border-zinc-800 mt-3 pt-2 flex justify-between font-bold text-white text-sm">
          <span>Order Total</span>
          <span className="text-yellow-400">₹425</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="bg-zinc-950/60 border border-zinc-800/60 rounded-lg p-2.5">
          <p className="text-[11px] text-gray-400">Hardware Terminal</p>
          <p className="text-white font-bold text-xs mt-0.5">Laptop / Touch POS</p>
        </div>
        <div className="bg-zinc-950/60 border border-zinc-800/60 rounded-lg p-2.5">
          <p className="text-[11px] text-gray-400">Receipt Printer</p>
          <p className="text-white font-bold text-xs mt-0.5">3-Inch Thermal Auto</p>
        </div>
        <div className="bg-zinc-950/60 border border-zinc-800/60 rounded-lg p-2.5">
          <p className="text-[11px] text-gray-400">Online Aggregators</p>
          <p className="text-green-400 font-bold text-xs mt-0.5">Swiggy & Zomato</p>
        </div>
        <div className="bg-zinc-950/60 border border-zinc-800/60 rounded-lg p-2.5">
          <p className="text-[11px] text-gray-400">Daily Reporting</p>
          <p className="text-yellow-400 font-bold text-xs mt-0.5">Cloud & WhatsApp</p>
        </div>
      </div>
    </div>
  );
}

function MarketingEngineInfographic() {
  return (
    <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 relative overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-5">
        <div>
          <span className="text-xs uppercase tracking-wider text-yellow-400 font-bold">Growth Strategy</span>
          <h4 className="text-white font-black text-lg sm:text-xl mt-0.5">360° Omnichannel Marketing</h4>
        </div>
        <span className="text-xs bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 px-3 py-1 rounded-full font-bold">
          High Footfall
        </span>
      </div>

      <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
        <div className="bg-zinc-950/70 border border-zinc-800/70 rounded-xl p-4">
          <div className="flex items-center gap-2 text-yellow-400 font-bold text-xs mb-2">
            <span>🌐</span> DIGITAL MARKETING
          </div>
          <ul className="space-y-1.5 text-xs text-gray-400">
            <li className="flex items-center gap-1.5"><span className="text-yellow-400">✓</span> Meta (FB/IG) Radius Ads</li>
            <li className="flex items-center gap-1.5"><span className="text-yellow-400">✓</span> Google Maps Local 5★ SEO</li>
            <li className="flex items-center gap-1.5"><span className="text-yellow-400">✓</span> Food Influencer Reels</li>
            <li className="flex items-center gap-1.5"><span className="text-yellow-400">✓</span> Swiggy/Zomato Sponsored Ads</li>
          </ul>
        </div>

        <div className="bg-zinc-950/70 border border-zinc-800/70 rounded-xl p-4">
          <div className="flex items-center gap-2 text-yellow-400 font-bold text-xs mb-2">
            <span>📢</span> HYPERLOCAL LAUNCH
          </div>
          <ul className="space-y-1.5 text-xs text-gray-400">
            <li className="flex items-center gap-1.5"><span className="text-yellow-400">✓</span> 5,000 Inaugural Print Flyers</li>
            <li className="flex items-center gap-1.5"><span className="text-yellow-400">✓</span> BOGO Grand Opening Vouchers</li>
            <li className="flex items-center gap-1.5"><span className="text-yellow-400">✓</span> Standees & Arch Branding</li>
            <li className="flex items-center gap-1.5"><span className="text-yellow-400">✓</span> Society & College Tie-Ups</li>
          </ul>
        </div>
      </div>

      <div className="bg-zinc-950/50 border border-zinc-800/60 rounded-xl p-3 flex items-center justify-between text-xs">
        <span className="text-gray-400">Unified Packaging & Branding Kit</span>
        <span className="text-yellow-400 font-semibold">100% Brand Compliant</span>
      </div>
    </div>
  );
}

function FranchiseDetails() {
  const models = [
    {
      title: "Kiosk Model",
      investment: "₹5–6 Lakhs",
      area: "100–200 sq.ft.",
      power: "3 KW Electricity",
      image: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Dine-In Model",
      investment: "₹7–9 Lakhs",
      area: "200–500 sq.ft.",
      power: "4 KW Electricity",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Lounge Model",
      investment: "₹9–15 Lakhs",
      area: "500–1000 sq.ft.",
      power: "5 KW Electricity",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="bg-black text-white">

      {/* HERO */}

      <section className="relative overflow-hidden pt-24 sm:pt-36 pb-12 sm:pb-28">

        <div className="absolute -top-40 -right-32 h-[500px] w-[500px] rounded-full bg-yellow-400/10 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-yellow-500/5 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* LEFT */}

          <div>

            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">

              <span className="px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-yellow-400 text-black font-bold text-xs sm:text-sm">
                45+ Outlets
              </span>

              <span className="px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full border border-yellow-400 text-yellow-400 text-xs sm:text-sm">
                20+ Cities
              </span>

              <span className="px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full border border-zinc-700 text-gray-300 text-xs sm:text-sm">
                Since 2018
              </span>

            </div>

            <p className="uppercase tracking-[5px] sm:tracking-[6px] text-yellow-400 font-semibold text-xs sm:text-sm">
              India's Fast Growing Vegetarian QSR
            </p>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-tight mt-4 sm:mt-8">
              Own Your

              <span className="block text-yellow-400">
                Urban Vada Pav
              </span>

              Franchise
            </h1>

            <p className="text-gray-400 text-base sm:text-xl leading-relaxed sm:leading-9 mt-5 sm:mt-10 max-w-2xl">
              Join one of India's fastest-growing vegetarian food brands.
              Get complete support for setup, operations, training,
              technology and marketing with a proven franchise model.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-5 mt-6 sm:mt-12">

              <Link
                to="/franchise/apply"
                className="bg-yellow-400 text-black px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:scale-105 transition inline-block text-center"
              >
                Apply Now →
              </Link>

              <button
                type="button"
                className="border border-yellow-400 px-6 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-yellow-400 hover:text-black transition"
              >
                Download Brochure
              </button>

            </div>

            {/* STATS */}

            <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-16">

              <div>
                <h3 className="text-2xl sm:text-4xl font-black text-yellow-400">
                  45+
                </h3>

                <p className="text-gray-500 mt-1 sm:mt-2 text-xs sm:text-base">
                  Outlets
                </p>
              </div>

              <div>
                <h3 className="text-2xl sm:text-4xl font-black text-yellow-400">
                  20+
                </h3>

                <p className="text-gray-500 mt-1 sm:mt-2 text-xs sm:text-base">
                  Cities
                </p>
              </div>

              <div>
                <h3 className="text-2xl sm:text-4xl font-black text-yellow-400">
                  5
                </h3>

                <p className="text-gray-500 mt-1 sm:mt-2 text-xs sm:text-base">
                  States
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">

            <div className="absolute inset-0 bg-yellow-400/10 rounded-2xl sm:rounded-[40px] blur-3xl scale-95" />

            <div className="relative rounded-2xl sm:rounded-[40px] overflow-hidden border border-yellow-400/20 shadow-2xl">

              <div className="h-[280px] sm:h-[420px] lg:h-[620px] bg-zinc-900 relative overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80"
                  alt="Urban Vada Pav Fast Casual Franchise Format"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-5 sm:p-8">
                  <span className="inline-flex items-center gap-1.5 bg-yellow-400 text-black text-xs font-black px-3 py-1 rounded-full w-fit mb-2">
                    ★ Premium QSR Format
                  </span>
                  <h4 className="text-lg sm:text-2xl font-black text-white leading-snug">
                    High Margin • Standardized Operations
                  </h4>
                  <p className="text-gray-300 text-xs sm:text-sm mt-1 max-w-sm">
                    Turnkey commercial fast food model built for rapid scalability and attractive unit economics.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* PROJECT OVERVIEW */}

      <section className="py-12 sm:py-24 border-t border-zinc-800">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          <div>

            <div className="h-[240px] sm:h-[360px] lg:h-[450px] rounded-2xl sm:rounded-3xl border border-zinc-800 bg-zinc-900 overflow-hidden relative group shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
                alt="Urban Vada Pav Store Service and Dining Experience"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5 sm:p-6">
                <span className="text-xs sm:text-sm font-semibold text-yellow-400 bg-black/80 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-yellow-400/30">
                  Standardized Recipes & Authentic Mumbai Taste
                </span>
              </div>
            </div>

          </div>

          <div>

            <p className="uppercase tracking-[5px] text-yellow-400 text-xs sm:text-sm font-semibold">
              Project Overview
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4">
              Building India's Favourite
              Street Food Brand
            </h2>

            <p className="text-gray-400 leading-relaxed sm:leading-8 mt-4 sm:mt-8 text-sm sm:text-base">
              Our outlets are designed to celebrate India's rich snack culture
              by serving authentic Vada Pav along with delicious snacks,
              beverages and desserts in a modern café environment.
            </p>

            <p className="text-gray-400 leading-relaxed sm:leading-8 mt-3 sm:mt-6 text-sm sm:text-base">
              Every Urban Vada Pav outlet focuses on quality, consistency,
              customer experience and operational excellence while offering
              complete support to franchise partners.
            </p>

          </div>

        </div>

      </section>


      {/* FRANCHISE MODELS */}

      <section className="py-12 sm:py-24 border-t border-zinc-800">

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="text-center">

            <p className="uppercase tracking-[5px] text-yellow-400 text-xs sm:text-sm font-semibold">
              Franchise Models
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4">
              Choose Your Business Model
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-5 sm:gap-8 mt-8 sm:mt-16">

            {models.map((model) => (

              <div
                key={model.title}
                className="bg-zinc-900 rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-800 hover:border-yellow-400 transition"
              >

                <div className="h-44 sm:h-56 border-b border-zinc-800 relative overflow-hidden group bg-black">
                  <img
                    src={model.image}
                    alt={model.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute bottom-3 left-4 bg-yellow-400 text-black text-xs font-bold px-2.5 py-1 rounded-full">
                    {model.area}
                  </span>
                </div>

                <div className="p-5 sm:p-8">

                  <h3 className="text-2xl sm:text-3xl font-bold">
                    {model.title}
                  </h3>

                  <div className="mt-5 sm:mt-8 space-y-3 sm:space-y-5 text-sm sm:text-base">

                    <div className="flex justify-between gap-4">
                      <span className="text-gray-400">
                        Investment
                      </span>

                      <span className="text-yellow-400 font-bold text-right">
                        {model.investment}
                      </span>
                    </div>

                    <div className="flex justify-between gap-4">
                      <span className="text-gray-400">
                        Area
                      </span>

                      <span className="text-right">
                        {model.area}
                      </span>
                    </div>

                    <div className="flex justify-between gap-4">
                      <span className="text-gray-400">
                        Electricity
                      </span>

                      <span className="text-right">
                        {model.power}
                      </span>
                    </div>

                  </div>

                  <Link
                    to="/franchise/apply"
                    className="w-full mt-6 sm:mt-10 bg-yellow-400 text-black py-2.5 sm:py-3 rounded-full font-bold hover:scale-105 transition inline-block text-center text-sm sm:text-base"
                  >
                    Apply Now →
                  </Link>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* PROJECT REQUIREMENTS */}

      <section className="py-12 sm:py-24 border-t border-zinc-800">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          <div>

            <p className="uppercase tracking-[5px] text-yellow-400 text-xs sm:text-sm font-semibold">
              Project Requirements
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4">
              Space & Power Requirements
            </h2>

            <p className="text-gray-400 leading-relaxed sm:leading-8 mt-4 sm:mt-8 text-sm sm:text-base">
              Choose the outlet format that best suits your investment and
              location. Every model is designed for operational efficiency
              and long-term growth.
            </p>

            <div className="space-y-3 sm:space-y-6 mt-6 sm:mt-10">

              <div className="bg-zinc-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-zinc-800">
                <h3 className="text-xl sm:text-2xl font-bold text-yellow-400">
                  Kiosk
                </h3>

                <p className="mt-2 sm:mt-3 text-gray-400 text-sm sm:text-base">
                  Area Required : 100–200 sq.ft.
                </p>

                <p className="text-gray-400 text-sm sm:text-base">
                  Electricity : 3 KW
                </p>
              </div>

              <div className="bg-zinc-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-zinc-800">
                <h3 className="text-xl sm:text-2xl font-bold text-yellow-400">
                  Dine-In
                </h3>

                <p className="mt-2 sm:mt-3 text-gray-400 text-sm sm:text-base">
                  Area Required : 200–500 sq.ft.
                </p>

                <p className="text-gray-400 text-sm sm:text-base">
                  Electricity : 4 KW
                </p>
              </div>

              <div className="bg-zinc-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-zinc-800">
                <h3 className="text-xl sm:text-2xl font-bold text-yellow-400">
                  Lounge
                </h3>

                <p className="mt-2 sm:mt-3 text-gray-400 text-sm sm:text-base">
                  Area Required : 500–1000 sq.ft.
                </p>

                <p className="text-gray-400 text-sm sm:text-base">
                  Electricity : 5 KW
                </p>
              </div>

            </div>

          </div>

          <div>
            <SiteRequirementsInfographic />
          </div>

        </div>

      </section>


      {/* LOCATION PREFERENCE */}

      <section className="py-12 sm:py-24 border-t border-zinc-800">

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="text-center">

            <p className="uppercase tracking-[5px] text-yellow-400 text-xs sm:text-sm font-semibold">
              Location Preference
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4">
              Ideal Store Locations
            </h2>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-8 mt-8 sm:mt-16">

            {[
              "🏠 Residential Areas",
              "🏫 Schools & Colleges",
              "🏢 Corporate Offices",
              "🛍 Shopping Markets",
              "🚌 Bus & Metro Stations",
              "🎯 High Footfall Locations",
            ].map((item) => (

              <div
                key={item}
                className="bg-zinc-900 rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-zinc-800 text-center"
              >
                <h3 className="text-sm sm:text-2xl font-semibold">
                  {item}
                </h3>
              </div>

            ))}

          </div>

        </div>

      </section>


      {/* OUR PROJECT */}

      <section className="py-12 sm:py-24 border-t border-zinc-800">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          <div>
            <TurnkeySetupInfographic />
          </div>

          <div>

            <p className="uppercase tracking-[5px] text-yellow-400 text-xs sm:text-sm font-semibold">
              Our Project
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4">
              Everything You Need To Start
            </h2>

            <ul className="space-y-3 sm:space-y-5 mt-6 sm:mt-10 text-gray-400 text-sm sm:text-lg">
              <li>✔ Complete Store Interior</li>
              <li>✔ Commercial Kitchen Equipment</li>
              <li>✔ Billing Software</li>
              <li>✔ Initial Raw Material Worth ₹30,000</li>
              <li>✔ Staff Training</li>
              <li>✔ Swiggy & Zomato Setup</li>
              <li>✔ Operations Support</li>
            </ul>

          </div>

        </div>

      </section>


      {/* INTERIORS & MORE */}

      <section className="py-12 sm:py-24 border-t border-zinc-800">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          <div>

            <p className="uppercase tracking-[5px] text-yellow-400 text-xs sm:text-sm font-semibold">
              Interiors & More
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4">
              Premium Store Interiors
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-2.5 sm:gap-5 mt-6 sm:mt-10">

              {[
                "Front Counter",
                "Preparation Table",
                "Marble Top",
                "Lighting",
                "Wood Work",
                "Painting",
                "Texture Finish",
                "Plumbing",
                "Tables & Chairs",
                "Wash Area",
              ].map((item) => (

                <div
                  key={item}
                  className="bg-zinc-900 rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-zinc-800 text-xs sm:text-base"
                >
                  ✔ {item}
                </div>

              ))}

            </div>

          </div>

          <div>
            <div className="h-[240px] sm:h-[360px] lg:h-[480px] rounded-2xl sm:rounded-3xl border border-zinc-800 bg-zinc-900 overflow-hidden relative group shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=1000&q=80"
                alt="Store Interior and Modern Cafe Ambiance"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5 sm:p-6">
                <span className="text-xs sm:text-sm font-semibold text-yellow-400 bg-black/80 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-yellow-400/30">
                  Signature Black & Gold Warm Fast-Casual Aesthetic
                </span>
              </div>
            </div>
          </div>

        </div>

      </section>


      {/* EQUIPMENTS */}

      <section className="py-12 sm:py-24 border-t border-zinc-800">

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="text-center">

            <p className="uppercase tracking-[5px] text-yellow-400 text-xs sm:text-sm font-semibold">
              Equipments
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4">
              Commercial Kitchen Setup
            </h2>

          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-8 mt-8 sm:mt-16">

            {[
              "Deep Freezer",
              "Deep Fryer",
              "Commercial Griller",
              "Pizza Oven",
              "Induction",
              "Commercial Grinder",
              "Utensils",
              "Storage",
              "Preparation Tools",
            ].map((item) => (

              <div
                key={item}
                className="bg-zinc-900 rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-zinc-800 text-center"
              >

                <div className="w-10 h-10 sm:w-14 sm:h-14 mx-auto rounded-xl sm:rounded-2xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center mb-2 sm:mb-5 text-yellow-400">
                  <svg className="w-5 h-5 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>

                <h3 className="text-sm sm:text-xl font-semibold">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* BILLING EQUIPMENTS */}

      <section className="py-12 sm:py-24 border-t border-zinc-800">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          <div>
            <PosTechnologyInfographic />
          </div>

          <div>

            <p className="uppercase tracking-[5px] text-yellow-400 text-xs sm:text-sm font-semibold">
              Billing Equipments
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4">
              Technology & Software
            </h2>

            <div className="space-y-3 sm:space-y-5 mt-6 sm:mt-10">

              <div className="bg-zinc-900 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-zinc-800 text-sm sm:text-base">
                ✔ Laptop
              </div>

              <div className="bg-zinc-900 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-zinc-800 text-sm sm:text-base">
                ✔ Billing Printer
              </div>

              <div className="bg-zinc-900 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-zinc-800 text-sm sm:text-base">
                ✔ Billing Software
              </div>

              <div className="bg-zinc-900 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-zinc-800 text-sm sm:text-base">
                ✔ Swiggy & Zomato Integration
              </div>

              <div className="bg-zinc-900 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-zinc-800 text-sm sm:text-base">
                ✔ Raw Material (₹30,000 Included)
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* STATUTORY REQUIREMENTS */}

      <section className="py-12 sm:py-24 border-t border-zinc-800">

        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">

          <p className="uppercase tracking-[5px] text-yellow-400 text-xs sm:text-sm font-semibold">
            Statutory Requirements
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4">
            Required Documents
          </h2>

          <div className="grid md:grid-cols-2 gap-3 sm:gap-8 mt-8 sm:mt-16">

            {[
              "GST Registration",
              "Ownership / Lease Agreement",
              "FSSAI Compliance",
              "Government Tax Compliance",
            ].map((item) => (

              <div
                key={item}
                className="bg-zinc-900 rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-zinc-800 text-sm sm:text-base"
              >
                ✔ {item}
              </div>

            ))}

          </div>

        </div>

      </section>


      {/* BUSINESS CONDUCT */}

      <section className="py-12 sm:py-24 border-t border-zinc-800">

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="text-center">

            <p className="uppercase tracking-[5px] text-yellow-400 text-xs sm:text-sm font-semibold">
              Business Conduct
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4">
              Keys To Success
            </h2>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mt-8 sm:mt-16">

            {[
              "Customer First",
              "Operations Excellence",
              "Upselling",
              "Local Marketing",
              "Sales Tracking",
              "Team Incentives",
              "Inventory Control",
              "Business Growth",
            ].map((item) => (

              <div
                key={item}
                className="bg-zinc-900 rounded-xl sm:rounded-2xl p-3.5 sm:p-6 border border-zinc-800 text-center text-sm sm:text-base"
              >
                {item}
              </div>

            ))}

          </div>

        </div>

      </section>


      {/* EFFECTIVE MARKETING */}

      <section className="py-12 sm:py-24 border-t border-zinc-800">

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="text-center">

            <p className="uppercase tracking-[5px] text-yellow-400 text-xs sm:text-sm font-semibold">
              Effective Marketing
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4">
              Online & Offline Growth Strategy
            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-5 sm:gap-8 mt-8 sm:mt-16">

            <div className="bg-zinc-900 rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-zinc-800">

              <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-4 sm:mb-8">
                Online
              </h3>

              <ul className="space-y-2.5 sm:space-y-4 text-gray-300 text-sm sm:text-base">
                <li>✔ Swiggy Promotion</li>
                <li>✔ Zomato Promotion</li>
                <li>✔ Social Media Marketing</li>
                <li>✔ SEO</li>
                <li>✔ Influencer Marketing</li>
                <li>✔ Monthly Digital Campaigns</li>
              </ul>

            </div>

            <div className="bg-zinc-900 rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-zinc-800">

              <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-4 sm:mb-8">
                Offline
              </h3>

              <ul className="space-y-2.5 sm:space-y-4 text-gray-300 text-sm sm:text-base">
                <li>✔ Flyers</li>
                <li>✔ Coupons</li>
                <li>✔ Lucky Draws</li>
                <li>✔ Local Promotions</li>
                <li>✔ Banner Advertising</li>
                <li>✔ Community Marketing</li>
              </ul>

            </div>

          </div>

        </div>

      </section>


      {/* BRANDING */}

      <section className="py-12 sm:py-24 border-t border-zinc-800">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          <div>

            <p className="uppercase tracking-[5px] text-yellow-400 text-xs sm:text-sm font-semibold">
              Branding Support
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4">
              Everything Needed For Your Store
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-2.5 sm:gap-5 mt-6 sm:mt-10">

              {[
                "Sign Board",
                "Counter Branding",
                "Wall Menu",
                "Paper Bags",
                "Packaging",
                "Employee Uniforms",
                "Caps",
                "Marketing Material",
              ].map((item) => (

                <div
                  key={item}
                  className="bg-zinc-900 rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-zinc-800 text-xs sm:text-base"
                >
                  ✔ {item}
                </div>

              ))}

            </div>

          </div>

          <div>
            <MarketingEngineInfographic />
          </div>

        </div>

      </section>


      {/* STORE COSTING & UNIT ECONOMICS */}

      <section className="py-12 sm:py-24 border-t border-zinc-800">

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="text-center mb-8 sm:mb-16">

            <p className="uppercase tracking-[5px] text-yellow-400 text-xs sm:text-sm font-semibold">
              Store Economics
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4">
              Profitability Overview
            </h2>

            <p className="text-gray-400 mt-3 sm:mt-5 max-w-2xl mx-auto text-sm sm:text-base">
              Illustrative monthly store economics based on the projected
              revenue and operating cost structure.
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">

            {/* TABLE */}

            <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-800">

              <table className="w-full">

                <thead className="bg-yellow-400 text-black text-xs sm:text-base">

                  <tr>
                    <th className="p-2.5 sm:p-4 text-left">
                      Item
                    </th>

                    <th className="p-2.5 sm:p-4 text-right">
                      Amount
                    </th>

                    <th className="p-2.5 sm:p-4 text-right">
                      %
                    </th>
                  </tr>

                </thead>

                <tbody className="bg-zinc-900 text-xs sm:text-base">

                  {[
                    ["Sales", "₹3,00,000", ""],
                    ["Food Cost", "₹1,05,000", "35%"],
                    ["Rent", "₹30,000", "10%"],
                    ["Labour", "₹30,000", "10%"],
                    ["Electricity", "₹12,000", "4%"],
                    ["Miscellaneous", "₹15,000", "5%"],
                    ["Total Overheads", "₹1,92,000", "64%"],
                    ["Net Profit", "₹1,08,000", "36%"],
                  ].map((row) => (

                    <tr
                      key={row[0]}
                      className="border-t border-zinc-800"
                    >

                      <td className="p-2.5 sm:p-4">
                        {row[0]}
                      </td>

                      <td className="p-2.5 sm:p-4 text-right">
                        {row[1]}
                      </td>

                      <td className="p-2.5 sm:p-4 text-right text-yellow-400 font-bold">
                        {row[2]}
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>


            {/* CARDS */}

            <div className="grid grid-cols-2 gap-3 sm:gap-6">

              <div className="bg-zinc-900 rounded-2xl sm:rounded-3xl p-4 sm:p-8 text-center border border-zinc-800">

                <h3 className="text-3xl sm:text-5xl font-bold text-yellow-400">
                  ₹220
                </h3>

                <p className="mt-2 sm:mt-4 text-gray-300 text-xs sm:text-base">
                  Average Bill Value
                </p>

              </div>

              <div className="bg-zinc-900 rounded-2xl sm:rounded-3xl p-4 sm:p-8 text-center border border-zinc-800">

                <h3 className="text-3xl sm:text-5xl font-bold text-yellow-400">
                  ₹10K
                </h3>

                <p className="mt-2 sm:mt-4 text-gray-300 text-xs sm:text-base">
                  Average Sales / Day
                </p>

              </div>

              <div className="bg-zinc-900 rounded-2xl sm:rounded-3xl p-4 sm:p-8 text-center border border-zinc-800">

                <h3 className="text-3xl sm:text-5xl font-bold text-yellow-400">
                  45
                </h3>

                <p className="mt-2 sm:mt-4 text-gray-300 text-xs sm:text-base">
                  Transactions / Day
                </p>

              </div>

              <div className="bg-zinc-900 rounded-2xl sm:rounded-3xl p-4 sm:p-8 text-center border border-zinc-800">

                <h3 className="text-3xl sm:text-5xl font-bold text-green-400">
                  36%
                </h3>

                <p className="mt-2 sm:mt-4 text-gray-300 text-xs sm:text-base">
                  Net Profit
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* FOUNDER'S NOTE */}

      <section className="py-12 sm:py-24 border-t border-zinc-800">

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">

          <div className="h-32 w-32 sm:h-44 sm:w-44 rounded-full border-2 border-yellow-400/50 p-1 mx-auto bg-zinc-900 overflow-hidden shadow-2xl shadow-yellow-400/20 relative group">
            <img
              src={founderImg}
              alt="R. P. Singh - Founder & CEO"
              className="w-full h-full object-cover rounded-full group-hover:scale-105 transition duration-300"
              loading="lazy"
            />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-6 sm:mt-10">
            A Message From Our Founder
          </h2>

          <p className="text-gray-400 leading-relaxed sm:leading-8 mt-4 sm:mt-8 text-sm sm:text-lg">
            Urban Vada Pav was built with a simple vision — to transform
            India's favourite street food into a trusted national brand.
            When you join us as a franchise partner, you become a part of
            our journey towards serving quality, consistency and memorable
            experiences across the country.
          </p>

          <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mt-6 sm:mt-10">
            R. P. Singh
          </h3>

          <p className="text-gray-500 text-sm sm:text-base">
            Founder & CEO
          </p>

        </div>

      </section>


      {/* FINAL CTA */}

      <section className="py-12 sm:py-24 bg-yellow-400">

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black">
            Ready To Start Your Business?
          </h2>

          <p className="text-black/80 mt-3 sm:mt-6 text-base sm:text-xl">
            Become a part of Urban Vada Pav's growing franchise family.
          </p>

          <Link
            to="/franchise/apply"
            className="mt-6 sm:mt-10 bg-black text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold hover:scale-105 transition inline-block text-sm sm:text-base"
          >
            Apply For Franchise →
          </Link>

        </div>

      </section>

    </div>
  );
}

export default FranchiseDetails;