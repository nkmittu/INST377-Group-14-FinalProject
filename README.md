# Multifaceted Artists Information
### Description
When someone discovers a new artist they might be inspired to try to find out more information about their artists along with ways to support them. To address having to google and find out by scouring multiple websites we have made it so that you can get all of the information from our website where you can search for anything from basic information to history to brands related to the artists.

### Link to Website
https://inst377-group-14.herokuapp.com/

### Target Browsers
- All browsers available on PC or Mac

### Link to Developer Manual
https://github.com/nkmittu/INST377-Group-14-FinalProject#developer-manual

# Developer Manual

### How to install application and all depndencies
1. Cone this repository through Github Desktop or through Terminal
2. Open repository in VSCode Terminal or Terminal application.
3. Type npm install or npx nodemon into terminal window and run.
4. The application should now be set to use.

### How to run application on a server
1. Open repository in VSCode terminal or Terminal
2. Run npm start.
3. In a web browser go to url: http://localhost:3000/

### Server APIs
/artists - API route for basic artist information
- GET - Gets all entries in the artists table.
- POST - Obtains an artist name and id from request and changes the name to the request's name at the request's id.
- PUT - Obtains an artist id from request and adds the new artist id to the artist table.
- DELETE - Obtains an artist id from requests and deletes an entry from artist table based on the request's artist id

/companies - API route for artist information relating to companies they have worked with
- GET - Gets all entries in the companies table.
- POST - Obtains a company name and artist id from request and changes the comapny name to the request's name at the request's id.
- PUT - Obtains a company id, artist id, company name and industry from request and adds the new values to the company table.
- DELETE - Obtains a company id from requests and deletes an entry from companies table based on the request's company id

/musical_awards - API route for artist information relating to their musical awards
- GET - Gets all entries in the musical_awards table.
- POST - Obtains a bilboard and artist id from request and changes the values to the request's bilboard values at the request's artist id.
- PUT - Obtains a awards_id, artist_id, bilboard_hits and grammy_awards from request and adds the new values to the musical awards table.
- DELETE - Obtains a awards id from requests and deletes an entry from musical awards table based on the request's awards id

/musical_career - API route for artist information relating to their musical career
- GET - Gets all entries in the musical_career table.
- POST - Obtains a album count, genre, debut date, tour count and artist id from request and changes the values to the request's values at the request's artist id.
- PUT - Obtains a career_id,artist_id,album_count,genre, debut_date and tour_count from request and adds the new values to the musical career table.
- DELETE - Obtains a career id from requests and deletes an entry from musical career table based on the request's career id

### Known Bugs and Future Development
Bugs:
- None.
Future Development:
- Adding places in the app where people can add more artists.
- Changing the output of our front end to allow people to more easily see the specific information they want.
- Adding more ways to filter through our tables.
- Displaying even more information to better help with the information problem.
- Adding ways to sort the values that you obtain through get requests.