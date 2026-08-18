import { co2 } from '@tgwf/co2';

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

export const calculateSizeOfData = (): Promise<{ transfered: number, cached: number | null }> => {
    return new Promise((resolve) => {
        const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;

        let transferSize = navigation?.transferSize ?? 0;
        let cachedSize = navigation?.transferSize === 0 && (navigation?.encodedBodySize ?? 0) > 0 ? navigation.encodedBodySize : 0;
        let timer: number;

        const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries() as PerformanceResourceTiming[];
            for (const entry of entries) {
                transferSize += entry.transferSize;
                if (entry.transferSize === 0 && entry.encodedBodySize > 0) {
                    cachedSize += entry.encodedBodySize;
                }
            }
            clearTimeout(timer);
            timer = window.setTimeout(() => {
                observer.disconnect();
                resolve({ transfered: transferSize, cached: cachedSize > 0 ? cachedSize : null })
            }, 100);
        });

        observer.observe({ type: "resource", buffered: true });
    });
}

export const calculateEmission = (size: number): Promise<number> => {
    const swd = new co2({ model: "swd" })
    return new Promise(async (resolve) => {
        const emissions = swd.perByte(size) as number;
        resolve(emissions);
    });
}

export const formatSize = (bytes: number, locales: Intl.LocalesArgument) => {
    return new Intl.NumberFormat(locales, {
        style: 'unit',
        unit: 'kilobyte',
        unitDisplay: 'short',
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
    }).format(bytes / 1024);
};

export const formatGram = (gram: number, locales: Intl.LocalesArgument) => {
    return new Intl.NumberFormat(locales, {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3,
        style: 'unit',
        unit: 'gram',
    }).format(gram);
}