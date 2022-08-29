# Tak To Się Obi

This live demo of this project is available here: [https://taktosieobi2.herokuapp.com/](https://taktosieobi2.herokuapp.com/)

To open this project on your machine just download it and run:

### npm install

**Please go to the /login and type any credentials to login and swich the slider to on/off to turn on and off the editingMode**

Project contains a lot of react features and it's intended to be a form of practise and an example of the developer skills.
I have created it from scrach using mainly google searches (ofc), knownledge from courses and experience.

Most of the sections has comments at the top to briefly explain the content.

Each page has an Action folder which contains form for editing or adding new section, it's then stored in the redux store and a request is sent to the backend API.

This project uses Firebase, my firebase has the write rules disabled and it's uploaded in "testMode". TestMode pulls the data from an API, but the create, update and delete operations are only stored in store (redux) and will be lost after the reload.

there are 2 global variables declared in the index.js - testMode(default = true) and firebase link (firebase link can be changed along with the firebaseConfig.js to change the API)

I'm fully aware that the styling required some polishing and it will be done once the project will be on it's way to production.

There are some things I want to add to this project (like authentication) and it will be added in time. 