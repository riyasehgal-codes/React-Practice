function Header() {
  return (
    <header className="relative text-center">
    <div className="pointer-events-none absolute left-1/2 top-8 h-32 w-64 -translate-x-1/2 rounded-full bg-[#ff3b9d]/10 blur-3xl" />
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-[#ff4fa3]">
        my little space
      </p>

      <h1 className="text-4xl font-semibold tracking-tight text-white drop-shadow-[0_0_18px_rgba(255,45,150,0.45)] sm:text-5xl">
        My Little To-Do Space{" "}
        <span className="text-[#ff3b9d]">♡</span>
      </h1>

      <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#9ca6c9]">
        Organize your chaos. Romanticize your productivity.
      </p>

    </header>
  );
}

export default Header;