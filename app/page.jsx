import FormBox from '@component/FormBox';
import Youvid from '@component/Youvid';
import LanguageGrid from '@component/LanguageGrid';
import GridWithCards from '@component/GridwithCards';
import IndustryCard from '@component/IndustryCard';
import CaseStudy from '@component/CaseStudy';
import Testimonials from '@component/Testimonials';
import Whychooseus from '@component/Whychooseus';
import Avgtm from '@component/Avgtm';
import KnowPrice from '@component/KnowPrice';
import Aboutus from '@component/Aboutus';

const Home = () => {
    return (
        <section>
            <FormBox/>
            <Youvid/>
            <LanguageGrid/>
            <GridWithCards/>
            <IndustryCard/>
            <CaseStudy/>
            <Testimonials/>
            <Whychooseus/>
            <Avgtm/>
            <KnowPrice/>
            <Aboutus/>
        </section>
    );
}
 
export default Home;