import Image from "next/image";
import Link from "next/link";

const posts = [
    {
        id: 1,
        title: "Trồng cây gây rừng – Ươm mầm hạnh phúc",
        excerpt:
            "Sau khi hoàn thành hoạt động dọn rác bãi biển, nhà Green tiếp tục hành trình trồng cây và lan tỏa giá trị sống xanh.",
        image: "/images/posts/post1.jpg",
    },
    {
        id: 2,
        title: "Hoạt động hãy làm sạch biển",
        excerpt:
            "Trong khuôn khổ Beach Cleanup Day 2025, hoạt động đã nhận được sự tham gia tích cực của sinh viên OU.",
        image: "/images/posts/post2.jpg",
    },
    {
        id: 3,
        title: "Sức mạnh cộng đồng vì đại dương",
        excerpt:
            "Không chỉ sống xanh cho riêng mình, mà cùng cộng đồng gieo mầm bền vững cho môi trường biển.",
        image: "/images/posts/post3.jpg",
    },
    {
        id: 4,
        title: "Ngày hội OU chọn sống xanh",
        excerpt:
            "Ngày hội khép lại nhưng dư âm sống xanh vẫn còn lan tỏa mạnh mẽ trong cộng đồng sinh viên OU.",
        image: "/images/posts/post4.jpg",
    },
];

export default function LatestPosts() {
    return (
        <section className="py-14 sm:py-16 bg-slate-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                {/* HEADER */}
                <div className="mb-10 text-center">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
                        Bài viết mới nhất
                    </h2>
                    <p className="mt-2 text-sm text-slate-500 max-w-2xl mx-auto">
                        Cập nhật tin tức, sự kiện và những câu chuyện xanh tại OU Green Campus
                    </p>
                </div>

                {/* MOBILE: HORIZONTAL SCROLL */}
                <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory sm:hidden pb-2">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="
                min-w-[80%]
                snap-center
                flex flex-col
                overflow-hidden
                rounded-xl
                bg-white
                border border-slate-200
              "
                        >
                            <div className="relative h-40 w-full">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex flex-col p-4">
                                <h3 className="mb-2 line-clamp-2 text-sm font-semibold text-slate-800">
                                    {post.title}
                                </h3>

                                <p className="mb-4 line-clamp-3 text-sm text-slate-600">
                                    {post.excerpt}
                                </p>

                                <Link
                                    href={`/posts/${post.id}`}
                                    className="mt-auto text-sm font-medium text-brand-600"
                                >
                                    Xem chi tiết →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* DESKTOP / TABLET: GRID */}
                <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {posts.map((post) => (
                        <div
                            key={post.id}
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
                            <div className="relative h-44 w-full">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex flex-col p-5">
                                <h3 className="mb-2 line-clamp-2 text-sm font-semibold text-slate-800">
                                    {post.title}
                                </h3>

                                <p className="mb-4 line-clamp-3 text-sm text-slate-600">
                                    {post.excerpt}
                                </p>

                                <Link
                                    href={`/posts/${post.id}`}
                                    className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:underline"
                                >
                                    Xem chi tiết
                                    <span>→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* VIEW ALL */}
                <div className="mt-10 text-center">
                    <Link
                        href="/posts"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:underline"
                    >
                        Xem tất cả bài viết →
                    </Link>
                </div>
            </div>
        </section>
    );
}
