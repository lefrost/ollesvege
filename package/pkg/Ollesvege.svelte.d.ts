import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        sample_text?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {};
    bindings?: string;
};
export type OllesvegeProps = typeof __propDef.props;
export type OllesvegeEvents = typeof __propDef.events;
export type OllesvegeSlots = typeof __propDef.slots;
export default class Ollesvege extends SvelteComponent<OllesvegeProps, OllesvegeEvents, OllesvegeSlots> {
}
export {};
