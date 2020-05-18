import axios from 'axios';


const AxiosWithAuth = () => {

    return axios
        .create(

            { headers:{ 

                authorization: localStorage.getItem('token') 
                
            }
            
            }
        )

}

export default AxiosWithAuth;