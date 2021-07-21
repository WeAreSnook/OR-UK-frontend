import RegisterContent from './RegisterContent';
import GenericContentContainer from './GenericContentContainer';

const RegisterPage = (props) => <GenericContentContainer 
    {...props}
    articleClassName='register-page'
    parent={{ path: `/community`, title: `Community` }}
    ContentComponent={RegisterContent}
/>;

export default RegisterPage;