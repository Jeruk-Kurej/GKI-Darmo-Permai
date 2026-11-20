export const TAB_BAR_OFFSET = 176;

export function smoothScrollTo(targetY: number, duration = 1200) {
    const startY = window.scrollY;
    const difference = targetY - startY;
    const startTime = performance.now();

    const step = (currentTime: number) => {
        const progress = (currentTime - startTime) / duration;

        if (progress < 1) {
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            window.scrollTo(0, startY + difference * easeProgress);
            requestAnimationFrame(step);
        } else {
            window.scrollTo(0, targetY);
        }
    };

    requestAnimationFrame(step);
}
