
    let customerList = [];
    let customerIndex;


    function clearCustomerFields() {
    $('#txtcid').val("");
    $('#txtName').val("");
    $('#txtAddress').val("");
    $('#txtcontact').val("");
}


    $("#btnSaveCustomer").click(function(){
    let cusId = $("#txtcid").val();
    let cusName = $("#txtName").val();
    let cusAddress = $("#txtAddress").val();
    let cusContact = $("#txtcontact").val();


    let tBody = $("#tblCustomer");

    let tr = $('<tr><td>'+cusId+'</td> <td>'+cusName+'</td> <td>'+cusAddress+'</td> <td>'+cusContact+'</td></tr>');

    //set the row to the table body
    tBody.append(tr);

    customerList.push({id:cusId, name:cusName, address:cusAddress, contact:cusContact})
    console.log(customerList)

        //    load id's into place order form
        let cusIdList = document.getElementById("cusIdList");

        let option = document.createElement("option");

        option.text=cusId;
        option.value=cusId;
        cusIdList.append(option);
});



    let selectedCustomerRow;

    $("#tblCustomer").click(function (event){
    selectedCustomerRow = event.target.closest('tr');
    $('#txtcid').val(selectedCustomerRow.cells[0].textContent);
    $('#txtName').val(selectedCustomerRow.cells[1].textContent);
    $('#txtAddress').val(selectedCustomerRow.cells[2].textContent);
    $('#txtcontact').val(selectedCustomerRow.cells[3].textContent);

    customerIndex = customerList.findIndex(customerList => customerList.id === selectedCustomerRow.cells[0].textContent);

});


    $("#btnUpdateCustomer").click(function(){
    console.log("Ebuwa");
    let cusId = $("#txtcid").val();
    let cusName = $("#txtName").val();
    let cusAddress = $("#txtAddress").val();
    let cusContact = $("#txtcontact").val();

    /*console.log(cusId,cusName,cusAddress,cusContact);*/
    console.log(selectedCustomerRow);
    selectedCustomerRow.cells[0].textContent=cusId;
    selectedCustomerRow.cells[1].textContent=cusName;
    selectedCustomerRow.cells[2].textContent=cusAddress;
    selectedCustomerRow.cells[3].textContent=cusContact;

    clearCustomerFields();
    console.log(customerIndex);


    //updating the selected customer from the list
    customerList[customerIndex].id=cusId;
    customerList[customerIndex].name=cusName;
    customerList[customerIndex].address=cusAddress;
    customerList[customerIndex].contact=cusContact;

    console.log(customerList);

    /*btnUpdate.prop('disabled',true);
    btnDelete.prop('disabled',true);
    btnAdd.prop('disabled',false);*/
});

    $("#btnDeleteCustomer").click(function(){
    console.log("hhh");
    selectedCustomerRow.remove();

    //removing the selected customer from the list
    customerList.splice(customerIndex,1);
    console.log(customerList);

    clearCustomerFields();
    console.log(customerList);
    /*btnUpdate.prop('disabled',true);
    btnDelete.prop('disabled',true);
    btnSave.prop('disabled',false);*/
});



    $("#btnClearCustomer").click(function(){
    clearCustomerFields();
})


