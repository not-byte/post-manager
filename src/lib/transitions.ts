import { cubicInOut } from "svelte/easing"

export function scaleY(node: any, { delay = 0, duration }: { delay?: number, duration: number }) {
    return {
        duration,
        delay,
        css: (t: number) => {
            const eased = cubicInOut(t)

            return `
                transform-origin: bottom;
                transform: scaleY(${eased});
                opacity: ${eased};
            `
        }
    }
}

export function lightSwitch(node: any, { delay = 0, duration, x }: { delay?: number, duration: number, x: number }) {
    return {
        duration,
        x,
        delay,
        css: (t: number) => {
            const dir = x >= 0 ? 1 : -1

            return `
                transform: rotate(${ ( 90 - (t * 90) ) * dir }deg) translateX(${ x - (t * x) }px);
                opacity: ${ t };
            `
        }
    }
}