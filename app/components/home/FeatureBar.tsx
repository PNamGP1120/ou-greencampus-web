import { Leaf, Users, Recycle } from "lucide-react";

const FEATURES = [
    {
        title: "Bảo vệ môi trường",
        description:
            "Lan tỏa lối sống xanh, bảo tồn tài nguyên thiên nhiên và giảm thiểu tác động tiêu cực đến môi trường.",
        icon: Leaf,
    },
    {
        title: "Phục vụ cộng đồng",
        description:
            "Kết nối sinh viên với các hoạt động tình nguyện, vì cộng đồng và phát triển xã hội bền vững.",
        icon: Users,
    },
    {
        title: "Phát triển bền vững",
        description:
            "Xây dựng tư duy dài hạn, cân bằng giữa môi trường, xã hội và giáo dục trong mọi hoạt động.",
        icon: Recycle,
    },
];

export default function FeatureBar() {
    return (
        <section className="py-14 sm:py-16 bg-slate-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {FEATURES.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.title}
                                className="
                  group relative
                  rounded-2xl
                  bg-white
                  border border-slate-200
                  px-6 sm:px-8
                  py-8 sm:py-10
                  text-center
                  transition
                  hover:-translate-y-1 hover:shadow-md
                "
                            >
                                {/* ICON */}
                                <div className="mb-5 flex justify-center">
                                    <div className="
                    flex h-16 w-16 sm:h-20 sm:w-20
                    items-center justify-center
                    rounded-full
                    bg-brand-100
                    text-brand-600
                  ">
                                        <Icon className="h-8 w-8 sm:h-10 sm:w-10" />
                                    </div>
                                </div>

                                {/* TITLE */}
                                <h3 className="mb-3 text-base sm:text-lg font-bold text-slate-800">
                                    {item.title}
                                </h3>

                                {/* DESCRIPTION */}
                                <p className="text-sm leading-relaxed text-slate-600">
                                    {item.description}
                                </p>

                                {/* Hover highlight */}
                                <div
                                    className="
                    pointer-events-none absolute inset-0
                    opacity-0 group-hover:opacity-100
                    transition
                    bg-gradient-to-br from-brand-50/60 to-transparent
                  "
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
