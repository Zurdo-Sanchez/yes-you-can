import { defineBoot } from '#q-app/wrappers';

export default defineBoot(() => {
  // Run only in browser
  if (typeof window === 'undefined' || typeof EventTarget === 'undefined') return;

  try {
    // Preserve a safe wrapper around the original method to avoid unbound-method lint errors
    const origAdd = function (
      this: EventTarget,
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions,
    ) {
      return EventTarget.prototype.addEventListener.call(this, type, listener, options as any);
    };

    // Override to make touchstart/touchmove passive by default unless explicitly set
    EventTarget.prototype.addEventListener = function (
      this: EventTarget,
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions,
    ) {
      if (type === 'touchstart' || type === 'touchmove') {
        // If options is a boolean (capture), convert to object preserving capture
        if (typeof options === 'boolean') {
          options = { capture: options, passive: true };
        } else if (options == null) {
          options = { passive: true };
        } else if (typeof options === 'object') {
          const opts = options as AddEventListenerOptions & { passive?: boolean };
          if (opts.passive === undefined) opts.passive = true;
          options = opts;
        }
      }

      return origAdd.call(this, type, listener, options);
    };
  } catch (e) {
    // Fail silently — this is a performance hint only
    console.warn('passive-events boot: could not patch addEventListener', e);
  }
});
