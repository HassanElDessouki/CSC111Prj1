// This function redirect the user to the selected country webpage
// The (country) input parameter is used to input the id of the div
function explore(country) { 
    switch(country) {
        case "pakistan":
            window.location.href = './countries/Pakistan/pakistan.html';
            break;
        
        case "syria":
            window.location.href = './countries/Syria/syria.html';
            break;

        case "usa":
            window.location.href = './countries/USA/usa.html';
            break;

        case "italy":
            window.location.href = './countries/Italy/italy.html';
            break;

        case "uk":
            window.location.href = './countries/UK/uk.html';
            break;

        case "brazil":
            window.location.href = './countries/Brazil/brazil.html';
            break;
        
        case "mexico":
            window.location.href = './countries/Mexico/mexico.html';
            break;

        case "egypt":
            window.location.href = './countries/Egypt/egypt.html';
            break;
    
        case "canada":
            window.location.href = './countries/Canada/canada.html';
            break;
    
        case "palestine":
            window.location.href = './countries/Palestine/palestine.html';
            break;
            
        case "kenya":
            window.location.href = './countries/Kenya/kenya.html';
            break;  
        }
}

function toggleDetails(elementId) {
    const info = document.getElementById(elementId);
    info.classList.toggle('hidden');
}