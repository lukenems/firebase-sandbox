document.addEventListener('DOMContentLoaded', function() {
  const app = firebase.app();

  const db = firebase.firestore();

  const myPost = db.collection('posts').doc('firstpost');


  /* Get a post/ record from the firestore/db */
  // myPost.get()
  //   .then(doc => {
  //     const data = doc.data();
  //     document.write( data.title + `<br>`);
  //     document.write( data.createdAt );
  //     document.write( data.views );
  //   })
  /* onSnapshot will automatically update the page when data in db changes
  - useful for realtime scenaros
  */
  myPost.onSnapshot(doc => {
    const data = doc.data();
      document.write( data.title + `<br>`);
      document.write( data.createdAt );
      document.write( data.views );
  })


});

function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)
    .then(result => {
      const user = result.user;
      document.write(`Hello ${user.displayName}`);
      console.log(user)
    })
}