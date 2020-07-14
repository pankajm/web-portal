# User Web Portal

This is a simple user we portal. You can perform all CRUD operations (Add, edit update, delete) on this portal. This portal also includes Signin and SignUp features using fake RESTfull services.  


## Technologies used 
The application is created using create-react-app. Mainly a UI application built in React (16.13.1) with support of few third party libraries (Details can be found in package.json). 

Each functionality is a different react component. I have tried to make components as reusable as possible to be used in multiple places in application in future. 


## Running the app

1. Clone the project using following command - 

   *git clone https://github.com/pankajm/web-portal.git*

2. Once cloned to local machine, navigate to web-portal directory and run following command 

   *npm install* 

   This will install all the dependencies. 

2. Run the app using following command 

   *npm start*

3. This will start the server and application will be opened in browser 

####(P.S. By default the app starts on port 3000 however If the port is busy it will ask you to run the app on other port)

4. Once app is launched, it will pop up login page by default as no action apart from calculator can be performed without login. So login is mandatory to perform any action on users data. You can login with following credentials - 

*Username - eve.holt@reqres.in*
*Password - test1234*
(or any random password will work, as this is just a fake API service to simulate signin feature, however Username must be same).

5. Once logged in you can perform CRUB operations on User data. 


## Features 
1. Add User - Add new user to existing list
2. Delete User - Delete an existing user
3. Update user - update user by clicking the blue link on email field of any user
  (This will open up user details form where you can update details)
4. Pagination - The fake api service currently returns only 12 users devided in 2 pages. The pagination component at the bottom of the page can be used to navigate between pages.
5. Calculator - Simple calculator that can be used without login.
6. Profile - This component is just a placeholder to show that user has logged in. 
7. Logout - Signout from the currently loggedin session.

### End 
