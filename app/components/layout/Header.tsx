import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-brand-50 border-b border-brand-100 shadow-sm">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex h-16 items-center gap-6">
                    {/* LOGO */}
                    <Link href="/" className="flex items-center gap-3">
                        <img
                            src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/475993095_1033790402129044_181110569415252694_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=bzDSNUsE6twQ7kNvwFZRWXi&_nc_oc=Adkly_dNsP1BMaXLDMTSecG0T_1I05kll2nZfiP_4MSGJzQoB7TcKR_XMnJwlzV6d4E&_nc_zt=23&_nc_ht=scontent.fsgn2-11.fna&_nc_gid=hbsqX29t9lTT0TWJ2Vdu3g&oh=00_AfmKJ0xjPgUjQCWAyUi81vMAAWT2Xi1AAceEHLkM86Dveg&oe=6943FFAC"
                            alt="OU Green Campus Logo"
                            className="h-10 w-10 rounded-full object-cover"
                        />
                        <div className="leading-tight">
                            <div className="text-sm font-bold text-brand-800">
                                OU Green Campus
                            </div>
                            <div className="text-xs text-slate-500">
                                Open University HCMC
                            </div>
                        </div>
                    </Link>

                    {/* NAVIGATION */}
                    <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
                        <Link href="/" className="hover:text-brand-700">
                            Trang chủ
                        </Link>
                        <Link href="/images/posts" className="hover:text-brand-700">
                            Bài viết
                        </Link>
                        <Link href="/green-news" className="hover:text-brand-700">
                            Green News
                        </Link>
                        <Link href="/activities" className="hover:text-brand-700">
                            Hoạt động
                        </Link>
                        <Link href="/events" className="hover:text-brand-700">
                            Sự kiện
                        </Link>
                        <Link href="/media" className="hover:text-brand-700">
                            Thư viện
                        </Link>
                    </nav>

                    {/* RIGHT ACTIONS */}
                    <div className="ml-auto flex items-center gap-4">
                        {/* SEARCH */}
                        <div className="hidden md:flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-2 text-sm">
                            <input
                                type="text"
                                placeholder="Tìm kiếm"
                                className="w-40 bg-transparent outline-none placeholder:text-slate-400"
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-brand-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                                />
                            </svg>
                        </div>

                        {/* LOGIN */}
                        <Link
                            href="/login"
                            className="rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
                        >
                            Đăng nhập
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
