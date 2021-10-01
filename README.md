# GitHub-powered Dashboard

This project was developed using React, Typescipt and elements from Material UI

## Instructions to Run

To run this project, run the following command in the root folder of the application:
```
npm start
```

## Important Information

I had some difficulties understanding the query structure of the GitHub API and, because of that, I'm not sure the results for the repositories are correct. They are different than when I searched on the GitHub interface. The users, however, appear to be correct.

Since I'm using this API unauthorized in my project, there is a limit of requests per hour and, because of that, I decided to cache the results.
I'm saving the queries results in the localStorage with a TTL of 1 hour. That way, if the query has already beem made in the last hour, the request is not going to be send and the application will get the result from the localStorage.

Initially, my search bar was going to be dynamical, the searches were going to happen in real time. However, because of the limit of requests, I decided to only send the search request to the GitHub API when the user confirms the search pressing Enter on the keyboard.

Because of the time that it took me to fully understand how to implement the functionalities, I didn't have time to make the interface fully following the prototypes. So I decided to try and show the same information and have the same functionality of redirect to the users page even if it doesn't look the same.
In the end, the cards look very different from what I intended but they have all the information asked and when the user's card is clicked it redirect to the user's GitHub profile. However, the appearance doesn't change on hover, only a small change in color to indicate there is a possible action and the card is clickable.

## Next Steps

I made a list of things I wanted to accomplish in this project but, as previously mentioned, I couldn't do it all. But I plan to later implement those things so I can have this Dashboard with all the information been presented the way it was supposed to.

The next steps on my list are:
 - Return an error modal when one of the requests go wrong (now it just doesn't return anything)
 - Ajust the visuals of the cards (mainly css related)
 - Develop tests for all the components and functionalities 

## Conclusion

Even with the problems I mentioned, I thought this project was a lot of fun to develop and I learned a lot.
I improved my use of Hooks, understood better how typescript works and used the Material UI library for the first time, discovering that there is a lot of nice and useful components. 

