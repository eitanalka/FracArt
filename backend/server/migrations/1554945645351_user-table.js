exports.up = pgm => {
  pgm.createTable('user', {
    id: 'id',
    username: {
      type: 'varchar(25)'
    },
    email: {
      type: 'varchar(254)',
      notNull: true
    },
    google_id: {
      type: 'decimal(21, 0)',
      unique: true,
      notNull: true
    },
    created_at: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp')
    },
    updated_at: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp')
    }
  });

  pgm.createIndex('user', 'google_id');

  // trigger to set updatedAt to current time when a user is updated
  pgm.createTrigger('user', 'set_timestamp', {
    when: 'BEFORE',
    operation: 'UPDATE',
    function: 'trigger_set_timestamp',
    level: 'ROW'
  });
};

exports.down = pgm => {
  pgm.dropTable('user');
};
