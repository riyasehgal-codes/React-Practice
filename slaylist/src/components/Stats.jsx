function Stats({ total, completed, remaining }) {
  return (
    <section className="grid grid-cols-3 gap-3 sm:gap-4">

      {/* Total tasks */}
      <div className="rounded-2xl border border-white/10 bg-[#111320] p-5 text-center transition duration-200 hover:-translate-y-0.5 hover:border-[#FF4FA3]/40">
        <p className="text-3xl font-black text-white sm:text-4xl">
          {total}
        </p>

        <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FF91C7]">
          Total
        </p>
      </div>

      {/* Completed tasks */}
      <div className="rounded-2xl border border-[#FF4FA3]/20 bg-[#111320] p-5 text-center transition duration-200 hover:-translate-y-0.5 hover:border-[#FF4FA3]/50">
        <p className="text-3xl font-black text-[#FF4FA3] sm:text-4xl">
          {completed}
        </p>

        <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FF91C7]">
          Done
        </p>
      </div>

      {/* Remaining tasks */}
      <div className="rounded-2xl border border-white/10 bg-[#111320] p-5 text-center transition duration-200 hover:-translate-y-0.5 hover:border-[#FF6FB5]/40">
        <p className="text-3xl font-black text-[#FFC1DE] sm:text-4xl">
          {remaining}
        </p>

        <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FF91C7]">
          Left
        </p>
      </div>

    </section>
  );
}

export default Stats;