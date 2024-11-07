function showInfo(destination) {
  const info = {
    "London": "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city.",
    "Edinburgh": "Edinburgh is Scotland's compact, hilly capital. It has a medieval Old Town and elegant Georgian New Town with gardens and neoclassical buildings. Looming over the city is Edinburgh Castle, home to Scotland’s crown jewels and the Stone of Destiny, used in the coronation of Scottish rulers. Arthur’s Seat is an imposing peak in Holyrood Park with sweeping views, and Calton Hill is topped with monuments and memorials.",
    "Lake District": "The Lake District includes the highest land in England. These mountains, known as “fells” are rich in wildlife, full of archaeological sites and are predominantly open, common land and an integral part of the hill farming system.",
    "Stonehenge": "Stonehenge is the most architecturally sophisticated prehistoric stone circle in the world, while Avebury is the largest in the world. Together with inter-related monuments and their associated landscapes, they help us to understand Neolithic and Bronze Age ceremonial and mortuary practices."
  };

  const infoDiv = document.getElementById('destination-info');
  infoDiv.style.display = 'block';
  infoDiv.innerHTML = `<h3>${destination}</h3><p>${info[destination]}</p>`;
}
