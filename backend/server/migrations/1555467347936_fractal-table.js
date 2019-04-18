exports.up = pgm => {
  pgm.createTable('fractal', {
    id: 'id',
    owner_id: {
      type: 'int',
      notNull: true,
      references: '"user"',
      onDelete: 'cascade'
    },
    title: {
      type: 'varchar(50)',
      notNull: true
    },
    settings: {
      type: 'json',
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

  // trigger to set updatedAt to current time when a fractal is updated
  pgm.createTrigger('fractal', 'set_timestamp', {
    when: 'BEFORE',
    operation: 'UPDATE',
    function: 'trigger_set_timestamp',
    level: 'ROW'
  });
};

exports.down = pgm => {
  pgm.dropTable('fractal');
};
