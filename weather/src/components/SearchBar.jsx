function SearchBar() {
    return ( 
        <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-[#111320] px-4 py-2">
            <input
                type = "text"
                placeholder = "Enter A city" 
                className = "flex-1 bg-transparent text-sm text-white placeholder:text-[#8F94A6] focus:outline-none"
            />

            <button className="rounded-xl bg-[#FF4FA3] px-4 py-2 text-sm font-bold text-white shadow-[0_5px_15px_rgba(255,79,163,0.18)]">
                Search
            </button>
        </div>
    );
}

export default SearchBar;