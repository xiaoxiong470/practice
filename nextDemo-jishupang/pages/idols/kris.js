import Link from "next/Link";
import {withRouter} from "next/router";

 function Kris({router}) {
   
    return (
        <div>
           <div>吴亦凡,{router.query.age}</div>
           <Link href="/"><a>首页</a></Link>
        </div>
    )
}

export default withRouter(Kris);