



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

        let tBody =$("#tblPlaceOrder");


        let itemId = $("#txtItemId").val();
        for (var i = 0; i <=$('tbody').find('tr').length; i++) {
            var row =  $('tbody').find(i);
            console.log("ROw eka",row);
            var itemIdElement = $(row).find('td:first'); // Selects the first <td> element in the row

            var itemId44 = itemIdElement.text(); // Retrieves the text content of the <td> element




            if (itemId44 ==itemId){
                alert("gggggggg");
            }
        }

        let itemDes = $("#txtItemName").val();
        let itemPrice = $("#txtItemPrice").val();
        let itemQty = $("#itemQtyPO").val();
        let totalOrder = itemPrice * itemQty;




        let tr = $('<tr><td>'+itemId+'</td> <td>'+itemDes+'</td> <td>'+itemQty+'</td> <td>'+itemPrice+'</td><td>'+totalOrder+'</td></tr>');

        //set the row to the table body
        tBody.append(tr);

        cartDetails.push({id:itemId, description:itemDes, price:itemPrice, qty:itemQty, total:totalOrder})

        //    load id's into place order forms
        let cusIdList = document.getElementById("cusIdList");

        let option = document.createElement("option");

        //set full total
        amountOfTotal = amountOfTotal+totalOrder;
        $('#fullTotal').val(amountOfTotal);
    });

    //sub total calculation part
    $('#subTotalPlaceOrder').click(function (){
        let discount = $('#discountPlaceOrder').val();
        let subTotal = amountOfTotal - discount;
        $('#subTotalPlaceOrder').val(subTotal);
    });

    //btn purchase action
    let finalOrderList = [];
    $('#btnPurchaseFinalOrder').click(function (){

        let finalOrderId =  $('#orderIdPlaceOrder').val();
        let finalOrderDate = $('#orderDatePlaceOrder').val();
        let finalCustomerId = $('#cusIdList').val();
        let finalItemCode = $('#itemIdList').val();
        let finalQuantity = $('#itemQtyPO').val();
        let finalDiscount = $('#discountPlaceOrder').val();
        let finalTotal =  $('#subTotalPlaceOrder').val();

        let tBody=$("#tblFinalOrder");

        let tr = $('<tr> <td>'+finalOrderId+'</td>  <td>'+finalOrderDate+'</td>  <td>'+finalCustomerId+'</td> <td>'+finalItemCode+'</td> <td>'+finalQuantity+'</td> <td>'+finalDiscount+'</td>  <td>'+finalTotal+'</td> </tr>');

        tBody.append(tr);

        finalOrderList.push({oid:finalOrderId , date:finalOrderDate, id:finalCustomerId , code :finalItemCode,  qty : finalQuantity , discount :finalDiscount , subtotal:finalTotal})

        /* console.log(finalOrderList);*/

    });

    function clearOrderFields() {
        $('#orderIdPlaceOrder').val("");
        $('#orderDatePlaceOrder').val("");
        $('#cusIdList').val("");
        $('#itemIdList').val("");
        $('#cusDesPO').val("");
        $('#cusNamePO').val("");
        $('#cusQtyOnHandPO').val("");
        $('#itemQtyPO').val("");
        $('#cusPricePO').val("");
        $('#totalOrders').val("");
        $('#fullTotal').val("");
        $('#discountPlaceOrder').val("");
        $('#subTotalPlaceOrder').val("");

    }

    $("#btnClearOrders").click(function(){
        clearOrderFields();
    });

