exports.up = pgm => {
  // extension that allows generation of uuids
  const sql = `
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  `;

  pgm.sql(sql);
};

exports.down = pgm => {
  pgm.dropExtension('uuid-ossp');
};
