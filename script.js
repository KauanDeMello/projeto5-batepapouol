
const getUser = prompt('Qual o seu nome?'); {
    
    axios.get('/https://mock-api.driven.com.br/api/v6/uol/participants')

    .then(response => {
        const users = response.data.data;
        
        console.log(`GET users`, users)
    })
};


const createUser = (user) => {
    axios.post('https://mock-api.driven.com.br/api/v6/uol/participants',user)
    .then(response => {
        const addedUser = response.data;

        console.log(`POST: user is added`,addedUser);

        appendToDom([addedUser]);
    })
    .catch(error => console.error(error));
};



