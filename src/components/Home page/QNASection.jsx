import styled from 'styled-components';
const QNASection = () => {
    return (
        <StyledQNASection>       
            {arrOfQues.map((item) => {
                return <StyledQNA  key={item.id}>
                    <h2 className="ques">{item.ques}</h2>
                    <p className="ans">{item.ans}</p>
                </StyledQNA >
            
            })}
        </StyledQNASection>
    )
}

export const StyledQNASection = styled.div`
    /* border:1px solid lime; */
    width:80%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap:30px;
    margin-top: 80px;
    margin-bottom: 80px;
`;
const StyledQNA = styled.div`
    & > .ques {
        color:#007fad;
        font-size:18px;
        margin-bottom: 15px;
    }
    & > .ans {
        font-size:13px;
        word-spacing: 2px;
        letter-spacing: 1px;
        line-height: 1.5;
    }

`;

const arrOfQues = [
    {
        ques: "trivago's global hotel search",
        ans: "trivago’s hotel search allows users to compare hotel prices in just a few clicks from more than 300 booking sites for more than 5.0 million hotels and other types of accommodation in over 190 countries. We help millions of travelers each year compare deals for hotels and accommodations. Get information for weekend trips to cities like Mumbai or Bengaluru and you can find the right hotel on trivago quickly and easily. Delhi and its surrounding area are great for trips that are a week or longer with the numerous hotels available.",
        id: 1
    },

    {
        ques: "Find cheap hotels on trivago",
        ans: "With trivago you can easily find your ideal hotel and compare prices from different websites. Simply enter where you want to go and your desired travel dates, and let our hotel search engine compare accommodation prices for you. To refine your search results, simply filter by price, distance (e.g. from the beach), star category, facilities and more. From budget hostels to luxury suites, trivago makes it easy to book online. You can search from a large variety of rooms and locations across India, like Shimla and Jaipur to popular cities and holiday destinations abroad!",
        id: 2
    },


    {
        ques: "Hotel reviews help you find your ideal hotel",
        ans: "Over 175 million aggregated hotel ratings and more than 19 million images allow you to find out more about where you're travelling. To get an extended overview of a hotel property, trivago shows the average rating and extensive reviews from other booking sites, e.g. Hotels.com, Expedia, Agoda, leading hotels, etc. trivago makes it easy for you to find information about your trip to Dubai, including the ideal hotel for you.",
        id: 3
    },


    {
        ques: "How to book",
        ans: "vago is a hotel search with an extensive price comparison. The prices shown come from numerous hotels and booking websites. This means that while users decide on trivago which hotel best suits their needs, the booking process itself is completed through the booking sites (which are linked to our website). By clicking on the “view deal” button, you will be forwarded onto a booking site where you can complete the reservation for the hotel deal found on trivago.Let trivago help you to find the right price from over 300 booking sites!",
        
        id: 4
    },
    
]
export { QNASection };