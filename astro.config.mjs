import awsAmplify from 'astro-aws-amplify';
import { defineConfig } from 'astro/config';

export default {
    buildOptions: {
      site: {
        // Other site options...
      },
    },
    // Use the astro-aws-amplify adapter for AWS Amplify
    adapters: [
      '@astrojs/adapter-aws-amplify',
      // Other adapters...
    ],
    // Optional: Define routes for your project
    // routes: {
    //   '/': { type: 'static', file: 'pages/index.astro' },
    //   '/about': { type: 'static', file: 'pages/about.astro' },
    //   // Add more routes as needed
    // },
  };
  
