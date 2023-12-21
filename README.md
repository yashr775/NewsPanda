README.md

# NewsPanda

This is a news application which has been created using a third party api from news.org website. The tech stack used in this project includes react and tailwindcss for frontend node for backend postgres as database recoil for state management and prisma as orm.

# Features

In order to use this application user has to register on the website. If he has already registered than he has to login. the data of the user will be stored in the postgres. Once the user is logged in he will have access to all the features of the application. In the begining the application will display only the headlines but it provides user with the option to check the category in which they want to see the news. it has multiple other features as well such as top loading bar ,infinite scroll bar and loading icon.

# Images

Home Page

![Screenshot 2023-12-21 150525](https://github.com/yashr775/NewsPanda/assets/151505210/6e497ea9-0a1b-4b13-b7db-3d9cedbef8a1)

Sign In Page

![Screenshot 2023-12-21 150625](https://github.com/yashr775/NewsPanda/assets/151505210/bd54ee83-ddde-4402-9a62-32d1ed09881d)

Sign Up Page

![Screenshot 2023-12-21 150751](https://github.com/yashr775/NewsPanda/assets/151505210/76d07810-470a-45c2-81b2-5beded0a2011)

After login landing page of the application

![Screenshot 2023-12-21 150858](https://github.com/yashr775/NewsPanda/assets/151505210/25855bab-cfff-4240-ac45-3befc06ef24b)

All the buttons at the top of navbar are functional

# How to set this up locally

Fork the repository and clone it . Run npm install separately on frontend and backend folder to install all the packages . Compile the  project the javascript file will be created in the dest folder. Navigate to dest folder and run node index.js the backend is up and running . Now for frontend create your account on news.org and get your apikey. After getting your key put it in .env file. Once the api key is set run npm run dev the project is up and running .
















