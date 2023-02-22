//* Package Imports
import Cubic from 'cubic-library';


/**
    ** Cubic Initilization .
    * @param {string}  token Token generated from Cloud cubic website.
    * @param {string}  appid AppID generated from Cloud cubic website.
    * @param {number}  timeout In milliseconds to terminate operation.
    * @return {object}  Returns an initialized Cubic Object .
*/
const cubicObject = (token,appid,timeout) => {
    return new Cubic(token,appid,timeout);
}



export default cubicObject;