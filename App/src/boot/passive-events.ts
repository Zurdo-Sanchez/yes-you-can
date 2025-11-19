import { defineBoot } from '#q-app/wrappers';

export default defineBoot(() => {
  // Run only in browser
  if (typeof window === 'undefined' || typeof EventTarget === 'undefined') return;

  try {
    const origAdd = EventTarget.prototype.addEventListener as any;

    // Override to make touchstart/touchmove passive by default unless explicitly set
    EventTarget.prototype.addEventListener = function (type: string, listener: any, options?: any) {
      if (type === 'touchstart' || type === 'touchmove') {
        // If options is a boolean (capture), convert to object preserving capture
        if (typeof options === 'boolean') {
          options = { capture: options, passive: true };
        } else if (options == null) {
          options = { passive: true };
        } else if (typeof options === 'object') {
          if (options.passive === undefined) options.passive = true;
        }
      }
      return origAdd.call(this, type, listener, options);
    };
  } catch (e) {
    // Fail silently — this is a performance hint only
    // eslint-disable-next-line no-console
    console.warn('passive-events boot: could not patch addEventListener', e);
  }
});
