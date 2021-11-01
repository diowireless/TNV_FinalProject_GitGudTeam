# Description

Find your favourite movies, save them in your watchlist, rate them and engage in discussions with other users.

In our webapp you will find the following functionalities:
  + User management (sign up, login, unsubscribe, change your info)
  + Location based movie lists (find movies based on their popularity in the location you selected)
  + Watchlist management (add new movies or remove them)
  + Movie rating management (rate a movie, check its average rating across the platform, update your rating)
  + Comments management (post new comments on a movie page, read comments from other users, delete your comments)

# Setup

Our webapp is composed of 4 services. Here are the steps to follow to install it:
  + Create four database named as follows:
  + + moviecomments
  + + movierating
  + + movieusers
  + + thenetfish
  + From the Comments_Dotnet folder launch the project named "FilmComments.RestAPIs"
  + From the UserLogin_Springboot folder launch the main function found in "src/main/java/com/thenetvalue/subTutorial1/SubTutorial1Application.java"
  + From the MovieRating_Laravel folder run the following commands:
  + + composer install
  + + cp .env.example .env
  + + php artisan migrate
  + + php artisan db::seed
  + + php artisan serve
  + From the MainApp_Angular/Backend folder run the following commands:
  + + npm install
  + + npm start
  + From the MainApp_Angular/Frontend folder run the following commands:
  + + npm install
  + + npm start
