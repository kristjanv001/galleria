import { Art } from "../../components/Art";
import { Header } from "../../components/Header"
import { MetaTags } from "../../components/Metatags"


export default function ArtPage() {
  return (
    <div>
      <MetaTags
        title=""
        description=""
      />
      <Header />
      <div >
        <Art />
      </div>
    </div>
  )
}
