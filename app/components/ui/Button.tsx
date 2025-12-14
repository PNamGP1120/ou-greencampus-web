export default function Button({ children }: { children: React.ReactNode }) {
    return (
        <button className="bg-brand-600 text-white px-4 py-2 rounded-lg">
            {children}
        </button>
    );
}
