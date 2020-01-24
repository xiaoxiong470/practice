import Link from "next/Link";
import {withRouter} from "next/router";
 function Lzh({router}) {
    return (
        <div>
            <div>李洙赫,{router.query.age}</div>
           <Link href="/"><a>首页</a></Link>
        </div>
    )
}
export default withRouter(Lzh);
