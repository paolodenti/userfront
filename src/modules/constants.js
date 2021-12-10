let config = {};
const getConfig = () => {
    return config;
};

const setConfig = newConfig => {
    config = newConfig;
};

export { getConfig, setConfig };
