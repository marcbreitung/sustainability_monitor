export const formatTime = (timeInMs: number): string => {
    return (timeInMs / 1000).toFixed(2) + " s";
}

export const getLargestContentfulPaint = async (): Promise<number | null> => {
    if (!('PerformanceObserver' in window)) {
        console.warn('PerformanceObserver is not supported in this browser.');
        return null;
    }

    return new Promise((resolve) => {
        const observer = new PerformanceObserver((list) => {
            const entries = list.getEntriesByType('largest-contentful-paint');
            if (entries.length > 0) {
                const lcpEntry = entries[entries.length - 1] as PerformanceEntry & { renderTime: number, loadTime: number };
                resolve(lcpEntry.renderTime || lcpEntry.loadTime);
                observer.disconnect();
            }
        });

        observer.observe({ type: 'largest-contentful-paint', buffered: true });

        // Set a timeout to resolve with null if no LCP entry is found within a reasonable time
        setTimeout(() => {
            resolve(null);
            observer.disconnect();
        }, 5000); // 5 seconds timeout
    });
}