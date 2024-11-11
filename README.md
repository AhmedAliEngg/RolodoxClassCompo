# Rolodox app with Class Component

A Rolodex React app built with class components is a contact management application that lets users view, search, and potentially manage a list of contacts. Here’s a brief description of how it would be structured:

State Management: The main App component will use state to manage the list of contacts and search input. State could hold an array of contact objects and a string for search queries.

Lifecycle Methods: You’d use componentDidMount to fetch contact data (e.g., from an API or local file) and populate the contacts list. This is where you might also set up initial filtering logic.

Event Handling: A search input field would use an onChange event to update the search query in the state. This would trigger a re-render to filter and display contacts that match the search term.

Rendering Contacts: A separate ContactCard component could represent individual contacts, passed as props from the App component. It would display basic contact info (name, email, etc.) and could be styled to look like a traditional Rolodex card.

Filtering Logic: Inside the render method of the main component, you’d filter the contact list based on the search term before mapping over it to render each ContactCard.

