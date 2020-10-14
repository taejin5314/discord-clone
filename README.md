# Project: Discord clone

This project is clone coding for discord by using react, redux and firebase.

## 2. Initializing project

`npx create-react-app my-app --template redux`: This command is creating react app as the name of my-app. It has the template of redux so that I could use reducer easily.

## 1. Login Page

I made login page using the discord logo, and firebase auth. As I enabled login with google account, users can login easily with their google account.

![loginpage](https://user-images.githubusercontent.com/21342802/96040954-18630780-0e39-11eb-9639-9aabb9c35a50.png)

When the user click sign in button,

![googlelogin](https://user-images.githubusercontent.com/21342802/96041441-d4243700-0e39-11eb-8f64-0854583ccdde.png)

## 2. Main Page

When the user logged in with his/her proper account, it will show the main page containing sidebar and chat.

![mainpage](https://user-images.githubusercontent.com/21342802/96041626-1c435980-0e3a-11eb-9e8d-94fc972cc391.png)

I used display flex and some css styling methods, so that it looks similar to discord. <br />

When the user enter a message on input box and push the enter button, the message will be sent to firestore by using reducer.

## 3. Deployment

It was very easy to deploy by using firebase. <br /><br />
`firebase init`: Initializing firebase hosting server. I built my app in build folder, the addess should be build folder. <br />
`npm run build`: Build the project in designated folder. <br />
`firebase deploy`: Deploy the app.

## Project Link

The below is the link to my discord clone project. <br />

https://discord-clone-b40ec.web.app/

## Thank you.
