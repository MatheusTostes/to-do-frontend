const getConfig = (name, defaultValue = null) => {
  if (window.ENV !== undefined) {
    return window.ENV[name] || defaultValue;
  }

  return process.env[name] || defaultValue;
};

export const getBackendUrl = () => {
  return getConfig("VITE_APP_BACKEND_URL");
};

export const getEnvironment = () => {
  return getConfig("VITE_APP_ENVIRONMENT");
};
