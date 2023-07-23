# Run the Website 

There are 2 ways to run this file, 

## Using docker
1. Make sure that before doing anything, that you are running the server in order to be able to access the user accounts.
2. The easiest way is to run the docker file by building the image by using "docker build . -t 'image name'".
3. Once the image is build, then run the image and then open the container which will allow you to access the website on localhost.

## Installing all imports in your download
1. Make sure that before doing anything, that you are running the server in order to be able to access the user accounts.
2. The longer way is to install all the dependencies that were used in the client directory, which will ultimately appear as node_modules, since Github didn't allow 4000 plus files to be added, I used a dockerfile to allow my website to be uploaded to github.
3. Make sure to have npm set up in your 
4. In the command line or terminal, input npm i react-redux @reduxjs/toolkit redux-persist react-dropzone,dotenv formik yup react-router-dom@6 @mui.material @emotion/react @emotion/styled @mui/icons-material
