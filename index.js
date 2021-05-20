document.addEventListener('DOMContentLoaded', () => {
    // inspecting elements in the console
    // adding elements to our page
    const carPhoto = document.getElementById('tiny-car');
    const imageSection = document.getElementById("our-images");
    const startCommentUL = document.createElement('ul');         // var for the UL element creation
    const commentText = document.getElementById('comment-text');  // var for text input box reference
    const clientInfo = document.getElementById('commentLand');   // var for client feedback DIV ID
                   
   
    /* challenge:
     // append UL to div (client-feedback)
     // prevent default of submit
     // create LI (list item) to append to UL - add in Event Listener
     // grab the information from our input field, and we'll add the info as text for our list item 
    */

    // adds the UL to DOM on 'DOMContentLoaded' event
    startCommentUL;                                                 // creates UL
    startCommentUL.id ="comment-list";                              // adds ID to UL
    clientInfo.appendChild(startCommentUL);                         // appends UL to client-feedback DIV
    const commentUL = document.getElementById("comment-list");      // var for new UL (now it exists!)
    commentUL.style.listStyle = "none";                             // CSS formatting to UL
        
    // adding comment to <LI> element and append to UL

    const createComments = () => {
        const listElement = document.createElement('li');           /* var for LI element creation
                                                                       due to scope has to be in function */  
        const commentValue = commentText.value                      // takes value of text input box
        const textVal = document.createTextNode(commentValue);      // converts text input to a text node
        listElement.appendChild(textVal);                           // adds text node to list element
        commentUL.appendChild(listElement);                         // adds list element to UL
    };
 
    // adding events to elements
    
    // let's add a click event to the photo
    // alert turned off as it's annoying!!!
    carPhoto.addEventListener('click', (e) => {
        if(e.target.id === 'tiny-car'){
            // alert('Image 1 Clicked');
            e.target.id = 'city-lights;'
            e.target.src = 'https://drscdn.500px.org/photo/129399379/m%3D900/v2?sig=9b31201fdd7ffa6bd02bd379795a89419706f4b5589e3a56de8ba00f16bde05a';
            document.querySelector("body").style.backgroundColor = "#BFC7DE"; // changes the background color
        } else {
            // alert('Image 2 Clicked');
            e.target.id = 'tiny-car';
            e.target.src = 'https://iso.500px.com/wp-content/uploads/2015/12/kim.jpg';
            document.querySelector("body").style.backgroundColor = "#e9c54e"; // changes the background color
        }
    });

    //adding eventListener to the submit button

    document.addEventListener("submit", (e) => {
        // UL is created in DOM loaded event so is present
        e.preventDefault();         //preventDefault - no refresh of page
        createComments();           // create Comments as a list and adds to UL - Currently not working.
        commentText.value = "";     // resets the text box
    });

    // adding click event for like button
    const loveButton = document.getElementById("love");
    
    loveButton.addEventListener("click", (e) => {
        if(e.target.innerText === "Love Me!"){
            e.target.innerText = "Stop the Love!";
            const para = document.createElement("p")
            para.id = "loveMess"
            const loveMessage = document.createTextNode("I love this picture!");
            para.appendChild(loveMessage);
            imageSection.appendChild(para);
        } else {
            e.target.innerText = "Love Me!"
            const loveMess = document.getElementById("loveMess");
            loveMess.remove();
        }
    })
      
})