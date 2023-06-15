



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