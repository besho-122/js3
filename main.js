var data =[];
var d='';
var f =document.querySelector('form');
f.onsubmit =function(e){
    e.preventDefault();
    var product ={
        name: document.getElementById('name').value ,
        description:document.getElementById('description').value,
        price:document.getElementById('price').value,
    
    }
    data.push(product);
    for (var i =0 ; i < data.length ; i++) {
        d+='<tr><td>'+data[i].name
        +'</td><td>'+data[i].description
        +'</td><td>'+data[i].price+'</td></tr>';
       
        console.log(data);
        
    } 
    document.getElementById('productList').innerHTML = d;
}



