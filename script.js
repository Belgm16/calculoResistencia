function FazerCalculo(){
    let valueF01 =  (document.getElementById("faixa01").value);
    let valueF02 =  (document.getElementById("faixa02").value);
    let valuemulti =  (document.getElementById("multi").value);
    let valuetoler = (document.getElementById("toler").value);
    let operacao =(valueF01+valueF02) * valuemulti;
    let toler = (operacao - valuetoler); 
    let toler02 = (operacao+valuetoler);

    document.getElementById("final").value = operacao;
    document.getElementById("tolera").value = toler;
    document.getElementById("toler2").value = toler02;







    
}