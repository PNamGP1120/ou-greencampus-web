import Image from "next/image";
import Link from "next/link";

export default function HighlightActivities() {
    return (
        <section className="py-14 sm:py-20 bg-slate-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* IMAGE */}
                    <div className="overflow-hidden rounded-2xl">
                        <Image
                            src="/images/activity/activity.jpg"
                            alt="Hoạt động xanh nổi bật tại OU Green Campus"
                            width={640}
                            height={440}
                            className="
                w-full
                object-cover
                h-[220px]
                sm:h-[300px]
                lg:h-[380px]
              "
                            priority
                        />
                    </div>

                    {/* CONTENT */}
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 leading-tight">
                            Các hoạt động xanh nổi bật
                        </h2>

                        <p className="mt-4 max-w-xl text-sm sm:text-base text-slate-600 leading-relaxed">
                            Lan tỏa tinh thần sống xanh qua những sự kiện và dự án môi trường
                            tiêu biểu do sinh viên và Câu lạc bộ OU Green Plus triển khai tại
                            Trường Đại học Mở TP. Hồ Chí Minh.
                        </p>

                        <div className="mt-6">
                            <Link
                                href="/activities"
                                className="
                  inline-flex items-center gap-2
                  rounded-full
                  bg-brand-600
                  px-6 py-3
                  text-sm font-semibold text-white
                  transition hover:bg-brand-700
                "
                            >
                                Xem tất cả hoạt động
                                <span className="text-base">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
