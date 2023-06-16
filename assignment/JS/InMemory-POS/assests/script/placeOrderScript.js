



    $('#cusIdList').click(function (){
        let selectedId = $('#cusIdList').val();
        /*console.log("hri");*/

        let customerIndex = customerList.findIndex(customerList => customerList.id === selectedId);
        console.log(customerList[customerIndex]);
        $('#cusNamePO').val(customerList[customerIndex].name);
    });

    $('#itemIdList').click(function (){
        let selectedId = $('#itemIdList').val();
        /*console.log("hri");*/

        let itemIndex = itemList.findIndex(itemList => itemList.id === selectedId);
        console.log(itemList[itemIndex]);
        $('#cusDesPO').val(itemList[itemIndex].description);
        $('#cusQtyOnHandPO').val(itemList[itemIndex].qty);
        $('#cusPricePO').val(itemList[itemIndex].price);

    });

    let amountOfTotal=0;
    let cartDetails=[];
    $("#btnAddToCart").click(function(){
        let itemId = $("#txtItemId").val();
        let itemDes = $("#txtItemName").val();
        let itemPrice = $("#txtItemPrice").val();
        let itemQty = $("#itemQtyPO").val();
        let totalOrder = itemPrice * itemQty;


        let tBody = $("#tblPlaceOrder");

        let tr = $('<tr><td>'+itemId+'</td> <td>'+itemDes+'</td> <td>'+itemPrice+'</td> <td>'+itemQty+'</td><td>'+totalOrder+'</td></tr>');

        //set the row to the table body
        tBody.append(tr);

        cartDetails.push({id:itemId, description:itemDes, price:itemPrice, qty:itemQty, total:totalOrder})
        console.log(itemList)

        //    load id's into place order forms
        let cusIdList = document.getElementById("cusIdList");

        let option = document.createElement("option");

        //set full total
        amountOfTotal = amountOfTotal+totalOrder;
        $('#fullTotal').val(amountOfTotal);
    });