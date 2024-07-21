# Superhero API Web App

This project is a simple web application that allows users to fetch and display superhero information using the [Superhero API](https://superheroapi.com/). The application includes functionality to get random superheroes and search for specific superheroes by name.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Code Explanation](#code-explanation)
- [License](#license)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/superhero-api-web-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd superhero-api-web-app
    ```
3. Open `index.html` in your preferred web browser.

## Usage

### Random Superhero

- Click the "New Superhero" button to fetch and display a random superhero's information.

### Search Superhero

- Enter the name of a superhero in the search input field.
- Click the "Search" button to fetch and display the superhero's information.

## Code Explanation

### HTML Structure

The main HTML elements include:
- `imgDiv`: The div element to display the superhero image and name.
- `btn`: The button element to fetch a random superhero.
- `text`: The input element for searching a superhero by name.
- `searchBtn`: The button element to search for a superhero.
- `stat`: The div element to display the superhero's statistics.

### JavaScript Functionality

#### Constants
- `Base_url1`: Base URL for the Superhero API.
- `imgDiv`, `btn`, `text`, `searchBtn`, `stat`: Elements from the HTML document.

#### Functions

- `gethero(id)`: Fetches superhero data by ID and updates the HTML with the superhero's image, name, and statistics.
- `getstat(char)`: Formats the superhero statistics into HTML.
- `random()`: Generates a random superhero ID.
- `search()`: Fetches superhero data by name and updates the HTML with the superhero's image, name, and statistics.

#### Event Listeners

- `btn.onclick`: Calls `gethero` with a random ID to fetch a random superhero.
- `searchBtn.onclick`: Calls `search` to fetch a superhero by name.

### Example

Here is an example of how the elements are updated with superhero information:
```html
<div id="img">
    <h1>Superhero Name</h1>
    <img src="superhero_image_url" height="300" width="300"/>
</div>
<div id="stat">
    <p>STAT1: VALUE1</p>
    <p>STAT2: VALUE2</p>
    <p>STAT3: VALUE3</p>
    <!-- More stats -->
</div>
