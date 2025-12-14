import Image from "next/image";
import Link from "next/link";

export default function IntroBanner() {
    return (
        <section className="py-10 sm:py-14">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
                    {/* IMAGE */}
                    <Image
                        src="/images/intro-banner.png"
                        alt="OU Green Campus – Hoạt động xanh"
                        fill
                        priority
                        className="object-cover"
                    />

                    {/* OVERLAY (chỉ để tăng độ đọc chữ, KHÔNG làm mờ ảnh) */}
                    <div className="absolute inset-0 bg-black/10 sm:bg-transparent" />

                    {/* CONTENT */}
                    <div
                        className="
              relative z-10
              flex items-center
              min-h-[240px] sm:min-h-[320px] lg:min-h-[420px]
              px-5 sm:px-10
            "
                    >
                        <div className="max-w-xl bg-white/80 sm:bg-transparent rounded-xl sm:rounded-none p-5 sm:p-0">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900">
                                OU Green Campus
                            </h2>

                            <p className="mt-2 text-sm sm:text-base md:text-lg font-semibold text-slate-800">
                                Vì một ngôi trường xanh hơn mỗi ngày
                            </p>

                            <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                                Tham gia các hoạt động môi trường, theo dõi Greennews hàng tháng
                                và lan tỏa tinh thần trách nhiệm với cộng đồng sinh viên.
                            </p>

                            <div className="mt-5">
                                <Link
                                    href="/activities"
                                    className="
                    inline-flex items-center
                    rounded-full
                    bg-brand-600
                    px-6 py-3
                    text-sm font-semibold text-white
                    transition hover:bg-brand-700
                  "
                                >
                                    Tìm hiểu hoạt động xanh →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
