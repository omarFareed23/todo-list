let myButton = document.getElementById("addNewList");
let myElement = document.getElementById("copy");

let i = 1;

myButton.onclick = function ()
{
    let newList = myElement.cloneNode(true);
    newList.style.display = "inline-table";
    document.body.insertBefore( newList , myButton);
    newList.id = "a" + i + "a";
    let but = newList.lastElementChild;
    but.style.display = "none";
    let setAddress = newList.getElementsByTagName("button")[0];
    let myAddress = newList.getElementsByTagName("input")[0];
    setAddress.onclick = function()
    {
        myAddress.value = myAddress.value.trim();
        if(myAddress.value == ""){
            alert("you must add an address");
        }
        else
        {
                let father = this.parentElement;
                but.style.display = "block";
                let myVal = myAddress.value;
                console.log(myVal);
                father.removeChild(myAddress);
                father.removeChild(setAddress);
                father.removeChild(father.getElementsByTagName("br")[0]);
                let myNewAddress = document.createElement("p");
                myNewAddress.innerHTML = myVal;
                myNewAddress.className = "address";
                father.insertBefore(myNewAddress , father.lastElementChild);
        }
    }
    but.onclick = function()
    {
        but.style.display = "none";
        let myTask = document.createElement("div");
        let myNewTask = document.createElement("div");
        myNewTask.className = "newTask";
        // console.log(myTask.classList);
        // console.log(this.parentElement);
        let myInput = document.createElement("input");
        let myBut = document.createElement("button");
        myBut.innerHTML = "add";
        let cansel = document.createElement("button");
        cansel.innerHTML = "cansel";
	cansel.classList.add("lastBut");
	cansel.classList.add("lastBut2");
	myBut.classList.add("lastBut" , "lastBut2");
	myInput.classList.add("myInput");

        cansel.onclick = function()
        {
            father.removeChild(myTask);
            but.style.display = "block";
        }
        myBut.onclick = function()
        {
            if(myInput.value == "") {
                alert("you must add something");
            }
            else
            {
                but.style.display = "block";
                let myVal = myInput.value;
                father.removeChild(myTask);
                myNewTask.innerHTML = myVal;
                father.insertBefore(myNewTask , father.lastElementChild);
            }
        }
        myTask.appendChild(myInput);
        myTask.appendChild(myBut);
        myTask.appendChild(cansel);
        let father = this.parentElement;
        // console.log(`father ==> ${father.id}`);
        father.insertBefore(myTask , father.lastElementChild);
    }
    i++;
}
