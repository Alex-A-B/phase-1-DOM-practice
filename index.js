document.addEventListener('DOMContentLoaded', () => {
    // inspecting elements in the console
    // adding elements to our page
    const carPhoto = document.getElementById('tiny-car')
    const commentSection = document.createElement('ul')
    const clientInfo = document.getElementById('client-feedback')

    
    // adding events to elements
        // let's add a click event to the photo
        carPhoto.addEventListener('click', (e) => {
            if(e.target.id === 'tiny-car'){
                alert('Image 1 Clicked');
                e.target.id = 'city-lights;'
                e.target.src = 'https://drscdn.500px.org/photo/129399379/m%3D900/v2?sig=9b31201fdd7ffa6bd02bd379795a89419706f4b5589e3a56de8ba00f16bde05a';
            } else {
                alert('Image 2 Clicked');
                e.target.id = 'tiny-car';
                e.target.src = 'https://iso.500px.com/wp-content/uploads/2015/12/kim.jpg';
            }
        });
        
    // adding submit event for comment 

        // append UL to div (client-feedback)
        // prevent default of submit
        // create LI (list item) to append to UL - add in Event Listener
        /* grab the information from our input field, and we'll add the info
        as text for our list item */

        
    // adding click event for like button




})