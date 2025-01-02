 const formData = {
    'first-name': 'petra',
    'last-name': 'marcinova', 
    'birth-date': '27.8.2000',
    'birth-number': '9058666666',
    'possible-birth-date': '19.5.2025',
    'email': 'anna.novak@exampleee.com',
    'street': 'Jilemnickéeeeho',
    'zipCode': '666420',
    'phone': '908598932',
    'insurance': 'VšZP',
    'state': 'Slovensko',
    'city': 'Bratislava'
 };
 
 function fillForm() {
    // Basic inputs
    Object.entries(formData).forEach(([id, value]) => {
        const el = document.getElementById(id);
        if (el) {
            el.value = value;
            ['input', 'change', 'blur'].forEach(event => 
                el.dispatchEvent(new Event(event, {bubbles: true}))
            );
        }
    });
 
    // Phone
    const phoneInput = document.querySelector('input[type="tel"][placeholder="Tel. číslo"]');
    if (phoneInput) {
        phoneInput.value = formData.phone;
        ['input', 'change', 'blur'].forEach(event => 
            phoneInput.dispatchEvent(new Event(event, {bubbles: true}))
        );
    }
 
    // Insurance
    setTimeout(() => {
        const insuranceSelect = document.querySelector('#insurance mat-select');
        insuranceSelect?.click();
        setTimeout(() => {
            const option = Array.from(document.querySelectorAll('mat-option'))
                .find(opt => opt.textContent.trim() === formData.insurance);
            option?.click();
        }, 300);
    }, 0);
 
    // Add city selection to fillForm():
// State selection with city
setTimeout(() => {
    const stateSelect = document.querySelector('#country mat-select');
    stateSelect?.click();
    setTimeout(() => {
        const stateOption = Array.from(document.querySelectorAll('mat-option'))
            .find(opt => opt.textContent.trim() === formData.state);
        stateOption?.click();
 
        // City selection after state
        setTimeout(() => {
            const citySelect = document.querySelector('lib-autocomplete mat-select');
            citySelect?.click();
            
            setTimeout(() => {
                const searchInput = document.querySelector('.mat-mdc-select-panel input');
                if (searchInput) {
                    searchInput.focus();
                    searchInput.value = formData.city;
                    searchInput.dispatchEvent(new Event('input', {bubbles: true}));
                    
                    setTimeout(() => {
                        const citySpans = document.querySelectorAll('mat-option span.mdc-list-item__primary-text');
                        const cityOption = Array.from(citySpans)
                            .find(span => span.textContent.trim() === formData.city)
                            ?.closest('mat-option');
                            
                        cityOption?.click();
                    }, 500);
                }
            }, 300);
        }, 500);
    }, 300);
 }, 500);
 
    // Checkboxes
    ['personal-data-input', 'terms-and-conditions-input', 'marketing-input'].forEach(id => {
        const checkbox = document.getElementById(id);
        if (checkbox && !checkbox.checked) checkbox.click();
    });
 }
 
 setTimeout(fillForm, 1000);