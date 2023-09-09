const tbody = document.getElementById("tbody")

let arr = []
axios.get("http://54.251.148.150:8080/all")
.then((res) => {
    arr = res.data
    calling()
}

)

function calling(){
arr.forEach((item)=>{
    tbody.innerHTML += `
    <tr>
    <td>${item.name}</td>
    <td>${item.email}</td>
    <td>${item.mobile}</td>
    <td>${item.gender}</td>
    <td>${item.age}</td>
    <td>${item.pastwork}</td>
    <td>${item.presentWork}</td>
    <td>${item.qualification}</td>
    
    </tr>
   `
}) 

console.log(arr)
}

