# Tak To Się Obi

To open this project on your machine just download it and run:

### npm install

**Please go to the /login and type any credentials to login and swich the slider to on/off to turn on and off the editingMode**

Project contains a lot of react features and it's intended to be a form of practise and an example of the developer skills.
I have created it from scrach using mainly google searches (ofc), knownledge from courses and experience.

Most of the sections has comments at the top to briefly explain the content.

Each page has an Action folder which contains form for editing or adding new section, it's then stored in the redux store and a request is sent to the backend API.

This project uses Firebase, my firebase has the write rules disabled and it's uploaded in "testMode". TestMode pulls the data from an API, but the create, update and delete operations are only stored in store (redux) and will be lost after the reload.

there is a global variables declared in the index.js - testMode(default = true), to make uploading data possible, please add your firebase API (firebase link and firebaseConfig.js)

I'm fully aware that the styling required some polishing and it will be done once the project will be on it's way to production.

There are some things I want to add to this project (like authentication) and it will be added in time. 

Folders explained:  
    - Assets: contains the images  
    - Components:  
        a) Banner - uses the Parallax effect to show a banner on each page  
        b) Gallery - shows a thumbnail list of images and shows fullscreen gallery once clicked  
        c) Login - shows different styles based on the user's input, it will be expanded to support backend authentication, currently is accept any value  
        d) NavBar - shows the navbar depending on the viewport width  
        e) Overlay - it's used when adding or editing content, just a modal with position:fixed  
        f) UploadBar - component that shows the stage of the images being sent to the backend and performs the actual action  
    - Hooks:  
        a) useFetchStore - pull all the data from API, pulling only one data is possible but wasn't implemented  
        b) useInputReducer - custom hook used to show different styles for forms  
    - Pages: Pages are quite straightforward - List, Section and Details just shows the contnet  
        a) Actions - prepares the data to editing (prefilled) or add (empty), onSubmit trigger the POST/PUT/DELETE operations.  
        b) Forms - creates the form for editing or adding content  
        c) Actions.module.css contains styles for all ActionsForm files  
    - Store:  
        a) FetchActions - CRUD actions for the API  
        b) TestUtils - custom store for Redux testing  
        c) Slices - used to fill the store and perform CRUD operations in the store  
        d) uiSlice - hold the states for app loading spinner, fetch(read) errors and states needed to trigger self-closing of the Overlay  
    - Stylus: contains styles used in NavBarWide created with Stylus  
    - UI:  
        a) Output - this was supposed to be "funny" component, allows to put a lot of content in one string and splits it adding styles:  
            - /nl/ - new line  
            - /b/.../b/ - bold  
            - /l/.../l/<rest of the text> /addresses/<actual link> - to insert a link in text  
