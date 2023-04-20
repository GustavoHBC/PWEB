function getGreatestNumber() {
    const a = document.getElementById('number1').value;
    const b = document.getElementById('number2').value;
    const c = document.getElementById('number3').value;
    
    return alert(`${Math.max(a, b, c)} é o maior número`);
}

function organizeNumbers() {
    const a = document.getElementById('number1').value;
    const b = document.getElementById('number2').value;
    const c = document.getElementById('number3').value;

    return alert(`${[a, b, c].sort((a, b) => a - b)} estão em ordem crescente`);
}