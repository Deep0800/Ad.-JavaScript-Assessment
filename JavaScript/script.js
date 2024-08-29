// Function to create a form element
function createFormElement() {
    const container = document.getElementById('form-container');

    // Create the form element
    const form = document.createElement('form');
    form.id = 'booking-form';

    // Create and append Choice of Booking dropdown
    const bookingChoiceDiv = document.createElement('div');
    bookingChoiceDiv.className = 'form-group';
    const bookingChoiceLabel = document.createElement('label');
    bookingChoiceLabel.htmlFor = 'booking-choice';
    bookingChoiceLabel.appendChild(document.createTextNode('Choice of Booking:'));
    const bookingChoiceSelect = document.createElement('select');
    bookingChoiceSelect.id = 'booking-choice';
    bookingChoiceSelect.required = true;
    bookingChoiceSelect.appendChild(createOption('Select', ''));
    bookingChoiceSelect.appendChild(createOption('Full Day Booking', 'full-day'));
    bookingChoiceSelect.appendChild(createOption('Half Day Booking', 'half-day'));
    bookingChoiceSelect.appendChild(createOption('Hourly Booking', 'hourly'));

    bookingChoiceDiv.appendChild(bookingChoiceLabel);
    bookingChoiceDiv.appendChild(bookingChoiceSelect);
    form.appendChild(bookingChoiceDiv);

    // Create and append User Name input
    form.appendChild(createInputField('text', 'username', 'User Name:', true));

    // Create and append Mobile Number input
    form.appendChild(createInputField('tel', 'mobile', 'Mobile Number:', true));

    // Create and append Email input
    form.appendChild(createInputField('email', 'email', 'Email:', true));

    // Create and append Number of Persons input
    form.appendChild(createInputField('number', 'no-of-persons', 'Number of Persons:', true));

    // Create and append Date input
    const dateDiv = document.createElement('div');
    dateDiv.className = 'form-group';
    dateDiv.id = 'date-div';
    const dateLabel = document.createElement('label');
    dateLabel.htmlFor = 'date';
    dateLabel.appendChild(document.createTextNode('Date:'));
    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.id = 'date';
    dateInput.required = true;
    dateDiv.appendChild(dateLabel);
    dateDiv.appendChild(dateInput);
    form.appendChild(dateDiv);

    // Create and append Time input (initially hidden)
    const timeDiv = document.createElement('div');
    timeDiv.className = 'form-group hidden';
    timeDiv.id = 'time-div';
    const timeLabel = document.createElement('label');
    timeLabel.htmlFor = 'time';
    timeLabel.appendChild(document.createTextNode('Time:'));
    const timeInput = document.createElement('input');
    timeInput.type = 'time';
    timeInput.id = 'time';
    timeDiv.appendChild(timeLabel);
    timeDiv.appendChild(timeInput);
    form.appendChild(timeDiv);

    // Create and append Slot select (initially hidden)
    const slotDiv = document.createElement('div');
    slotDiv.className = 'form-group hidden';
    slotDiv.id = 'slot-div';
    const slotLabel = document.createElement('label');
    slotLabel.htmlFor = 'slot';
    slotLabel.appendChild(document.createTextNode('Slot:'));
    const slotSelect = document.createElement('select');
    slotSelect.id = 'slot';
    slotSelect.appendChild(createOption('Breakfast', 'breakfast'));
    slotSelect.appendChild(createOption('Lunch', 'lunch'));
    slotSelect.appendChild(createOption('Dinner', 'dinner'));
    slotDiv.appendChild(slotLabel);
    slotDiv.appendChild(slotSelect);
    form.appendChild(slotDiv);

    // Create and append Submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.appendChild(document.createTextNode('Submit'));
    form.appendChild(submitButton);

    // Append form to container
    container.appendChild(form);

    // Event listener for dynamic field display
    bookingChoiceSelect.addEventListener('change', function () {
        const choice = this.value;
        dateDiv.classList.remove('hidden');
        timeDiv.classList.add('hidden');
        slotDiv.classList.add('hidden');
        if (choice === 'hourly') {
            timeDiv.classList.remove('hidden');
        } else if (choice === 'half-day') {
            slotDiv.classList.remove('hidden');
        }
    });
}

// Helper function to create option elements
function createOption(text, value) {
    const option = document.createElement('option');
    option.value = value;
    option.appendChild(document.createTextNode(text));
    return option;
}

// Helper function to create input fields
function createInputField(type, id, labelText, required = false) {
    const div = document.createElement('div');
    div.className = 'form-group';
    const label = document.createElement('label');
    label.htmlFor = id;
    label.appendChild(document.createTextNode(labelText));
    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    if (required) {
        input.required = true;
    }
    div.appendChild(label);
    div.appendChild(input);
    return div;
}

// Create the form when the page loads
window.onload = createFormElement;