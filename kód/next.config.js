module.exports = {
        webpack: (
          config,
          { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
        ) => {
            if (!isServer) {
                config.resolve.fallback.fs = false;
              }
          // Important: return the modified config
          return config
        }
}
