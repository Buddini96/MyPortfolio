let h1Content=$("#content").text();
let cont=0;
setInterval(animateText,1000);
function animateText(){
    let content=h1Content.substring(0,cont);
    $("#content").text(content);
    cont++;
    if (cont==h1Content.length){
        cont=0;
    }
}

/*<div className="calculator">
    <h1 id="content">Javascript Calculator</h1>
    <button id="clear">C</button>
    <div className="screen">0</div>
    <div className="buttons">
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>+</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>/</button>
        <button>0</button>
        <button>.</button>
        <button id="equals">=</button>
        <button>*</button>
    </div>
</div>*/
