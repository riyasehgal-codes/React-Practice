function EmptyState2() {
  return (
    <div className="rounded-2xl border border-dashed border-[#303854] bg-[#0b0f1b] px-6 py-10 text-center">

      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#ff3b9d]/40 bg-[#ff3b9d]/10 text-xl text-[#ff3b9d] shadow-[0_0_20px_rgba(255,59,157,0.12)]">
        ♡
      </div>

      <h2 className="font-medium text-white">
        Your little list is empty.
      </h2>

      <p className="mt-2 text-sm text-[#727c9e]">
        Nothing is waiting for you right now.
      </p>

    </div>
  );
}

export default EmptyState2;