// ============================================================
// PM2 Ecosystem Config — ACS Next.js Web
// Usage: pm2 start ecosystem.config.js --only acs-web
// ============================================================

module.exports = {
  apps: [
    // Production — main branch
    {
      name: "acs-web",
      script: ".next/standalone/server.js",
      cwd: "/var/www/acs-web",
      instances: 2,
      exec_mode: "cluster",
      watch: false,
      max_memory_restart: "800M",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        HOSTNAME: "0.0.0.0",
      },
      out_file: "/var/log/pm2/acs-web-out.log",
      error_file: "/var/log/pm2/acs-web-err.log",
      time: true,
    },
    // Test / Staging — test branch
    {
      name: "test-acs-web",
      script: ".next/standalone/server.js",
      cwd: "/var/www/test-acs-web",
      instances: 1,
      exec_mode: "fork",
      watch: false,
      max_memory_restart: "500M",
      env: {
        NODE_ENV: "staging",
        PORT: 3001,
        HOSTNAME: "0.0.0.0",
      },
      out_file: "/var/log/pm2/test-acs-web-out.log",
      error_file: "/var/log/pm2/test-acs-web-err.log",
      time: true,
    },
  ],
};
