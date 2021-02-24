import Document, {Head,Main,NextScript,Html} from 'next/document';
import { render } from 'sass';

export default class CustomDocument extends Document {
    render(){
        return <Html>
        <Head>
            <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/> 
        </Head>
        <body>
            <Main/>
        </body>
        <NextScript/>
    </Html>
    }
    
}