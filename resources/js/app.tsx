import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { initializeTheme } from '@/hooks/use-appearance';
import AppLayout from '@/layouts/app-layout';
import AuthLayout from '@/layouts/auth-layout';
import SettingsLayout from '@/layouts/settings/layout';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) => {
        const pages = import.meta.glob('./pages/**/*.tsx', { eager: true });
        const page = (pages[`./pages/${name}.tsx`] as any).default;

        page.layout =
            page.layout ||
            ((page: any) => {
                switch (true) {
                    case name === 'welcome':
                    case name === 'about-us':
                    case name === 'ibadah':
                        return page;
                    case name.startsWith('auth/'):
                        return <AuthLayout children={page} />;
                    case name.startsWith('settings/'):
                    case name.startsWith('teams/'):
                        return (
                            <AppLayout>
                                <SettingsLayout children={page} />
                            </AppLayout>
                        );
                    default:
                        return <AppLayout children={page} />;
                }
            });

        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <TooltipProvider delayDuration={0}>
                <App {...props} />
                <Toaster />
            </TooltipProvider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on load...
initializeTheme();
