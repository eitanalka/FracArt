exports.up = pgm => {
  // function that sets the updatedAt to the current timestamp
  const sql = `
    CREATE OR REPLACE FUNCTION trigger_set_timestamp()
    RETURNS TRIGGER AS $$
    BEGIN
      NEW."updated_at" = NOW();
      RETURN NEW;
    END;
    $$ LANGUAGE plpgsql;
  `;

  pgm.sql(sql);
};

exports.down = pgm => {
  pgm.dropFunction('trigger_set_timestamp', [], {
    ifExists: true
  });
};
