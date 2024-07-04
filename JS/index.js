document.getElementById( "myform").addEventListener("submit", function(event){
    event.preventDefault()
    const payload = {
        firstname : document.getElementById("firstname"),
        lastname :  document.getElementById("lastname"),
        number : document.getElementById("number"),
        email : document.getElementById("email"),
        rollno : document.getElementById("rollno"),

    }
    console.log(payload)
})
