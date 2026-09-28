function EmptyState() {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#111320] px-6 py-16 text-center">

      {/* Cute decorative symbol */}
      <div className="text-5xl text-[#FF4FA3]">
        ♡
      </div>

      <div className="mx-auto mt-5 flex items-center justify-center gap-3">

        <span className="h-px w-10 bg-[#FF4FA3]/30" />

        <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF91C7]">
          all clear
        </span>

        <span className="h-px w-10 bg-[#FF4FA3]/30" />

      </div>

      <h2 className="mt-5 text-3xl font-black text-white">
        Nothing left to do
      </h2>

      <p className="mx-auto mt-3 max-w-sm text-base leading-7 text-[#8F94A6]">
        Your plans are all cleared up.
        Enjoy the little victory.
      </p>

      {/* Tiny cat reference */}
      <p className="mt-6 text-sm font-medium text-[#FF6FB5]">
        ฅ^•ﻌ•^ฅ
      </p>
    </div>
  );
}

export default EmptyState;