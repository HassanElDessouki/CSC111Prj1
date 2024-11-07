function showInfo(destination) {
  const info = {
    "Rome": "Rome is Italy's capital city, famous for the Colosseum, the Vatican, and a blend of historic ruins and modern cafes.",
    "Venice": "Venice is known for its canals, Renaissance and Gothic palaces, and romantic gondola rides through its unique waterways.",
    "Florence": "Florence is celebrated as the birthplace of the Renaissance and boasts amazing art museums, like the Uffizi Gallery.",
    "Amalfi Coast": "The Amalfi Coast is a stunning coastal area known for its beautiful cliffs, colorful villages, and crystal-clear waters."
  };

  const infoDiv = document.getElementById('destination-info');
  infoDiv.style.display = 'block';
  infoDiv.innerHTML = `<h3>${destination}</h3><p>${info[destination]}</p>`;
}
