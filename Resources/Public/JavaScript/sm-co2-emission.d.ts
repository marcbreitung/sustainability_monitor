import type { Components, JSX } from "../../../Build/sustainability-monitor/dist/types/components";

interface SmCo2Emission extends Components.SmCo2Emission, HTMLElement {}
export const SmCo2Emission: {
    prototype: SmCo2Emission;
    new (): SmCo2Emission;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
