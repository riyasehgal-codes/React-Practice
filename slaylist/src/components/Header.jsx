function Header() {
  return (
    <header className="text-center">

      {/* 
        Cute custom logo.

        Instead of using an emoji, we create a simple
        bow/sparkle style logo using normal HTML elements.
      */}
      <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-4xl border border-[#FF4FA3]/30 bg-[#111320] shadow-[0_0_45px_rgba(255,79,163,0.12)]">

        <div className="relative h-16 w-16">

          {/* Left side of the bow */}
          <span className="absolute left-0 top-5 h-10 w-10 rotate-[-18deg] rounded-[14px_4px_14px_14px] bg-[#FF4FA3]" />

          {/* Right side of the bow */}
          <span className="absolute right-0 top-5 h-10 w-10 rotate-18 rounded-[4px_14px_14px_14px] bg-[#FF6FB5]" />

          {/* Middle of the bow */}
          <span className="absolute left-1/2 top-7 z-10 h-7 w-7 -translate-x-1/2 rounded-full bg-[#FFC1DE] shadow-[0_0_18px_rgba(255,193,222,0.35)]" />

          {/* Small sparkle */}
          <span className="absolute -right-1 -top-1 z-20 text-xl font-bold text-[#FF91C7]">
            ✦
          </span>
        </div>
      </div>

      {/* Small brand label */}
      <p className="mt-7 text-xs font-bold uppercase tracking-[0.4em] text-[#FF91C7]">
        little plans studio
      </p>

      {/* Main app title */}
      <h1 className="mt-3 text-5xl font-black tracking-tight text-white sm:text-6xl">
        Pink Plans
        <span className="ml-2 text-[#FF4FA3]">♡</span>
      </h1>

      {/* Decorative divider */}
      <div className="mx-auto mt-5 flex items-center justify-center gap-3">
        <span className="h-px w-12 bg-[#FF4FA3]/40" />

        <span className="text-base text-[#FF6FB5]">
          ✦
        </span>

        <span className="h-px w-12 bg-[#FF4FA3]/40" />
      </div>

      {/* Subtitle */}
      <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-[#C5C8D6]">
        Organize your day, keep track of your goals,
        and celebrate every little win.
      </p>
    </header>
  );
}

export default Header;