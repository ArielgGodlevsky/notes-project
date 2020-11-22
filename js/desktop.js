
function clearo () {
        document.querySelector('#intsk').value= ``;
        document.querySelector('#choosetime').value= ``;
}

function Add() {
	localStorage.setItem("counter" ,localStorage.length);
    var index = JSON.parse(localStorage.getItem("counter")) || 0;
    index++;
    if(JSON.parse(localStorage.getItem(index)) != null){
        index++;
    }
	localStorage["counter"] = index;
    var Vtext = document.getElementById('intsk');
    var valuetext = Vtext.value;
    var Vdate = document.getElementById('choosetime');
    var valuedate = Vdate.value;
    if (valuetext && valuedate) {
        obj = { tx: valuetext, dt: valuedate };
        localStorage.setItem(index, JSON.stringify(obj));
        AddNotes(index);
        clearo ();
    } else {
        alert('חובה למלא משימה ותאריך יעד(כולל שעת יעד)');
    }

}

function AddNotes(index) {
    var count = index || 1;
    var x = JSON.parse(localStorage.getItem("counter"));
    for (count; count <= x; count++) {
        if (JSON.parse(localStorage.getItem(count)) == null) {
            
        } else { 
            Get_item(count);
        }
    }
}

function AddNotesTest(index) {

    var count = index || 1;
    var x = JSON.parse(localStorage.getItem("counter"));
    for (count; count <= x; count++) {
       
            Get_item(localStorage[count]);
        }
    
	
}



function Get_item(count){

    var ls = JSON.parse(localStorage[count]);
    var span_notes = document.getElementById('readynodes');
    span_notes.innerHTML += `<span id=${count} onmouseover="document.getElementById('dlt${count}').style.display = 'block';"
     onmouseout="document.getElementById('dlt${count}').style.display = 'none';">
     <div id="dlt${count}" class="glyphicon glyphicon-remove" style="display:none" onclick="delete_note()"></div>
     <p class="wrapTxt">${ls.tx}</p><br><br><br><p class="wraDate">תאריך יעד:<br>${ls.dt}</p></span> `;
}

function delete_note() {
  
    var selectspan = event.path[1];
    var _id = parseInt( selectspan.id);
    localStorage.removeItem(_id);
    var span_notes = document.getElementById('readynodes');
    span_notes.innerHTML = ``;

    AddNotes();
	
}
