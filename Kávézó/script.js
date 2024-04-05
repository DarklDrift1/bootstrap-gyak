function page_function(page) {
    page_index = document.getElementById("Index")
    page_home = document.getElementById("Home")
    page_menu = document.getElementById("Menu")
    page_contacts = document.getElementById("Contacts")

    if(page == Index || page === undefined) {
        page_index.style.display = "block";
        page_home.style.display = "none";
        page_menu.style.display = "none";
        page_contacts.style.display = "none";
    }
    else if (page == Home) {
        page_index.style.display = "none";
        page_home.style.display = "block";
        page_menu.style.display = "none";
        page_contacts.style.display = "none";
    }
    else if (page == Menu) {
        page_index.style.display = "none";
        page_home.style.display = "none";
        page_menu.style.display = "block";
        page_contacts.style.display = "none";
    }
    else if (page == Contacts) {
        page_index.style.display = "none";
        page_home.style.display = "none";
        page_menu.style.display = "none";
        page_contacts.style.display = "block";
    }
}

function order_function(food) {
    
    if (food == 1) {
        window.alert("Sikésen megrendelte a 'PÖRKÖLT' nevű ételt!")
    }
    else if (food == 2) {
        window.alert("Sikésen megrendelte a 'GULYÁS LEVES' nevű ételt!")
    }
    else if (food == 3) {
        window.alert("Sikésen megrendelte a 'TÚRÓ RUDI' nevű ételt!")
    }

}

