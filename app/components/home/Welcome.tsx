export default function Welcome() {
    return (
        <section className="bg-white py-12 sm:py-16">
            <div className="mx-auto max-w-3xl px-4 text-center">
                {/* TITLE */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 leading-tight">
                    Welcome to{" "}
                    <span className="text-brand-600">OU Green Campus</span>
                </h1>

                {/* SUBTITLE */}
                <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
                    Hành trình xây dựng môi trường học đường xanh, bền vững và có trách nhiệm
                </p>

                {/* META */}
                <p className="mt-3 text-xs sm:text-sm text-slate-500">
                    Trường Đại học Mở TP. Hồ Chí Minh · CLB OU Green Plus
                </p>
            </div>
        </section>
    );
}
