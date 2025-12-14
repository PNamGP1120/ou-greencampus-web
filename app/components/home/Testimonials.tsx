const testimonials = [
    {
        name: "Trần Minh Quân",
        role: "Sinh viên OU",
        content:
            "OU Green Plus giúp mình hình thành lối sống xanh và ý thức bảo vệ môi trường."
    },
    {
        name: "Nguyễn Thị Trà",
        role: "Thành viên CLB",
        content:
            "Các hoạt động tái chế và phân loại rác truyền cảm hứng sống xanh mỗi ngày."
    },
    {
        name: "Lê Anh Đức",
        role: "Sinh viên OU",
        content:
            "CLB không chỉ ý nghĩa mà còn giúp mình kết nối với nhiều bạn cùng chí hướng."
    },
    {
        name: "Phạm Khánh My",
        role: "Sinh viên OU",
        content:
            "Greennews rất dễ đọc, giúp mình theo dõi hoạt động xanh thuận tiện hơn."
    }
];
export default function Testimonials() {
    return (
        <section className="py-16 bg-slate-50">
            {/* Header */}
            <div className="mx-auto max-w-7xl px-6 text-center mb-10">
                <h2 className="text-2xl font-bold text-slate-900">
                    Cảm nhận từ sinh viên
                </h2>
                <p className="mt-2 text-sm text-slate-600 max-w-xl mx-auto">
                    Chia sẻ chân thực từ các thành viên OU Green Plus
                </p>
            </div>

            {/* MOBILE: Horizontal Scroll */}
            <div className="sm:hidden">
                <div className="flex gap-4 overflow-x-auto px-6 snap-x snap-mandatory scrollbar-hide">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="
                min-w-[80%]
                snap-center
                rounded-xl
                bg-white
                p-4
                border border-slate-200
                shadow-sm
              "
                        >
                            <p className="text-sm text-slate-700 leading-relaxed line-clamp-3">
                                “{t.content}”
                            </p>

                            <div className="mt-4">
                                <p className="font-semibold text-slate-900 text-sm">
                                    {t.name}
                                </p>
                                <p className="text-xs text-slate-500">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* DESKTOP: Grid */}
            <div className="hidden sm:block">
                <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="
                rounded-xl
                bg-white
                p-6
                border border-slate-200
                shadow-sm
                hover:shadow-md
                transition
              "
                        >
                            <p className="text-sm text-slate-700 leading-relaxed">
                                “{t.content}”
                            </p>

                            <div className="mt-4">
                                <p className="font-semibold text-slate-900">
                                    {t.name}
                                </p>
                                <p className="text-xs text-slate-500">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
