import makeServiceWorkerEnv from "service-worker-mock";

beforeEach(() => {
  Object.assign(global, makeServiceWorkerEnv());
});
