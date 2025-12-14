import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t bg-slate-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {/* ===== BRAND ===== */}
                    <div>
                        <div className="mb-4 flex items-center gap-3">
                            <Image
                                src="/images/logo.jpg"
                                alt="OU Green Campus"
                                width={64}
                                height={64}
                                className="rounded-full"
                            />
                            <div>
                                <p className="font-bold text-slate-800">
                                    OU Green Campus
                                </p>
                                <p className="text-xs text-slate-500">
                                    Xây dựng · Kết nối · Lan tỏa
                                </p>
                            </div>
                        </div>

                        <p className="text-sm text-slate-600">
                            Email: ougreenplusclub@ou.edu.vn
                        </p>
                        <p className="mt-1 text-sm text-slate-600">
                            97 Võ Văn Tần, Quận 3, TP. Hồ Chí Minh
                        </p>

                        {/* SOCIAL */}
                        <div className="mt-4 flex gap-4 text-slate-500">
                            <Link href="#" aria-label="LinkedIn" className="hover:text-brand-600">
                                <Linkedin size={18} />
                            </Link>
                            <Link href="#" aria-label="Facebook" className="hover:text-brand-600">
                                <Facebook size={18} />
                            </Link>
                            <Link href="#" aria-label="Instagram" className="hover:text-brand-600">
                                <Instagram size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* ===== QUICK LINKS ===== */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold text-slate-800">
                            Liên kết nhanh
                        </h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li>
                                <Link href="/news" className="hover:text-brand-600">
                                    Bài viết
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-brand-600">
                                    Blog CSR
                                </Link>
                            </li>
                            <li>
                                <Link href="/events" className="hover:text-brand-600">
                                    Sự kiện
                                </Link>
                            </li>
                            <li>
                                <Link href="/greennews" className="hover:text-brand-600">
                                    Greennews
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="hover:text-brand-600">
                                    Thư viện ảnh
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* ===== NEWSLETTER ===== */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold text-slate-800">
                            Nhận bản tin
                        </h4>
                        <p className="mb-4 text-sm text-slate-600 max-w-sm">
                            Nhận thông tin về các hoạt động xanh và sự kiện nổi bật mỗi tháng.
                        </p>

                        <form className="flex w-full max-w-sm overflow-hidden rounded-lg border bg-white">
                            <input
                                type="email"
                                placeholder="Email của bạn"
                                className="flex-1 px-3 py-2 text-sm outline-none"
                            />
                            <button
                                type="submit"
                                className="bg-brand-600 px-4 text-sm font-semibold text-white hover:bg-brand-700"
                            >
                                Đăng ký
                            </button>
                        </form>
                    </div>
                </div>

                {/* ===== COPYRIGHT ===== */}
                <div className="mt-12 border-t pt-6 text-center text-xs text-slate-500">
                    © 2025 OU Green Campus · All Rights Reserved
                </div>
            </div>
        </footer>
    );
}
