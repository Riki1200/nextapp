import Document, {Head,Main,NextScript,Html} from 'next/document';
import { render } from 'sass';

export default class CustomDocument extends Document {
    render(){
        return <Html>
        <Head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous"></link>
        </Head>
        <body>
            <Main/>
        </body>
        <NextScript/>
    </Html>
    }
    
}