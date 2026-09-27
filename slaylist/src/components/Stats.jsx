function Stats( {total, completed, remaining} ) {
  return (
    <section className="grid grid-cols-3 gap-3 sm:gap-5">

      <div className="rounded-2xl border border-[#ff3b9d]/40 bg-[#101426] p-5 text-center shadow-[0_0_25px_rgba(255,59,157,0.08)]">
        <h2 className="text-3xl font-semibold text-[#ff4fa3]">
          {total}
        </h2>

        <p className="mt-1 text-xs font-medium uppercase tracking-widest text-[#8f98ba]">
          Total
        </p>
      </div>

      <div className="rounded-2xl border border-[#36b9ff]/40 bg-[#101426] p-5 text-center shadow-[0_0_25px_rgba(54,185,255,0.08)]">
        <h2 className="text-3xl font-semibold text-[#36b9ff]">
          {completed}
        </h2>

        <p className="mt-1 text-xs font-medium uppercase tracking-widest text-[#8f98ba]">
          Completed
        </p>
      </div>

      <div className="rounded-2xl border border-[#ff4057]/40 bg-[#101426] p-5 text-center shadow-[0_0_25px_rgba(255,64,87,0.08)]">
        <h2 className="text-3xl font-semibold text-[#ff4057]">
          {remaining}
        </h2>

        <p className="mt-1 text-xs font-medium uppercase tracking-widest text-[#8f98ba]">
          Remaining
        </p>
      </div>

    </section>
  );
}

export default Stats;