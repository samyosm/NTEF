# Hazard Chat

Our mobile and web application allows you to connect with people from around the world for a random chat. Simply open the app, press start, and you'll be connected with a new chat partner. Whether you're looking to make a new friend, practice a language, or just pass the time, Chat Roulette is the perfect way to connect with others.

# How does it work?

If you would like to know how Hazard Chat has been built, i.e. with what tools and technologies, I will describe such things below. I will do that because first, that will be how I'll define what stack I will use, and two, because I've always found it difficult to contribute to a project when I do not know how it runs.

## Back-end

Here I will describe how we will provide an api, distribute the messages, store our data, authenticate users, and deploy.

### Web API
I will be writing the Web API using **Java Spring Boot** and **GraphQL**. I've never used GraphQL, and I am inexperienced with Spring Boot, so I would like to exercise myself.

### Messages
Distributing the messages will be done using **socket.io** because it is very fast, and an easy solution to a chat app. 

### Storage
To store the messages, host the waiting rooms in which users will be put it to be then coupled to a partner, and to store any other data, we will use **MongoDB** because it is fast, easy to work with, and easy to deploy. 

Firebase could've been a better solution, but I would like to deploy and scale manually. Finally, 

### Authentication
For authenticating users, I think I will use **Auth0**. I haven't really worked with it, so it will be to learn it. 

### Deploy
We will be deploying our backend in docker containers using GitHub workflow. We will have two types of deployment: staging and main. They will be both production builds, however, staging will be like a beta to test for problems in the production build.

## Front-end

We will use NextJS (Typescript), Tailwind CSS, and a custom fetching SDK for the Front-end.

## SDK

Our typescript SDK will allow us to set up real time fetching for the Front-end. It will be published to the world.  
