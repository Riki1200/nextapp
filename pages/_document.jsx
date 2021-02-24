import Document, {Head,Main,NextScript,Html} from 'next/document';
import { render } from 'sass';

export default class CustomDocument extends Document {
    render(){
        return <Html>
        <Head></Head>
        <body>
            <Main/>
        </body>
        <NextScript/>
    </Html>
    }
    
}