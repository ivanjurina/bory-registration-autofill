// Load form data from chrome.storage.sync
let formData = {};

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
  // Use the values from storage instead of hardcoded values
  formData = {
    'first-name': result['first-name'] || '',
    'last-name': result['last-name'] || '',
    'birth-date': result['birth-date'] || '',
    'birth-number': result['birth-number'] || '',
    'possible-birth-date': result['possible-birth-date'] || '',
    'email': result['email'] || '',
    'street': result['street'] || '',
    'zipCode': result['zipCode'] || '',
    'phone': result['phone'] || '',
    'insurance': result['insurance'] || '',
    'state': result['state'] || '',
    'city': result['city'] || ''
  };
  console.log('Loaded form data:', formData);
});

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

   // State and City
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