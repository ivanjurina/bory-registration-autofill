const defaultFormData = {
    'first-name': 'Petra',
    'last-name': 'Marcinova',
    'birth-date': '20.3.2002',
    'birth-number': '9001011234',
    'possible-birth-date': '19.5.2026',
    'email': 'john.doe@example.com',
    'street': 'Main Street 123',
    'zipCode': '84101',
    'phone': '908609567',
    'insurance': 'VšZP',
    'state': 'Slovensko',
    'city': 'Bratislava'
};

// Set default values when extension is installed
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.get(Object.keys(defaultFormData), (result) => {
        // Only set values that haven't been set before
        const newData = {};
        Object.keys(defaultFormData).forEach(key => {
            if (!result[key]) {
                newData[key] = defaultFormData[key];
            }
        });
        
        if (Object.keys(newData).length > 0) {
            chrome.storage.sync.set(newData);
        }
    });
}); 