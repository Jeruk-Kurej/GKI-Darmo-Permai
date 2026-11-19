import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen w-full flex-col overflow-x-clip bg-white font-display text-ink">
            <Navbar />
            <main className="flex-1 pt-20">{children}</main>
            <Footer />
        </div>
    );
}
