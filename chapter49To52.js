function getValueOnSubmit() {
    var name = document.getElementById('name').value
    var lastName = document.getElementById('lastName').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    console.log(name + lastName + email + password)
    if (name === "") {
        alert("Name is required")
    }
    else if (lastName === "") {
        alert("Last name is required")
    }
    else if (email === "") {
        alert("Email is required")
    }
    else if (password === "") {
        alert("Email is required")
    }
    else {
        document.write('<h4>')
        document.write("Information<br>")
        document.write("Name: " + name + "<br>")
        document.write("Last Name: " + lastName + "<br>")
        document.write("Email: " + email + "<br>")
        document.write("Password: " + password + "<br>")
        document.write('</h4>')
    }
}

function showInfo() {
    var moreInfo = "<table><tr> <td>Brand</td><td>Samsung</td></tr>    <tr><td>Model</td><td>A-10</td></tr>  <tr><td>Price</td><td>RS 30,000</td></tr>  <tr><td>Ram</td><td>4Gb</td></tr> <tr><td>Rom</td><td>64Gb</td></trRom</table > "
    document.getElementById('show').innerHTML = moreInfo
}

function addData() {
    var index = 0
    var studentTable = document.getElementById('StudentDataInfo')
    var name = document.getElementById('studentName').value
    var stdClass = document.getElementById('studentClass').value
    if (name === "") {
        alert("Name is required")
    }
    else if (stdClass === "") {
        alert("Class is required")
    }
    else {
        var StudentDataInfo = document.getElementById('StudentDataInfo')
        var tr = document.createElement('tr')
        var td = document.createElement('td')
        var tdText =  document.createTextNode(index)
        td.appendChild(tdText)
        tr.appendChild(td)

        tdText =  document.createTextNode(name)
        td.appendChild(tdText)
        tr.appendChild(td)

        tdText =  document.createTextNode(stdClass)
        td.appendChild(tdText)
        tr.appendChild(td)

        var btn = document.createElement('button')
        var btnText = document.createTextNode('Delete')
        btn.appendChild(btnText)
        btn.setAttribute('onclick', 'deleteBtn()')
        tr.appendChild(btn)

        var btn = document.createElement('button')
        var btnText = document.createTextNode('Edit')
        btn.appendChild(btnText)
        btn.setAttribute('onclick', 'editBtn(this)')
        tr.appendChild(btn)

        StudentDataInfo.appendChild(tr)

        function deleteBtn(e){
            var parent = e.parentNode
            var previousParent = parent.parentNode
            previousParent.remove()
        }
    }


}

