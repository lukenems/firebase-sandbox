document.addEventListener('DOMContentLoaded', event => {
  const app = firebase.app();

  const db = firebase.firestore();

  
  /* 
  Retrieve multiple documents from single collection 
  --------------------------------------------------
  */

  // const productsRef = db.collection('products');
  // const query = productsRef.where('price', '>', 10)
  // query.get()
  //   .then( products => {
  //     products.forEach(  doc => {
  //       data =  doc.data();
  //       document.write(`${data.name} at $${data.price} <br>`);
  // })
  //     })

  /* 
  Get a post/ record from the firestore/db 
  ---------------------------------------
  */

  // const myPost = db.collection('posts').doc('firstpost');
  // myPost.get()
  //   .then(doc => {
  //     const data = doc.data();
  //     document.write( data.title + `<br>`);
  //     document.write( data.createdAt + `<br>`);
  //     document.write( data.views + `<br>`);
  //   })


  /* 
  onSnapshot will automatically update the page when data in db changes
      - useful for realtime scenaros
  ----------------------------------------------------------------------
  */

  // myPost.onSnapshot(doc => {
  //   const data = doc.data();
  //     document.write( data.title + `<br>`);
  //     document.write( data.createdAt );
  //     document.write( data.views );
  // })


  /* for live updating with form input */

  // myPost.onSnapshot( doc => {
  //   const data = doc.data();
  //   document.querySelector('#title').innerHTML = data.title
  // })


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

function updatePost(e) {
  const db = firebase.firestore();
  const myPost = db.collection('posts').doc('firstpost');
  myPost.update({ title: e.target.value })
}

function uploadFile(files) {
  console.log(firebase)
  const storageRef = firebase.storage().ref();
  const imageRef = storageRef.child('horse.jpg')

  const file = files.item(0);
  const task = imageRef.put(file)

  task.then( snapshot => {
    console.log(snapshot);
    const url = snapshot.downloadURL
    document.querySelector('#imgUpload').setAttribute('src', url)
  })

  // task.snapshot.ref.getDownloadURL().then(downloadURL => {
  //   console.log('file available at ', downloadURL)
  //   const url = downloadURL
  //   document.querySelector('#imgUpload').setAttribute('src', url)
  // })
}