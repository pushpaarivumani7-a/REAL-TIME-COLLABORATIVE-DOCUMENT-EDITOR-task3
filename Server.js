
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  
  
  const app = firebase.initializeApp(firebaseConfig);
  const database = firebase.database(app);
  

  const editor = document.getElementById('editor');
  
  
  const documentRef = database.ref('document');

  editor.addEventListener('input', () => {
    const content = editor.value;
    documentRef.set(content);  // Send the updated content to Firebase
  });
  

  documentRef.on('value', (snapshot) => {
    const content = snapshot.val();
    if (content !== editor.value) {
      editor.value = content;  // Update the editor if the content in Firebase changes
    }
  });
  
