import house from '../component/assets/img/House.png';
import '../component/css/home.css';
export const HomePage = () => {

    return (
        <div className='home_page'>
            <section className='home_img'>
                <img
                className='img'
                src={house}
                alt='#'
                />
            </section>
            <section className='home-text'>
                <p> 
                        Gregory House spent eight seasons gifting us all with gems of acerbic wisdom on topics that ranged
                    from medicine to the abundant flaws of our species. He had a way of cutting through the bullsh*t of 
                    life and getting to the heart of a problem. And normally that problem involved an infectious, highly 
                    contagious, unheard of disease that threatened lives.
                </p>
                <p>
                        Thankfully, most of us don’t have to deal with that kind of pressure (or the pain that sharpened House’ wit),
                    but most of us aren’t tormented geniuses with an arsenal of one-liners either. Still, that doesn’t mean House’s
                    best quotes can’t be of use to us.
                </p>
                <p>
                        Maybe you want to indulge your more cynical self or practice your own barbed insults, and that’s okay. But rather
                    than act like a know-it-all colleague who seemingly forgets how smart Greg House is despite his track record, why
                    don’t you think about this collection of smart musings about existence the next time you need to make sense of the
                    mystery we call life.
                </p>
                <p>
                        “It’s a basic truth of the human condition that everybody lies. The only variable is about what.”
                    One of the doctor’s favorite clapbacks was to remind his fellow white coats (and usually the patients he treated) that
                    lying comes naturally to the human race. House was skeptical about anything that came out of anyone’s mouth. Though cynical
                    and, frankly a bit depressing, the motto “Everybody lies” served him well throughout the eight seasons of the show and it’s
                    probably a good model to follow when you’re dealing with any unknown. After all, people like to deceive but there’s no faking
                    a case of brain measles.
                </p>
            </section>
        </div>
    )
};