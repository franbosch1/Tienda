module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ci1kkb0rddl1m6hjjrig-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_72qe'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', '4K2dNXv9mIswHVK3BGR9NYHOiZ0UVIvi'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
