const config = {
    development: {
      apiUrl: process.env.NEXT_PUBLIC_APP_DEVELOPMENT_API_URL,
      domianUrl: process.env.NEXT_PUBLIC_APP_DEVELOPMENT_DOMAIN_URL,
    },
  
    production: {
      apiUrl: process.env.NEXT_PUBLIC_APP_PRODUCTION_API_URL,
    //   domianUrl: process.env.REACT_APP_PRODUCTION_DOMAIN_URL,
    },
  }
  
  export default config