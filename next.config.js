module.exports = {
    async rewrites() {
        return process.env.NODE_ENV === "production"
            ? []
            : [
                  {
                      source: "/api/:slug*",
                      destination: "https://flame.airlive.co.uk/:slug*",
                  },
              ];
    },
};
