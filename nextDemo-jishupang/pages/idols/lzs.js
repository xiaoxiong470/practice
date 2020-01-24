import Link from "next/Link";
import {withRouter} from "next/router";
 function Lzs({router}) {
    return (
        <div>
            <div>李钟硕,{router.query.age}</div>
           <Link href="/"><a>首页</a></Link>
        </div>
    )
}
export default withRouter(Lzs);
