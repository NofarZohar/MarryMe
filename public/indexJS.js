function showTable() {
    fetch('/buyRing')
    .then(response => response.text())
    .then(data => {
        var ringTypes = JSON.parse(data);
        var myTables = "";
        ringTypes.forEach(element => {
            myTables+= ` ${element}
            <table class="styled-table" >
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Image</th>
                </tr>
                <tr>
                    <td>${element.name}</td>
                    <td>${element.price}</td>
                    <td>
                        <img src="${element.url_image}" width="60" height="60">
                    </td>
                </tr>
            </table>   
            
            `
        });
        document.getElementById("myData").innerHTML = myTables;
    });
};
