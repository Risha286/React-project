document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const formData = new FormData(form);
      const username = formData.get('username');
      const password = formData.get('password');
  
      // Assuming you're using MongoDB with Node.js backend for saving data
      saveUserData(username, password);
    });
  
    function saveUserData(username, password) {
        const { MongoClient } = require('mongodb');

        // Connection URI
        const uri = 'mongodb://localhost:27017/';
        const dbName = 'mydatabase'; // Replace with your database name
        
        document.addEventListener('DOMContentLoaded', function() {
          const form = document.getElementById('loginForm');
        
          form.addEventListener('submit', function(event) {
            event.preventDefault();
        
            const formData = new FormData(form);
            const username = formData.get('username');
            const password = formData.get('password');
        
            saveUserData(username, password);
          });
        });
        
        async function saveUserData(username, password) {
          const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        
          try {
            await client.connect();
        
            const database = client.db(dbName);
            const collection = database.collection('users');
        
            // Insert user data
            const result = await collection.insertOne({ username, password });
            console.log('User data inserted:', result.ops[0]);
          } catch (error) {
            console.error('Error inserting user data:', error);
          } finally {
            await client.close();
          }
        }
        
      console.log('Saving user:', username, password);
    }
  });

  