function loadData(data){
    if(data == 'btn1'){
        document.getElementById('para').innerHTML = "The iPhone 13 and iPhone 13 Mini (stylized as iPhone 13 mini) are smartphones designed, developed, marketed, and sold by Apple Inc. They are the fifteenth generation of iPhones (succeeding the iPhone 12 and iPhone 12 Mini). They were unveiled at an Apple Event in Apple Park in Cupertino, California on September 14, 2021, alongside the higher priced iPhone 13 Pro and iPhone 13 Pro Max flagships. Pre-orders for the iPhone 13 and iPhone 13 Mini began on September 17, 2021. They became available on September 24, 2021";
        document.getElementById('phoneimg').src = "images/iphone_13.png";
    }
    else if(data == 'btn2'){
        document.getElementById('para').innerHTML = "The iPhone 12 and iPhone 12 Mini (stylized and marketed as iPhone 12 mini) are a range of smartphones designed, developed, and marketed by Apple Inc. They are the fourteenth-generation, 'affordable flagship' iPhones, succeeding the iPhone 11. They were unveiled at a virtually held Apple Special Event at Apple Park in Cupertino, California on October 13, 2020, alongside the 'premium flagship' iPhone 12 Pro and iPhone 12 Pro Max. Pre-orders for the iPhone 12 started on October 16, 2020, and the phone became available in most countries on October 23, 2020. Pre-orders for the iPhone 12 Mini began on November 6, 2020, and the phone became available on November 13, 2020.";
        document.getElementById('phoneimg').src = "images/iphone_12.png";
    }
    else if(data == 'btn3'){
        document.getElementById('para').innerHTML = "The iPhone 8 and iPhone 8 Plus are smartphones designed, developed, and marketed by Apple Inc. They make up the 11th generation of the iPhone. The iPhone 8 was released on September 22, 2017, succeeding the iPhone 7 and iPhone 7 Plus and preceding the iPhone X. The iPhone 8, and iPhone 8 Plus were discontinued by Apple on April 15, 2020 with the release of the second-generation iPhone SE.";
        document.getElementById('phoneimg').src = "images/iphone_8.png";
    }
    else if(data == 'btn4'){
        document.getElementById('para').innerHTML = "The first-generation iPhone SE (also known as iPhone SE 1 or iPhone SE 2016; SE is an initialism for Special Edition) is a smartphone that was designed, developed, and marketed by Apple Inc. It is part of the 9th generation of the iPhone alongside the higher-end iPhone 6S and 6S Plus. Pre-orders began on March 24, 2016. It was officially released on March 31, 2016. It was re-released on March 24, 2017 with larger storage capacities.";
        document.getElementById('phoneimg').src = "images/iphone_se.png";
    }
    else{
        window.alert("Invalid choice!");
    }
}

function priceForLoop()
{
    var phone = ["Iphone 13 => $1,499", "Iphone 12 => $999", "Iphone XS => $799", "Iphone 8 => $499", "Iphone SE => $349"];
    var text = "";

    for(var i=0;i<phone.length;i++)
    {
        text += phone[i] + "<br>";
    }
    document.getElementById('phoneimg').src = "images/iphones.png";
    document.getElementById('para').innerHTML = text;
}

function priceForInLoop(){
    var phones = [];
    phones["Iphone 13"] = "$1499";
    phones["Iphone 12"] = "$999";
    phones["Iphone XS"] = "$799";
    phones["Iphone 8"] = "$499";
    phones["Iphone SE"] = "$349";

    var text = "";

    for(item in phones){
        text += item + " => " + phones[item] + "<br>";
    }
    document.getElementById('phoneimg').src = "images/iphones.png";
    document.getElementById('para').innerHTML = text;
}

function priceHigher(){
    var phones = [];
    phones["Iphone 13"] = 1499;
    phones["Iphone 12"] = 1199;
    phones["Iphone XS"] = 799;
    phones["Iphone 8"] = 499;
    phones["Iphone SE"] = 349;

    var text = "";

    for(item in phones){
        if(phones[item] > 1000)
        text += item + " => " + phones[item] + "<br>";
    }
    document.getElementById('phoneimg').src = "images/iphones.png";
    document.getElementById('para').innerHTML = text;
}

function priceLower(){
    var phones = [];
    phones["Iphone 13"] = 1499;
    phones["Iphone 12"] = 1199;
    phones["Iphone XS"] = 799;
    phones["Iphone 8"] = 499;
    phones["Iphone SE"] = 349;

    var text = "";

    for(item in phones){
        if(phones[item] < 1000)
        text += item + " => " + phones[item] + "<br>";
    }
    document.getElementById('phoneimg').src = "images/iphones.png";
    document.getElementById('para').innerHTML = text;
}