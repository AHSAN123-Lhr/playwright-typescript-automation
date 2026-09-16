export const userData = {

    // Account information
    password: 'Ahsan@123',
    title: 'Mr.',

    // Date of birth
    day: '10',
    month: '5',
    year: '1996',

    // Personal information
    firstName: 'Ahsan',
    lastName: 'Khan',

    // Address information
    company: 'Ahsan Automation',
    address: '123 Main Street',
    address2: 'Block A',
    country: 'India',
    state: 'Punjab',
    city: 'Lahore',
    zipcode: '54000',
    mobile: '03001234567'
};


export function generateUserData() {

    const randomNumber = Date.now();

    return {
        name: `Ahsan${randomNumber}`,
        email: `ahsan${randomNumber}@example.com`,
        password: 'Ahsan@123'
    };
}