

export const CreateUserApi = async (email, password) => {
    try {
        const response = await fetch('http://localhost:3000/user/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            const result = await response.json();
            console.log('User created successfully', result);
            return true;

        } else {
            console.error('Error creating user', response.status);

        }

    } catch (error) {
        console.error('Error during registration ', error);
    }

}

export const LoginUserApi = async (email, password) => {
    try {
        const response = await fetch('http://localhost:3000/user/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            const result = await response.json();
            console.log('User logined successfully', result);
            return true;

        } else {
            console.error('Error logined user', response.status);
        }

    } catch (error) {
        console.error('Error while logined', error);
    }

}


