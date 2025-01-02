
// Load saved data when popup opens
document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get([
        'first-name',
        'last-name',
        'birth-date',
        'birth-number',
        'possible-birth-date',
        'email',
        'street',
        'zipCode',
        'phone',
        'insurance',
        'state',
        'city'
    ], (result) => {
        Object.keys(result).forEach(key => {
            const element = document.getElementById(key);
            if (element) {
                element.value = result[key] || '';
            }
        });
    });
});

// Save data when save button is clicked
document.getElementById('save').addEventListener('click', () => {
    const formData = {
        'first-name': document.getElementById('first-name').value,
        'last-name': document.getElementById('last-name').value,
        'birth-date': document.getElementById('birth-date').value,
        'birth-number': document.getElementById('birth-number').value,
        'possible-birth-date': document.getElementById('possible-birth-date').value,
        'email': document.getElementById('email').value,
        'street': document.getElementById('street').value,
        'zipCode': document.getElementById('zipCode').value,
        'phone': document.getElementById('phone').value,
        'insurance': document.getElementById('insurance').value,
        'state': document.getElementById('state').value,
        'city': document.getElementById('city').value
    };

    chrome.storage.sync.set(formData, () => {
        alert('Settings saved!');
    });
});