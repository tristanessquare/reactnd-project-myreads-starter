# MyReads Project

This project is a demonstration of the react fundamentals and it was created to show a basic understanding of these fundamentals.

## Starting the application
The application requires Node.js to be installed (https://nodejs.org/en/).

To start the application you have to clone this repository, install the node dependencies and start the dev-server:

```bash
git clone git@github.com:tristanessquare/reactnd-project-myreads-starter.git
cd reactnd-project-myreads-starter
npm install
npm start
```

A browser window showing the main page of the application should now open.

## Application content

The application allows to manage books in the categories "Want to read", "Currently reading" and "Read". New books can be added to these categories and also be removed.

### Main Page

The main page shows the three categories with the according books. Each book has a dropdown menue that enables the user to change the category of the selected book.
To add a new book the user has to click the "+"-icon on the buttom of the page.

### Search Page

The search page enables the user to search for books and add them to one of the three categories (or remove them).

## Possible search terms

The search query only allows some predefined values:

'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'