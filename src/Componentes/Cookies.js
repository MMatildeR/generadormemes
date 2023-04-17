import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Cookies = () => {

    const MySwal = withReactContent(Swal)

    Swal.fire('¡Bienvenidx! Por favor, aceptá las cookies.');
}

export default Cookies;