window.addEventListener('resize', () => 
{
    if (window.innerWidth <= 900) 
    {
        console.log("aqui estoy ");

        var box_service = document.getElementById("list_services");
        if (box_service.className != "row-cols-md-2")
        {
            console.log(box_service.className);
            box_service.classList.remove("row-cols-md-3")
            //console.log(box_service.className);
            box_service.classList.add("row-cols-md-2")
            console.log(box_service.className);
        }
        else {
            console.log("no hagas nada")
        }
    }

    if (window.innerWidth > 900) 
    {
    console.log("mayor a 900");

    var box_service = document.getElementById("list_services");
    if (box_service.className != "row-cols-md-3")
    {
        console.log(box_service.className);
        box_service.classList.remove("row-cols-md-2")
        //console.log(box_service.className);
        box_service.classList.add("row-cols-md-3")
        console.log(box_service.className);
    }
    else {
        console.log("no hagas nada")
    }
}

});