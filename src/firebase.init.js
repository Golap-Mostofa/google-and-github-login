// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD56Rnq8xepjX0_NCq3Xg4FI_wKVVZsuGM",
  authDomain: "fir-intregretion-1b8dc.firebaseapp.com",
  projectId: "fir-intregretion-1b8dc",
  storageBucket: "fir-intregretion-1b8dc.appspot.com",
  messagingSenderId: "1090402955721",
  appId: "1:1090402955721:web:219329e55631f927083818"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app

















// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

//  Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBb_JxEQaGQnHLzmZjTuqGyGfvwkuiQ76I",
//   authDomain: "and-github-login.firebaseapp.com",
//   projectId: "and-github-login",
//   storageBucket: "and-github-login.appspot.com",
//   messagingSenderId: "1047204329393",
//   appId: "1:1047204329393:web:49bc4f7a026bcfa35cef90"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;



// const googleProvider = new GoogleAuthProvider();
//   const githubProvider = new GithubAuthProvider();
//   const facebookProvider = new FacebookAuthProvider();
//   const [user, setUser] = useState({})

//   const hendelGithubLogin = () => {
//     signInWithPopup(auth,githubProvider)
//     .then(result=>{
//       const user = result.user
//       console.log(user);
//     }).catch(e=>{
//       console.error(e);
//     })
//   }

//   const hendeGoogleLogin = () => {

//     signInWithPopup(auth, googleProvider)
//       .then(result => {
//         const user = result.user;
//         setUser(user)
//         console.log(user);
//       })
//       .catch(error => {
//         console.error(error);
//       })
//   }

//   const hendelFacebookLogin=()=>{
//     signInWithPopup(auth,facebookProvider)
//     .then(result=>{
//       const user = result.user;
//       console.log(user);
//     }).catch(e=>{
//       console.error(e);
//     })
//   }

//   import app from "./firebase.init";


// const auth = getAuth(app);


// import { GlobeIcon } from '@heroicons/react/solid'
// import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { useState } from 'react';


// <h2 className='text-primary'>Sin in Width Google</h2>
//       <div className='fs-5 p-3'>
//         <button onClick={hendeGoogleLogin} className='bg-gray text-primary  border-0 ml-2'>google
//         </button>
//         <button onClick={hendelGithubLogin} className='bg-gray text-primary border-0 '>github</button>
//         <button onClick={hendelFacebookLogin} className='bg-gray text-primary border-0 '>Facebook</button>
//       </div>
//       <div>
//         <img src='' alt="" />
//         <h2>{user.displayName}</h2>
//       </div>