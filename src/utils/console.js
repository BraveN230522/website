import Bugsnag from '@bugsnag/js';

const releaseStage = 'development';

if (!Bugsnag._client)
  Bugsnag.start({
    apiKey: 'f33dfac01b0fb3217eed5ba81001bd2e',
    appVersion: '1.0.0',
    releaseStage,
  });

export default {
  log() {
    if (!process.browser) return;
    this.notify('log', arguments);
    window.console.log(...arguments);
  },
  info() {
    if (!process.browser) return;
    // reserve info for browser console only logging
    // this.notify(item, 'info');
    window.console.info(...arguments);
  },
  warn() {
    if (!process.browser) return;
    this.notify('warn', arguments);
    window.console.warn(...arguments);
  },
  error(item) {
    if (!process.browser) return;
    this.notify('error', arguments);
    window.console.error(...arguments);
  },
  notify: (severity, args) => {
    // send to bugsnag for environments other than development
    if (releaseStage === 'development') return;
    if (args[0] instanceof Error) {
      return Bugsnag.notify(args[0], event => {
        event.severity = severity;
        event.addMetadata('details', args);
      });
    }
    if (typeof args[0] === 'string')
      return Bugsnag.notify(new Error(args[0]), event => {
        event.severity = severity;
        event.addMetadata('details', args);
      });
    Bugsnag.notify(new Error('General error'), event => {
      event.severity = severity;
      event.addMetadata('details', args);
    });
  },
};
