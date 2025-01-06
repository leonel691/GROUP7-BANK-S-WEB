const addClient = document.getElementById('addClient');

addClient.addEventListener('click', function () { 
    let client = document.getElementById('client');
    let clientList = document.getElementById('clientList');
    let newClient = document.createElement('li');
    newClient.textContent = client.value;
    clientList.appendChild(newClient);
    client.value = '';
})