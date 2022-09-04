//this will create a TRASH BUTTON 
var todolist = document.getElementsByTagName("li");
for ( i = 0; i < todolist.length; i++) {
    var trashbutton = document.createElement("button");
    var trashbuttontext = document.createTextNode("Delete");
    trashbutton.className = "del";
    trashbutton.appendChild(trashbuttontext);
    todolist[i].appendChild(trashbutton);

}

//this will create the check button 
var ticklist = document.getElementsByTagName("li");
for ( i = 0; i < ticklist.length; i++) {
    var checkbutton = document.createElement("button");
    var checkbuttontext = document.createTextNode("Done");
    checkbutton.className = "checked";
    checkbutton.appendChild(checkbuttontext);
    ticklist[i].appendChild(checkbutton);
}

//this deletes a todo on clicking trashbutton
var closelist = document.getElementsByClassName("del");
for ( i = 0; i < closelist.length; i++) {
    closelist[i].onclick = function () {
        var hide = this.parentElement;
        hide.style.display = "none";

    }
}

//this is for checking to indicate done
var checking_list = document.getElementsByClassName("checked");
for ( i = 0; i < checking_list.length; i++) {
    checking_list[i].onclick = function () {
        var strikeout = this.parentElement;
        strikeout.style.textDecoration = "line-through";
        strikeout.style.textDecorationColor = "black";
    }
}

document.getElementById("addbutton").addEventListener("click", addtodo);
function addtodo() {

    //1.when ever we click "ADD"button a list of"LI" will created inside the ol
    var li = document.createElement("li");
    var inputvalue = document.getElementById("input").value;
    var textinput = document.createTextNode(inputvalue);
    li.appendChild(textinput);
    if (inputvalue == "") {
        //    when we have blank todo  and click to add button then the li should not be created
        //    so for that purpose we keep a condition and then it will show a alert warning box to enter a task in input box
        alert("Write some task in the input box!");
    }
    else {
        document.getElementById("items").appendChild(li); //here a li will be get created in "ol" by appending method
        document.getElementById("input").value = ""; //after adding a enter list the textbox need to get empty so here we clear the value of input box

    }

    var ticklist = document.getElementsByTagName("li");

    var checkbutton = document.createElement("button");
    var checkbuttontext = document.createTextNode("Done");
    checkbutton.className = "checked";
    checkbutton.appendChild(checkbuttontext);
    ticklist[i++].appendChild(checkbutton);
    //now we can check/strick out the finished work of the list exteranlly added

    var checking_list = document.getElementsByClassName("checked");
    for ( i = 0; i < checking_list.length; i++) {
        checking_list[i].onclick = function () {
            var strikeout = this.parentElement;
            strikeout.style.textDecoration = "line-through";
            strikeout.style.textDecorationColor = "black";
        }
    }
    i--;
    //    2.now we create a delete button to list

    var todolist = document.getElementsByTagName("li")

    var trashbutton = document.createElement("button");
    var trashbuttontext = document.createTextNode("Delete");
    trashbutton.className = "del";
    trashbutton.appendChild(trashbuttontext);
    todolist[i++].appendChild(trashbutton);

    //     //now we can delete a list item which we added 
    var closelist = document.getElementsByClassName("del");
    for ( i = 0; i < closelist.length; i++) {
        closelist[i].onclick = function () {
            var hide = this.parentElement;
            hide.style.display = "none";

        }
    }
}


var date_element = document.getElementById("date");
var today = new Date();
date_element.innerHTML = today.toLocaleDateString("en-us", weekday = 'long', month = 'short', day = 'numeric');


