import auth from '@react-native-firebase/auth';

export const createUser = async (fullName, email, passoword) => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, passoword);
    await user.user.updateProfile({displayName: fullName});
    console.log(user);
    return user;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      return {error: 'The email you entered is already in use.'};
    } else if (error.code === 'auth/inavlid-email') {
        return {error: 'Please enter a valid email address.'};
    }
    console.log(error);
  }
};

export const loginUser = async (email,passoword) => {
    try{
        const response = await auth().signInWithEmailAndPassword(email,passoword);
        const token = await response.user.getIdToken();
        return {
            status: true,
            data: {
                displayName: response.user.displayName,
                email: response.user.email,
                token : token,
            },
        };
    }
    catch(error){
        if(error.code === 'auth/wrong-password'){
            return {status: false, error: 'Please enter a correct password'};
        }
        else if(error.code === 'auth/user-not-found'){
            return {status: false, error: 'The email you enter does not exist. Please create a new account.'};
        }
        return {status: false, error: 'Something went wrong.'};
    }
};
