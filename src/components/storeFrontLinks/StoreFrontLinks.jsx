import React from 'react'
import parse from 'html-react-parser';
import './storeFrontLinks.css';

const linkData = {
    mustHaveData: [
    {
        title: 'Amazon',
        text: 'Sugarbear Sleep Aid Gummies...',
        imageLink: '<a href="https://www.amazon.com/gp/product/B07N48MTTH?ie=UTF8&psc=1&linkCode=li2&tag=mydearestjuli-20&linkId=b87c759eb2184abb73177fad9ca73e2d&language=en_US&ref_=as_li_ss_il" target="_blank" rel="noreferrer"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07N48MTTH&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=mydearestjuli-20&language=en_US" alt="Sugarbear Sleep Aid Gummies for Adults with Melatonin 6mg, Magnesium, L-Theanine, 5 HTP, Vitamin B6, Valerian Root, Lemon Balm, Passionflower - Vegan Chewable Sleep Supplement, Sleep Vitamins, 60 Ct" />',
        link: 'https://amzn.to/3KzRky0'
    },
    {
        title: 'Amazon',
        text: 'GENNISSY 10 OZ Black Bucket Hip Flask...',
        imageLink: '<a href="https://www.amazon.com/gp/product/B07FKZLXSJ?ie=UTF8&th=1&linkCode=li2&tag=mydearestjuli-20&linkId=ea489f810eb41321fdb3f2dc81912364&language=en_US&ref_=as_li_ss_il" target="_blank" rel="noreferrer"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07FKZLXSJ&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=mydearestjuli-20&language=en_US" alt="GENNISSY 10 OZ Black Bucket Hip Flask - PU Leather Stainless Steel Men Flasks for Liquor with Funnel and Cups" /></a>',
        link: 'https://amzn.to/3nSb0nC'
    },
    {
        title: 'Amazon',
        text: 'KISS Strip Eyelash Adhesive...',
        imageLink: '<a href="https://www.amazon.com/Strip-Eyelash-Adhesive-Clear-0-176/dp/B01BMMOAFU?keywords=kiss+lash+glue&qid=1680746894&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sr=8-3&linkCode=li2&tag=mydearestjuli-20&linkId=1f7cc7f9644af1d99a5c48bcb111f32f&language=en_US&ref_=as_li_ss_il" target="_blank" rel="noreferrer"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01BMMOAFU&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=mydearestjuli-20&language=en_US" alt="KISS Strip Eyelash Adhesive, Clear 0.176 Oz KPLGL01"/></a>',
        link: 'https://amzn.to/3GljDh1'
    },
    {
        title: 'Amazon',
        text: 'Hawaiian Tropic SPF 30 Broad Spectrum Sunscreen...',
        imageLink: '<a href="https://www.amazon.com/dp/B084R1NLCP?&linkCode=li2&tag=mydearestjuli-20&linkId=dee6fb8b9f83ba67aaad4ddbc93fd6a4&language=en_US&ref_=as_li_ss_il" target="_blank"rel="noreferrer"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B084R1NLCP&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=mydearestjuli-20&language=en_US" alt="Hawaiian Tropic SPF 30 Broad Spectrum Sunscreen, Silk Hydration Weightless Moisturizing Sunscreen Lotion, 6 Fl Oz, 2 Count (Pack of 1)"/></a>',
        link: 'https://amzn.to/3GkFnJQ'
    },
    ],
    makeUpData: [
    {
        title: 'Amazon',
        text: 'e.l.f. Power Grip Primer...',
        imageLink: '<a href="https://www.amazon.com/dp/B09XMYFTB7?&linkCode=li2&tag=mydearestjuli-20&linkId=8ec986bc42935b2ef3011e02d315edf1&language=en_US&ref_=as_li_ss_il" target="_blank" rel="noreferrer"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09XMYFTB7&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=mydearestjuli-20&language=en_US" alt="e.l.f. Power Grip Primer, Gel-Based & Hydrating Face Primer For Smoothing Skin & Gripping Makeup, Moisturizes & Primes, 0.811 Fl Oz (24 ml)"/></a>',
        link: 'https://amzn.to/3ZFOL1H'
    },
    ],
    hygieneData: [
        {
            title: 'Amazon',
            text: 'Peak Essentials | Tung Tongue Gel...',
            imageLink: '<a href="https://www.amazon.com/dp/B00CRGNXUY?th=1&linkCode=li2&tag=mydearestjuli-20&linkId=8048801759ee83a0469803b065705de6&language=en_US&ref_=as_li_ss_il" target="_blank" rel="noreferrer"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00CRGNXUY&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=mydearestjuli-20&language=en_US" alt="Peak Essentials | Tung Tongue Gel | Fresh Mint Tongue Cleaning Paste | Bad Breath and Halitosis | Mouth Odor Eliminator | Use with Tongue Brushes & Scrapers | Made in America (2 Pack)"/></a>',
            link: 'https://amzn.to/3Mg4ZLQ'
        },
        {
            title: 'Amazon',
            text: 'PURITO From Green Cleansing Oil...',
            imageLink: '<a href="https://www.amazon.com/dp/B08XW2X1NM?&linkCode=li2&tag=mydearestjuli-20&linkId=77e869f6d7e090704ed32bd2a7f91371&language=en_US&ref_=as_li_ss_il" target="_blank" rel="noreferrer"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08XW2X1NM&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=mydearestjuli-20&language=en_US" alt="PURITO From Green Cleansing Oil 6.76 fl.oz / 200ml Gentle Facial Cleanser, Cruelty-free & Vegan, Nature-derived Oils (Renewed)"/></a>',
            link: 'https://amzn.to/3KmO8EG'
        },
    ],
    giftGuideForHimData: [
        {
            title: 'Amazon',
            text: 'Distil Union Folly MagLock Seafarer Polarized Sunglasses...',
            imageLink: '<a href="https://www.amazon.com/dp/B07B3ZD48F?th=1&linkCode=li2&tag=mydearestjuli-20&linkId=ee69749a9b4c1cee27a9536a80188f13&language=en_US&ref_=as_li_ss_il" target="_blank" rel="noreferrer"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07B3ZD48F&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=mydearestjuli-20&language=en_US" alt="Distil Union Folly MagLock Seafarer Polarized Sunglasses | Lightweight, Flexible and Secure"/></a>',
            link: 'https://amzn.to/3Ug9p7j'
        },
        {
            title: 'Amazon',
            text: 'LEATHERMAN, Wingman Multitool...',
            imageLink: '<a href="https://www.amazon.com/gp/product/B005DI0XM4?ie=UTF8&psc=1&linkCode=li2&tag=mydearestjuli-20&linkId=0d5ee12928a710011c0ab53de56a281d&language=en_US&ref_=as_li_ss_il" target="_blank" rel="noreferrer"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B005DI0XM4&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=mydearestjuli-20&language=en_US" alt="LEATHERMAN, Wingman Multitool with Spring-Action Pliers and Scissors, Stainless Steel with Nylon Sheath" /></a>',
            link: 'https://amzn.to/3K7s68s'
        },
    ],
};
  



const StoreFrontLinks = (props) => {
    // console.log('check', mustHaveData[0].imageLink);
    // console.log('check', props.name[0].imageLink);
    // console.log('check mustHaveData', linkData.mustHaveData);
    // console.log('check mustHaveData[0].imageLink', linkData.mustHaveData[0].imageLink);
    // console.log('check props', props);
    // console.log('check props.name', props.name);
    // const dataName = props.name;
    // console.log('dataName start:', dataName);
    // console.log('linkData[dataName]', linkData[dataName]);
    // console.log('[dataName]', [dataName]);
    // console.log('{dataName}', {dataName});
    
    return (
      <div className='mdjStoreFrontLinks'>
            {/* <p>here are the links</p> */}
            {linkData[props.name].map((item,i) => (
                <div className='mdjStoreFrontLinks-container' key={i}>
                    <div className="mdjStoreFrontLinks-container-title">
                        <h1>{item.title}</h1>
                    </div>
                    <div className="mdjStoreFrontLinks-container-imageLink" >
                        {parse(item.imageLink)}
                    </div>
                    <div className="mdjStoreFrontLinks-container-link">
                        <a href={item.link} id="amazon-link" >{item.text}</a>
                    </div>
                </div>
            ))}
      </div>
    )
  }

export default StoreFrontLinks