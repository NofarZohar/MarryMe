
function search() {


    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
console.log(document.getElementById('query').value);
    var raw = JSON.stringify({
        "query": document.getElementById('query').value
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:3000/search", requestOptions)
        .then(response => response.text())
        .then(result => {
            var ring=JSON.parse(result)[0];
            console.log(ring.name)
            console.log(result)
        })
        .catch(error => console.log('error', error));
}

function showTable() {
    fetch('/buyRing')
        .then(response => response.text())
        .then(data => {
            var ringTypes = JSON.parse(data);
            var myTables = `<table class="styled-table">`;
            ringTypes.forEach(element => {
                myTables += `
           
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    </tr>

                    <tr>
                   

               
               
                    <td>${element.name}</td>
                    <td>${element.price}</td>
                    <td>
                        <img src="${element.url_image}" width="60" height="60">
                    </td>

                    <td>
                    <datalist id="quan">
                    <option value="1">
                    <option value="2">
                    <option value="3">
                    <option value="4">
                    </datalist>
                    
                    <form form action "addToCart" method="get" style="border:1px solid #ccc">

                    <input list="quan" placeholder="Enter Quantity" name="quan" required><br>
                    <button type="submit" class="signupbth" href="Cart.html">Add To Cart<i class="icon-arrow-right22" ></i></button></td>
                </tr>
        
            
            `
            });
            myTables += `</table>`;
            document.getElementById("myData").innerHTML = myTables;
        });
};

