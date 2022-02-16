import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

function init() {
    Sentry.init({
        dsn: "https://4ed57f70e8b1414daabd92767d9b4021@o1145490.ingest.sentry.io/6212922",
        integrations: [new BrowserTracing()],
        release : '1-0-0',
        environment : 'development-test',
        tracesSampleRate: 1.0,
    });
}

function log(error) {
    Sentry.captureException(error);
}

export default {
    init,
    log
};