import Image from "next/image";
import Link from "next/link";

/**
 * Mock data – sau này thay bằng API
 */
const events = [
    {
        id: 1,
        title: "Tuyển thành viên CLB OU Green Plus",
        image: "/images/events/event-1.jpg",
        time: "Tháng 12/2025",
        location: "Cơ sở 97 Võ Văn Tần",
        description: "Tuyển thành viên CLB OU Green Plus – Gen 7",
    },
    {
        id: 2,
        title: "Chương trình OU Thanks 2025",
        image: "/images/events/event-2.jpg",
        time: "Tháng 11 – 12/2025",
        location: "TP. Hồ Chí Minh",
        description: "Chương trình tri ân và phục vụ cộng đồng",
    },
    {
        id: 3,
        title: "Hãy làm sạch biển – Beach Clean Up Day",
        image: "/images/events/event-3.jpg",
        time: "Tháng 10/2025",
        location: "Xuyên Mộc, Vũng Tàu",
        description: "Chiến dịch Hãy làm sạch biển 2025",
    },
    {
        id: 4,
        title: "Cuộc thi Đại sứ Môi trường",
        image: "/images/events/event-4.jpg",
        time: "Tháng 7 – 9/2025",
        location: "TP. Hồ Chí Minh",
        description: "Cuộc thi tìm kiếm Đại sứ Môi trường 2025",
    },
];

export default function UpcomingEvents() {
    return (
        <section className="py-16 sm:py-20 bg-slate-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                {/* ===== BANNER ===== */}
                <div className="relative mb-12 overflow-hidden rounded-2xl">
                    <Image
                        src="/images/events/event-banner.png"
                        alt="Sự kiện sắp diễn ra"
                        width={1400}
                        height={260}
                        className="h-44 sm:h-56 w-full object-cover"
                    />

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                        <h2 className="text-2xl sm:text-3xl font-extrabold drop-shadow-lg">
                            Sự kiện sắp diễn ra
                        </h2>
                        <p className="mt-3 max-w-2xl text-sm drop-shadow">
                            Tham gia các hoạt động môi trường, phong trào xanh và những sự kiện
                            nổi bật do OU Green Campus tổ chức.
                        </p>
                    </div>
                </div>

                {/* ===== MOBILE: HORIZONTAL SCROLL ===== */}
                <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory sm:hidden pb-2">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="
                min-w-[85%]
                snap-center
                flex flex-col
                overflow-hidden
                rounded-xl
                bg-white
                border border-slate-200
              "
                        >
                            <div className="relative h-48 w-full">
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex flex-col p-4">
                                <h3 className="mb-2 text-sm font-semibold text-slate-800 line-clamp-2">
                                    {event.title}
                                </h3>

                                <p className="text-sm text-slate-600">
                                    • {event.description}
                                </p>
                                <p className="text-sm text-slate-600">
                                    • {event.time}
                                </p>
                                <p className="mb-4 text-sm text-slate-600">
                                    • {event.location}
                                </p>

                                <Link
                                    href={`/events/${event.id}`}
                                    className="mt-auto inline-flex justify-center rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white"
                                >
                                    Đăng ký ngay
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ===== TABLET / DESKTOP: GRID ===== */}
                <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="
                flex flex-col
                overflow-hidden
                rounded-xl
                bg-white
                border border-slate-200
                shadow-sm
                transition hover:shadow-md
              "
                        >
                            <div className="relative h-56 w-full">
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex flex-col p-5">
                                <h3 className="mb-3 rounded-lg bg-brand-600 px-3 py-2 text-sm font-bold text-white">
                                    {event.title}
                                </h3>

                                <p className="text-sm text-slate-600">
                                    • {event.description}
                                </p>
                                <p className="text-sm text-slate-600">
                                    • Thời gian: {event.time}
                                </p>
                                <p className="mb-4 text-sm text-slate-600">
                                    • Địa điểm: {event.location}
                                </p>

                                <Link
                                    href={`/events/${event.id}`}
                                    className="mt-auto inline-flex justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                                >
                                    Đăng ký ngay
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* VIEW ALL */}
                <div className="mt-10 text-center">
                    <Link
                        href="/events"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:underline"
                    >
                        Xem tất cả sự kiện →
                    </Link>
                </div>
            </div>
        </section>
    );
}
