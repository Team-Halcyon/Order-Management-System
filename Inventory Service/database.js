const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./inventory.db', (err) => {
  if (err) {
    console.error('Database connection failed: ', err);
  } else {
    console.log('Database connected');
  }
});

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS inventory (
        itemId INTEGER PRIMARY KEY, 
        name TEXT, 
        quantity INTEGER,
        price REAL)`);

        const stmt = db.prepare("INSERT INTO inventory (name, quantity, price) VALUES (?, ?, ?)");

        const items = [
            ["Laptop", 10, 1500.99],
            ["Smartphone", 25, 799.49],
            ["Headphones", 50, 199.99],
            ["Keyboard", 30, 49.99],
            ["Mouse", 40, 29.99],
            ["Monitor", 20, 299.99],
            ["Printer", 15, 149.99],
            ["Tablet", 18, 499.99],
            ["External Hard Drive", 12, 89.99],
            ["Webcam", 22, 59.99]
        ];
    
        items.forEach(item => stmt.run(item));
    
        stmt.finalize();
});

db.close((err) => {
    if (err) {
        console.error('Error closing the database:', err.message);
    } else {
        console.log('Database connection closed.');
    }
});

module.exports = db;