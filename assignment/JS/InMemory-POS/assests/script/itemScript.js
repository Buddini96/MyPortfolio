

let itemList = [];
let itemIndex;

function clearItemFields() {
    $('#txtItemId').val("");
    $('#txtItemName').val("");
    $('#txtItemPrice').val("");
    $('#txtItemQty').val("");
}

$("#btnSaveItem").click(function(){
    let itemId = $("#txtItemId").val();
    let itemDes = $("#txtItemName").val();
    let itemPrice = $("#txtItemPrice").val();
    let itemQty = $("#txtItemQty").val();


    let tBody = $("#tblItem");

    let tr = $('<tr><td>'+itemId+'</td> <td>'+itemDes+'</td> <td>'+itemPrice+'</td> <td>'+itemQty+'</td></tr>');

    //set the row to the table body
    tBody.append(tr);

    itemList.push({id:itemId, description:itemDes, price:itemPrice, qty:itemQty})
    console.log(itemList)

    //    load id's into place order form
    let itemIdList = document.getElementById("itemIdList");

    let option = document.createElement("option");

    option.text=itemId;
    option.value=itemId;
    itemIdList.append(option);
});


let selectedItemRow;

$("#tblItem").click(function (event){
    selectedItemRow = event.target.closest('tr');
    console.log(selectedItemRow.cells[0]);
    $('#txtItemId').val(selectedItemRow.cells[0].textContent);
    $('#txtItemName').val(selectedItemRow.cells[1].textContent);
    $('#txtItemPrice').val(selectedItemRow.cells[2].textContent);
    $('#txtItemQty').val(selectedItemRow.cells[3].textContent);

    itemIndex = itemList.findIndex(itemList => itemList.id === selectedItemRow.cells[0].textContent);

});




$("#btnUpdateItem").click(function(){

    let itemId = $("#txtItemId").val();
    let itemName = $("#txtItemName").val();
    let itemPrice = $("#txtItemPrice").val();
    let itemQty = $("#txtItemQty").val();

    /*console.log(cusId,cusName,cusAddress,cusContact);*/
    console.log(selectedItemRow);
    selectedItemRow.cells[0].textContent=itemId;
    selectedItemRow.cells[1].textContent=itemName;
    selectedItemRow.cells[2].textContent=itemPrice;
    selectedItemRow.cells[3].textContent=itemQty;

    clearItemFields();
    console.log(itemIndex);


    //updating the selected customer from the list
    itemList[itemIndex].id=itemId;
    itemList[itemIndex].name=itemName;
    itemList[itemIndex].price=itemPrice;
    itemList[itemIndex].qty=itemQty;

    console.log(itemList);

    /*btnUpdate.prop('disabled',true);
    btnDelete.prop('disabled',true);
    btnAdd.prop('disabled',false);*/
});


$("#btnDeleteItem").click(function(){
    console.log("hhh");
    selectedItemRow.remove();

    //removing the selected customer from the list
    itemList.splice(itemIndex,1);
    console.log(itemList);

    clearItemFields();
    console.log(itemList);
    /*btnUpdate.prop('disabled',true);
    btnDelete.prop('disabled',true);
    btnSave.prop('disabled',false);*/
});



$("#btnClearItem").click(function(){
    clearItemFields();
})



