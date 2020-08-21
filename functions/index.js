const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello Aswin!!!");
// });

const createNotification = (notification) => {
    return admin.firestore().collection('notifications').add(notification).then(doc=>
        console.log('Notification added', doc)
    )
}

exports.projectCreated = functions.firestore.document('projects/{projectId}').onCreate(doc=>{
    const project = doc.data();
    // console.log('proj string: '+ JSON.stringify(project));
    const notification = {
        content: 'Added a new project',
        user: `${project.authorFirstName} ${project.authorLastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    }
    return createNotification(notification);
})

exports.userJoined = functions.auth.user().onCreate(user=>{      //why use auth instead of using users directly??
    return admin.firestore().collection('users').doc(user.uid).get().then(doc=>{
        const newUser = doc.data();
        // console.log('userJoined data: ' + JSON.stringify(newUser))
        const notification={
            content: 'Joined the party', 
            user: `${newUser.firstName} ${newUser.lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification);
    })
})