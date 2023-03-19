
// This hides content when user push hide button
function toggle(elementId) {
    const element = document.getElementById(elementId);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
    
}
// this creates new element, and checks if inputfield is empty and sends alert message if it is empty
function newElement() {
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    if (inputValue.length <= 0) {
      document.getElementById('myInput');
       alert("Input field was found empty. To complete you must type something.");
    } else {
        var li = document.createElement("li");
        li.setAttribute('id', 'listItem');
        document.getElementById("doUL").appendChild(li);
        li.append(t);
        //this saves item to local storage
        saveItem(inputValue);
    }
     //this combination creates close button and adds fuctionality to delete item from list
    document.getElementById("myInput").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

        for (i = 0; i < close.length; i++) {
           close[i].onclick = function() {
              var div = this.parentElement;
               div.style.display = "none";
           }
        }
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
  
}
// this creates checked mark when item is clicked. 
var list = document.getElementById('doUL');
list.addEventListener('click', function(e) {
    var li = e.target;
    if (li.classList.contains('checked')) {
        li.classList.remove('checked');
    } else {
        li.classList.add('checked');
        
    }
   list.removeAttribute('class');
}, false);

//this function saves items to browsers local storage
function saveItem(doUL) {
    var itemsOnList = document.getElementById('doUL').value;
    if (localStorage.getItem('itemsOnList') === null) {
        itemsOnList = [];
    } else {
        itemsOnList = JSON.parse(localStorage.getItem('itemsOnList'));
    }
    itemsOnList.push(doUL);

    localStorage.setItem('itemsOnList', JSON.stringify(itemsOnList));
}
// this function removes all items on local storage
function resetAll() {
    if (localStorage.length > 0) {
        document.getElementById('doUL').innerHTML = '';
        localStorage.clear();
        
    } else {
        alert("No items on list!")
    }
}






